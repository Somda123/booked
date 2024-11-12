
//...........this correct code 
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BookingForm.css';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const navigate = useNavigate();
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState('Dantewada');
  const [rooms, setRooms] = useState([]);
  const [availabilityChecked, setAvailabilityChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleBook() {
    navigate('/bookroom');
  }

  function handleStatus() {
    navigate('/status');
  }

  const checkAvailability = async () => {
    if (!checkInDate || !checkOutDate) {
      alert('Please select both check-in and check-out dates.');
      return;
    }
  
    setLoading(true);
    setAvailabilityChecked(false);
  
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwRWOxc83WAWuSJrxs-Hc7PV5OOTakx5i-72HMpnqPyWeGRZoWfKsZlHABaJAFAt3l_/exec"
      );
      const data = await response.json();
  
      const locationRoomCount = {
        Dantewada: 6,
        Geedam: 2,
        Barsur: 2,
      };
  
      const roomsAtLocation = locationRoomCount[selectedLocation];
      const bookings = data.rooms.filter(
        (room) => room.Location === selectedLocation && room.Status === "Accepted"
      );
      // console.log('bookings: ',bookings);
      
      // Initialize rooms
      const roomStatuses = Array.from({ length: roomsAtLocation }, (_, i) => ({
        roomNumber: i + 1,
        status: 'Available',
        available: true,
      }));
  // console.log('roomStatuses:',roomStatuses);
  
      bookings.forEach((booking) => {
        const bookingStart = new Date(booking["Check In Time"]);
        const bookingEnd = new Date(booking["Check Out Time"]);
        // const roomStatus = booking["Status"]
        const bookedRooms = parseInt(booking["No Off Room"], 10); // No. of rooms booked
  
        const isOverlapping =
          (checkInDate >= bookingStart && checkInDate <= bookingEnd) ||
          (checkOutDate >= bookingStart && checkOutDate <= bookingEnd) ||
          (checkInDate <= bookingStart && checkOutDate >= bookingEnd);
  
        if (isOverlapping  ) {
          let availableRooms = roomStatuses.filter((room) => room.available);
          // console.log(availableRooms);
          
          availableRooms.slice(0, bookedRooms).forEach((room) => {
            room.status = 'Booked';
            room.available = false;
          });
        }
      });
  
      setRooms(roomStatuses);
      setAvailabilityChecked(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  

  const closeAvailabilitySection = () => {
    setAvailabilityChecked(false);
    setRooms([]); // Clear room availability when closed
  };

  useEffect(() => {
    if (availabilityChecked) {
      const availabilitySection = document.getElementById('booking-availability-section');
      if (availabilitySection) {
        availabilitySection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [availabilityChecked]);

  return (
    <div className="booking-form-container">
      <div className="booking-form-group">
        <div className="booking-location-select-containr">
          <label className="elct">Select Location: </label>
          <select
            className="booking-location-select"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="Dantewada">Dantewada</option>
            <option value="Geedam">Geedam</option>
            <option value="Barsur">Barsur</option>
          </select>
        </div>

        <div className="booking-date-picker-group">
          <div className="booking-date-picker">
            <label>Check-in | चेक इन</label>
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              placeholderText="Select Check-in Date"
              dateFormat="dd/MM/yyyy" // Set date format to dd/MM/yyyy
            />
          </div>

          <div className="booking-date-picker">
            <label>Check-out | चेक आउट</label>
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              placeholderText="Select Check-out Date"
              dateFormat="dd/MM/yyyy" // Set date format to dd/MM/yyyy
            />
          </div>
        </div>
      </div>

      <div className="booking-form-group">
        <div className="check-now">
          <button onClick={checkAvailability} disabled={loading}>
            {loading ? 'Checking...' : 'Check Availability'}
          </button>
          <button onClick={handleBook} className="booking-book-now">Book Now</button>
          <button onClick={handleStatus} className="booking-book-now">Booking Status</button>
        </div>
      </div>

      {availabilityChecked && (
        <div className="booking-availability-section" id="booking-availability-section">
          <button className="booking-close-button" onClick={closeAvailabilitySection}>
            ×
          </button>
          <h3>Room Availability</h3>
          {rooms.length > 0 ? (
            rooms.map((room) => (
              <div className="booking-room-status" key={room.roomNumber}>
                <span>Room {room.roomNumber}</span>
                <span  style={{ color: room.available===true ? 'green' : 'red' }}>{room.status}</span>
                <span className={`booking-status-dot ${room.available ? 'green' : 'red'}`}></span>
              </div>
            ))
          ) : (
            <div>No rooms available for the selected dates.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default BookingForm;
