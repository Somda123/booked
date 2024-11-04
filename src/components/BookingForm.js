
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BookingForm.css';
import { mockRoomData } from '../components/mockData.js';

import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const navigate = useNavigate();
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState('Dantewada');
  const [rooms, setRooms] = useState([]);
  const [availabilityChecked, setAvailabilityChecked] = useState(false);

  function handleBook() {
    navigate('/bookroom');
  }

  function handleStatus() {
    navigate('/status');
  }

  const checkAvailability = () => {
    if (!checkInDate || !checkOutDate) return;

    const availableRooms = mockRoomData[selectedLocation].rooms.map((room) => {
      const isAvailable = room.bookings.every((booking) => {
        const bookingStart = new Date(booking.start);
        const bookingEnd = new Date(booking.end);
        return checkOutDate <= bookingStart || checkInDate >= bookingEnd;
      });

      return {
        roomNumber: room.roomNumber,
        available: isAvailable,
      };
    });

    setRooms(availableRooms);
    setAvailabilityChecked(true);
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
            <option value="Barsoor">Barsoor</option>
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
          <button onClick={checkAvailability}>Check Availability</button>
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
                <span>{room.available ? 'Available' : 'Not Available'}</span>
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





// // // import React, { useState, useEffect } from 'react';
// // // import DatePicker from 'react-datepicker';
// // // import 'react-datepicker/dist/react-datepicker.css';
// // // import './BookingForm.css';
// // // import { mockRoomData } from '../components/mockData.js';

// // // import { useNavigate } from 'react-router-dom';

// // // const RoomAvailabilityCheck = () => {
// // //   const navigate = useNavigate();
// // //   const [checkInDate, setCheckInDate] = useState(null);
// // //   const [checkOutDate, setCheckOutDate] = useState(null);
// // //   const [selectedLocation, setSelectedLocation] = useState('Dantewada');
// // //   const [rooms, setRooms] = useState([]);
// // //   const [availabilityChecked, setAvailabilityChecked] = useState(false);

// // //   function handleBook() {
// // //     navigate('/bookroom');
// // //   }

// // //   function handleStatus() {
// // //     navigate('/status');
// // //   }

// // //   const checkAvailability = () => {
// // //     if (!checkInDate || !checkOutDate) return;

// // //     const availableRooms = mockRoomData[selectedLocation].rooms.map((room) => {
// // //       const isAvailable = room.bookings.every((booking) => {
// // //         const bookingStart = new Date(booking.start);
// // //         const bookingEnd = new Date(booking.end);
// // //         return checkOutDate <= bookingStart || checkInDate >= bookingEnd;
// // //       });

// // //       return {
// // //         roomNumber: room.roomNumber,
// // //         available: isAvailable,
// // //       };
// // //     });

// // //     setRooms(availableRooms);
// // //     setAvailabilityChecked(true);
// // //   };

// // //   const closeAvailabilitySection = () => {
// // //     setAvailabilityChecked(false);
// // //     setRooms([]); // Clear room availability when closed
// // //   };

// // //   useEffect(() => {
// // //     if (availabilityChecked) {
// // //       const availabilitySection = document.getElementById('booking-availability-section');
// // //       if (availabilitySection) {
// // //         availabilitySection.scrollIntoView({ behavior: 'smooth' });
// // //       }
// // //     }
// // //   }, [availabilityChecked]);

// // //   return (
// // //     <div className="booking-form-container">
// // //       <div className="booking-form-group">
// // //         <div className="booking-location-select-containr">
// // //           <label className="elct">Select Location: </label>
// // //           <select
// // //             className="booking-location-select"
// // //             value={selectedLocation}
// // //             onChange={(e) => setSelectedLocation(e.target.value)}
// // //           >
// // //             <option value="Dantewada">Dantewada</option>
// // //             <option value="Geedam">Geedam</option>
// // //             <option value="Barsoor">Barsoor</option>
// // //           </select>
// // //         </div>

// // //         <div className="booking-date-picker-group">
// // //           <div className="booking-date-picker">
// // //             <label>Check-in | चेक इन</label>
// // //             <DatePicker
// // //               selected={checkInDate}
// // //               onChange={(date) => setCheckInDate(date)}
// // //               placeholderText="Select Check-in Date"
// // //               dateFormat="dd/MM/yyyy" // Set date format to dd/MM/yyyy
// // //             />
// // //           </div>

// // //           <div className="booking-date-picker">
// // //             <label>Check-out | चेक आउट</label>
// // //             <DatePicker
// // //               selected={checkOutDate}
// // //               onChange={(date) => setCheckOutDate(date)}
// // //               placeholderText="Select Check-out Date"
// // //               dateFormat="dd/MM/yyyy" // Set date format to dd/MM/yyyy
// // //             />
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <div className="booking-form-group">
// // //         <div className="check-now">
// // //           <button onClick={checkAvailability}>Check Availability</button>
// // //           <button onClick={handleBook} className="booking-book-now">Book Now</button>
// // //           <button onClick={handleStatus} className="booking-book-now">Booking Status</button>
// // //         </div>
// // //       </div>

// // //       {availabilityChecked && (
// // //         <div className="booking-availability-section" id="booking-availability-section">
// // //           <button className="booking-close-button" onClick={closeAvailabilitySection}>
// // //             ×
// // //           </button>
// // //           <h3>Room Availability</h3>
// // //           {rooms.length > 0 ? (
// // //             rooms.map((room) => (
// // //               <div className="booking-room-status" key={room.roomNumber}>
// // //                 <span>Room {room.roomNumber}</span>
// // //                 <span>{room.available ? 'Available' : 'Not Available'}</span>
// // //                 <span className={`booking-status-dot ${room.available ? 'green' : 'red'}`}></span>
// // //               </div>
// // //             ))
// // //           ) : (
// // //             <div>No rooms available for the selected dates.</div>
// // //           )}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default RoomAvailabilityCheck;



// // import React, { useState, useEffect } from 'react';
// // import DatePicker from 'react-datepicker';
// // import 'react-datepicker/dist/react-datepicker.css';
// // import './BookingForm.css';
// // import { useNavigate } from 'react-router-dom';

// // const RoomAvailabilityCheck = () => {
// //   const navigate = useNavigate();
// //   const [checkInDate, setCheckInDate] = useState(null);
// //   const [checkOutDate, setCheckOutDate] = useState(null);
// //   const [selectedLocation, setSelectedLocation] = useState('Dantewada');
// //   const [rooms, setRooms] = useState([]);
// //   const [availabilityChecked, setAvailabilityChecked] = useState(false);

// //   // Fetch data from Google Sheets API on component mount
// //   useEffect(() => {
// //     fetch('https://script.google.com/macros/s/AKfycbwRWOxc83WAWuSJrxs-Hc7PV5OOTakx5i-72HMpnqPyWeGRZoWfKsZlHABaJAFAt3l_/exec')
// //       .then((response) => response.json())
// //       .then((data) => {
// //         // Assuming data is an array of room objects with "location", "roomNumber", and "status" fields
// //         setRooms(data.filter((room) => room.location === selectedLocation)); // Filter rooms by location
// //       })
// //       .catch((error) => {
// //         console.error('Error fetching data:', error);
// //       });
// //   }, [selectedLocation]);

// //   // Check room availability based on status
// //   const checkAvailability = () => {
// //     setAvailabilityChecked(true);
// //   };

// //   const closeAvailabilitySection = () => {
// //     setAvailabilityChecked(false);
// //   };

// //   return (
// //     <div className="booking-form-container">
// //       <div className="booking-form-group">
// //         <label>Select Location: </label>
// //         <select
// //           value={selectedLocation}
// //           onChange={(e) => setSelectedLocation(e.target.value)}
// //         >
// //           <option value="Dantewada">Dantewada</option>
// //           <option value="Geedam">Geedam</option>
// //           <option value="Barsoor">Barsoor</option>
// //         </select>

// //         <div className="booking-date-picker-group">
// //           <label>Check-in Date</label>
// //           <DatePicker
// //             selected={checkInDate}
// //             onChange={(date) => setCheckInDate(date)}
// //             placeholderText="Select Check-in Date"
// //             dateFormat="dd/MM/yyyy"
// //           />
// //           <label>Check-out Date</label>
// //           <DatePicker
// //             selected={checkOutDate}
// //             onChange={(date) => setCheckOutDate(date)}
// //             placeholderText="Select Check-out Date"
// //             dateFormat="dd/MM/yyyy"
// //           />
// //         </div>

// //         <button onClick={checkAvailability}>Check Availability</button>
// //       </div>

// //       {availabilityChecked && (
// //         <div className="booking-availability-section">
// //           <button className="close-button" onClick={closeAvailabilitySection}>×</button>
// //           <h3>Room Availability</h3>
// //           {rooms.length > 0 ? (
// //             rooms.map((room) => (
// //               <div key={room.roomNumber} className="room-status">
// //                 <span>Room {room.roomNumber}</span>
// //                 <span>{room.status === 'Accepted' ? 'Booked' : 'Available'}</span>
// //                 <span className={`status-dot ${room.status === 'Accepted' ? 'red' : 'green'}`}></span>
// //               </div>
// //             ))
// //           ) : (
// //             <div>No rooms available for the selected dates.</div>
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default RoomAvailabilityCheck;



// import React, { useState, useEffect } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import './BookingForm.css';
// import { useNavigate } from 'react-router-dom';

// // Initial room data structure with placeholders
// const RoomAvailabilityCheck = () => {
//   const navigate = useNavigate();
//   const [checkInDate, setCheckInDate] = useState(null);
//   const [checkOutDate, setCheckOutDate] = useState(null);
//   const [selectedLocation, setSelectedLocation] = useState('Dantewada');
//   const [rooms, setRooms] = useState([]);
//   const [availabilityChecked, setAvailabilityChecked] = useState(false);

//   const mockRoomData = {
//     Dantewada: {
//       rooms: Array.from({ length: 6 }, (_, i) => ({
//         roomNumber: i + 1,
//         bookings: [],
//         status: 'Available', // Default status for each room
//       })),
//     },
//     Geedam: {
//       rooms: Array.from({ length: 2 }, (_, i) => ({
//         roomNumber: i + 1,
//         bookings: [],
//         status: 'Available',
//       })),
//     },
//     Barsoor: {
//       rooms: Array.from({ length: 2 }, (_, i) => ({
//         roomNumber: i + 1,
//         bookings: [],
//         status: 'Available',
//       })),
//     },
//   };

//   // Fetch data from Google Sheets API
//   useEffect(() => {
//     fetch('https://script.google.com/macros/s/AKfycbwRWOxc83WAWuSJrxs-Hc7PV5OOTakx5i-72HMpnqPyWeGRZoWfKsZlHABaJAFAt3l_/exec')
//       .then((response) => response.json())
//       .then((data) => {
//         // Update mockRoomData with the status information from Google Sheets
//         data.forEach((entry) => {
//           const locationRooms = mockRoomData[entry.location];
//           if (locationRooms) {
//             const room = locationRooms.rooms.find((room) => room.roomNumber === parseInt(entry.roomNumber));
//             if (room) {
//               room.status = entry.status; // Update status based on API data
//             }
//           }
//         });
//       })
//       .catch((error) => console.error('Error fetching data:', error));
//   }, [selectedLocation]);

//   // Check availability based on selected dates
//   const checkAvailability = () => {
//     if (!checkInDate || !checkOutDate) return;

//     const availableRooms = mockRoomData[selectedLocation].rooms.map((room) => {
//       const isAvailable = room.bookings.every((booking) => {
//         const bookingStart = new Date(booking.start);
//         const bookingEnd = new Date(booking.end);
//         return checkOutDate <= bookingStart || checkInDate >= bookingEnd;
//       });

//       return {
//         roomNumber: room.roomNumber,
//         available: isAvailable && room.status !== 'Accepted', // Show "Booked" for rooms with "Accepted" status
//       };
//     });

//     setRooms(availableRooms);
//     setAvailabilityChecked(true);
//   };

//   const closeAvailabilitySection = () => {
//     setAvailabilityChecked(false);
//     setRooms([]);
//   };

//   useEffect(() => {
//     if (availabilityChecked) {
//       const availabilitySection = document.getElementById('booking-availability-section');
//       if (availabilitySection) {
//         availabilitySection.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   }, [availabilityChecked]);

//   return (
//     <div className="booking-form-container">
//       <div className="booking-form-group">
//         <label>Select Location: </label>
//         <select
//           value={selectedLocation}
//           onChange={(e) => setSelectedLocation(e.target.value)}
//         >
//           <option value="Dantewada">Dantewada</option>
//           <option value="Geedam">Geedam</option>
//           <option value="Barsoor">Barsoor</option>
//         </select>

//         <div className="booking-date-picker-group">
//           <label>Check-in Date</label>
//           <DatePicker
//             selected={checkInDate}
//             onChange={(date) => setCheckInDate(date)}
//             placeholderText="Select Check-in Date"
//             dateFormat="dd/MM/yyyy"
//           />
//           <label>Check-out Date</label>
//           <DatePicker
//             selected={checkOutDate}
//             onChange={(date) => setCheckOutDate(date)}
//             placeholderText="Select Check-out Date"
//             dateFormat="dd/MM/yyyy"
//           />
//         </div>

//         <button onClick={checkAvailability}>Check Availability</button>
//       </div>

//       {availabilityChecked && (
//         <div className="booking-availability-section" id="booking-availability-section">
//           <button className="close-button" onClick={closeAvailabilitySection}>×</button>
//           <h3>Room Availability</h3>
//           {rooms.length > 0 ? (
//             rooms.map((room) => (
//               <div key={room.roomNumber} className="room-status">
//                 <span>Room {room.roomNumber}</span>
//                 <span>{room.available ? 'Available' : 'Booked'}</span>
//                 <span className={`status-dot ${room.available ? 'green' : 'red'}`}></span>
//               </div>
//             ))
//           ) : (
//             <div>No rooms available for the selected dates.</div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default RoomAvailabilityCheck;
