
////................it is best 
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Dashboard.css';

const MAX_ROOMS = {
    Dantewada: 6,
    Geedam: 2,
    Barsur: 2,
};

const API_URL = 'https://script.google.com/macros/s/AKfycbwRWOxc83WAWuSJrxs-Hc7PV5OOTakx5i-72HMpnqPyWeGRZoWfKsZlHABaJAFAt3l_/exec';

const Dashboard = () => {
    const [selectedLocation, setSelectedLocation] = useState("Dantewada");
    const [selectedDate, setSelectedDate] = useState(new Date()); // Default to today's date
    const [dashboardData, setDashboardData] = useState({
        acceptedBookings: 0,
        roomsAvailable: 0,
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    useEffect(() => {
        const fetchDashboardData = async () => {
            setLoading(true);
            setError('');
            try {
                const response = await fetch(`${API_URL}`);
                const data = await response.json();
                console.log('Fetched data:', data);

                if (data && Array.isArray(data.rooms)) {
                    const selectedDateStr = selectedDate.toLocaleDateString("en-GB"); // Format as DD-MM-YYYY
                    const filteredData = data.rooms.filter(
                        (room) =>
                            room.Location === selectedLocation &&
                            room.Status === "Accepted" &&
                            new Date(room['Check In Time']).toLocaleDateString("en-GB") === selectedDateStr
                    );

                    const acceptedBookings = filteredData.length;
                    const roomsAvailable = MAX_ROOMS[selectedLocation] - acceptedBookings;

                    setDashboardData({
                        acceptedBookings,
                        roomsAvailable: Math.max(roomsAvailable, 0),
                    });
                } else {
                    setError('Dashboard data is unavailable.');
                }
            } catch (err) {
                console.error('Error fetching dashboard data:', err);
                setError('Unable to fetch data, please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, [selectedLocation, selectedDate]);

    return (
        <div className="dashboard-container">
            <h2 className="dashboard-heading">Hello Sir!</h2>
            
            <label htmlFor="location-select">Select Location:</label>
            <select 
                id="location-select" 
                className="location-dropdown" 
                value={selectedLocation} 
                onChange={handleLocationChange}
            >
                <option value="Dantewada">Dantewada</option>
                <option value="Geedam">Geedam</option>
                <option value="Barsur">Barsur</option>
            </select>

            <label htmlFor="date-picker">Select Date:</label>
            <DatePicker
                id="date-picker"
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd-MM-yyyy"
                className="date-picker"
            />

            {loading && <p className="loading-indicator">Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <table className="dashboard-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Accepted Bookings</th>
                        <th>Rooms Available</th>
                        <th>Maximum Rooms</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{selectedDate.toLocaleDateString()}</td>
                        <td>{dashboardData.acceptedBookings}</td>
                        <td>{dashboardData.roomsAvailable}</td>
                        <td>{MAX_ROOMS[selectedLocation]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
