
//,,,,,,,,,,,best correct code
import React, { useEffect, useState } from 'react';
import './RoomAvailabilityCalendar.css';
import { eachDayOfInterval, isWithinInterval } from 'date-fns'; // Import date-fns functions for date range checks

const API_URL = 'https://script.google.com/macros/s/AKfycbwRWOxc83WAWuSJrxs-Hc7PV5OOTakx5i-72HMpnqPyWeGRZoWfKsZlHABaJAFAt3l_/exec';

const MAX_ROOMS = {
  Dantewada: 6,
  Geedam: 2,
  Barsur: 2,
};

const RoomAvailabilityCalendar = () => {
  const [locationRoomData, setLocationRoomData] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('Dantewada');
  const [weekData, setWeekData] = useState([]);

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        if (data && Array.isArray(data.rooms)) {
          setLocationRoomData(data.rooms);
        } else {
          console.error('Unexpected API data format:', data);
        }
      } catch (error) {
        console.error('Error fetching room data:', error);
      }
    };

    fetchRoomData();
  }, []);

  useEffect(() => {
    const nextWeekData = getLocationRoomData();
    setWeekData(nextWeekData);
  }, [locationRoomData, selectedLocation]);

  const getNextWeekDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(formatDate(date));
    }
    return dates;
  };

  const formatDate = (date) => {
    return `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;
  };

  const getLocationRoomData = () => {
    const nextWeekDates = getNextWeekDates();
    const bookingData = nextWeekDates.reduce((acc, date) => {
      acc[date] = { booked: 0, available: MAX_ROOMS[selectedLocation] };
      return acc;
    }, {});

    // Process each booking and check its availability for each day in the check-in/check-out interval
    const filteredData = locationRoomData.filter(room =>
      room.Location === selectedLocation
    );

    filteredData.forEach(booking => {
      const checkInDate = new Date(booking['Check In Time']);
      const checkOutDate = new Date(booking['Check Out Time']);
      
      // Check if the booking status is "Accepted"
      if (booking.Status && booking.Status.trim() === 'Accepted') {
        // Get all the days between check-in and check-out
        const daysToCheck = eachDayOfInterval({ start: checkInDate, end: checkOutDate });
        
        daysToCheck.forEach(day => {
          const formattedDate = formatDate(day); // Format each day to match the date in the calendar

          // Update booking data for the corresponding date
          if (bookingData[formattedDate]) {
            bookingData[formattedDate].booked += booking['No Off Room'];
          }
        });
      }
    });

    return nextWeekDates.map(date => ({
      date: date,
      booked: bookingData[date].booked,
      available: MAX_ROOMS[selectedLocation] - bookingData[date].booked,
      totalRooms: MAX_ROOMS[selectedLocation],
    }));
  };

  return (
    <div className="room-availability-calendar">
      <div className="location-selector">
        <label>Select Location: </label>
        <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
          <option value="Dantewada">Dantewada</option>
          <option value="Geedam">Geedam</option>
          <option value="Barsur">Barsur</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Available Rooms</th>
            <th>Booked Rooms</th>
            <th>Total Rooms</th>
          </tr>
        </thead>
        <tbody>
          {weekData.map((day, index) => (
            <tr key={index}>
              <td>{day.date}</td>
              <td>{day.available}</td>
              <td>{day.booked}</td>
              <td>{day.totalRooms}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomAvailabilityCalendar;
