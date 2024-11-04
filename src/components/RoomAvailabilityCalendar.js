



// // // // // // // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // // // // // // import './RoomAvailabilityCalendar.css';
// // // // // // // // // // // // // // // // const RoomAvailabilityCalendar = () => {
// // // // // // // // // // // // // // // //   const [roomData, setRoomData] = useState(null);
// // // // // // // // // // // // // // // //   const [selectedLocation, setSelectedLocation] = useState('Dantewada');
// // // // // // // // // // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // // //     // Fetch the room data from API
// // // // // // // // // // // // // // // //     const fetchRoomData = async () => {
// // // // // // // // // // // // // // // //       try {
// // // // // // // // // // // // // // // //         const response = await fetch(
// // // // // // // // // // // // // // // //           // 'https://script.google.com/macros/s/AKfycbzxw1FdbBucQKFaX4tagaiaXguCGhH_1XEymI7mWTicV9gGTqx2gcSf_C_47E3mehxE/exec'
// // // // // // // // // // // // // // // //           'https://script.google.com/macros/s/AKfycbymCVh2pLtwKTr-YM2tAlKMqnfn3TMzCbg_mOnG_uJGW4l4ee5kBOD_T3iJlDj5yac2/exec?location=Geedam'
          
// // // // // // // // // // // // // // // //         );
// // // // // // // // // // // // // // // //         if (!response.ok) {
// // // // // // // // // // // // // // // //           throw new Error('Failed to fetch data');
// // // // // // // // // // // // // // // //         }

// // // // // // // // // // // // // // // //         const data = await response.json();

// // // // // // // // // // // // // // // //         console.log(data)
// // // // // // // // // // // // // // // //         setRoomData(data);
// // // // // // // // // // // // // // // //         console.log(data)
// // // // // // // // // // // // // // // //       } catch (err) {
// // // // // // // // // // // // // // // //         setError(err.message);
// // // // // // // // // // // // // // // //       } finally {
// // // // // // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // // //     };
// // // // // // // // // // // // // // // //     fetchRoomData();
// // // // // // // // // // // // // // // //   }, []);
// // // // // // // // // // // // // // // //   // Filter room data based on selected location
// // // // // // // // // // // // // // // //   const getLocationRoomData = () => {
// // // // // // // // // // // // // // // //     if (!roomData || !roomData.data) return [];
// // // // // // // // // // // // // // // //     return roomData.data.map((day) => ({
// // // // // // // // // // // // // // // //       date: day.date,
// // // // // // // // // // // // // // // //       room_data: day.room_data.filter(
// // // // // // // // // // // // // // // //         (room) => room.location === selectedLocation
// // // // // // // // // // // // // // // //       ),
// // // // // // // // // // // // // // // //     }));
// // // // // // // // // // // // // // // //   };
// // // // // // // // // // // // // // // //   const locationRoomData = getLocationRoomData();
// // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // //     <div className="room-availability-calendar">
// // // // // // // // // // // // // // // //       <h2 className="calendar-title">Room Availability Calendar</h2>
// // // // // // // // // // // // // // // //       {/* Dropdown for selecting location */}
// // // // // // // // // // // // // // // //       <label htmlFor="location-select" className="loclab">
// // // // // // // // // // // // // // // //         Select Location:
// // // // // // // // // // // // // // // //       </label>
// // // // // // // // // // // // // // // //       <select
// // // // // // // // // // // // // // // //         id="location-select"
// // // // // // // // // // // // // // // //         value={selectedLocation}
// // // // // // // // // // // // // // // //         onChange={(e) => setSelectedLocation(e.target.value)}
// // // // // // // // // // // // // // // //       >
// // // // // // // // // // // // // // // //         <option value="Dantewada">Dantewada</option>
// // // // // // // // // // // // // // // //         <option value="Barsur">Barsur</option>
// // // // // // // // // // // // // // // //         <option value="Geedam">Geedam</option>
// // // // // // // // // // // // // // // //       </select>
// // // // // // // // // // // // // // // //       {/* Loading and error states */}
// // // // // // // // // // // // // // // //       {loading && <p>Loading room data...</p>}
// // // // // // // // // // // // // // // //       {error && <p>Error: {error}</p>}
// // // // // // // // // // // // // // // //       {/* Legend */}
// // // // // // // // // // // // // // // //       <div className="calendar-wrapper">
// // // // // // // // // // // // // // // //         <div className="calendar-table">
// // // // // // // // // // // // // // // //           <div className="room-header">Date</div>
// // // // // // // // // // // // // // // //           <div className="room-header">Available Rooms</div>
// // // // // // // // // // // // // // // //           <div className="room-header">Booked</div>
// // // // // // // // // // // // // // // //           <div className="room-header">Total Rooms</div>
// // // // // // // // // // // // // // // //           {locationRoomData.map((day, index) => (
// // // // // // // // // // // // // // // //             <React.Fragment key={index}>
// // // // // // // // // // // // // // // //               <div className="date-box">
// // // // // // // // // // // // // // // //               <div className="date-item">
// // // // // // // // // // // // // // // //                   {day.date}
// // // // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // // // //               {day.room_data.length > 0 ? (
// // // // // // // // // // // // // // // //                 day.room_data.map((room, i) => (
// // // // // // // // // // // // // // // //                   <React.Fragment key={i}>
// // // // // // // // // // // // // // // //                     <div className="room-item">
// // // // // // // // // // // // // // // //                       {room.available_room}
// // // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // // //                     <div className="room-item">
// // // // // // // // // // // // // // // //                       {room.unavailable_room}
// // // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // // //                     <div className="room-item">
// // // // // // // // // // // // // // // //                       {room.total_room}
// // // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // // //                   </React.Fragment>
// // // // // // // // // // // // // // // //                 ))
// // // // // // // // // // // // // // // //               ) : (
// // // // // // // // // // // // // // // //                 <div className="room-item">No data for this day</div>
// // // // // // // // // // // // // // // //               )}
// // // // // // // // // // // // // // // //             </React.Fragment>
// // // // // // // // // // // // // // // //           ))}
// // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // };
// // // // // // // // // // // // // // // // export default RoomAvailabilityCalendar;




// // // // // // // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // // // // // // import './RoomAvailabilityCalendar.css';

// // // // // // // // // // // // // // // // const RoomAvailabilityCalendar = () => {
// // // // // // // // // // // // // // // //   const [roomData, setRoomData] = useState([]);
// // // // // // // // // // // // // // // //   const [selectedLocation, setSelectedLocation] = useState('Dantewada');
// // // // // // // // // // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // // // // // // // // // //   const [error, setError] = useState(null);

// // // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // // //     // Fetch room data from API
// // // // // // // // // // // // // // // //     const fetchRoomData = async () => {
// // // // // // // // // // // // // // // //       try {
// // // // // // // // // // // // // // // //         const response = await fetch(
// // // // // // // // // // // // // // // //           'https://script.google.com/macros/s/AKfycbzxw1FdbBucQKFaX4tagaiaXguCGhH_1XEymI7mWTicV9gGTqx2gcSf_C_47E3mehxE/exec'
// // // // // // // // // // // // // // // //         );
// // // // // // // // // // // // // // // //         if (!response.ok) {
// // // // // // // // // // // // // // // //           throw new Error('Failed to fetch data');
// // // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // // //         const data = await response.json();
// // // // // // // // // // // // // // // //         console.log("Fetched Data:", data); // Log the fetched data to verify
// // // // // // // // // // // // // // // //         console.log(data.rooms);
// // // // // // // // // // // // // // // //         // setRoomData(data.data);  // Assuming data structure { data: [...] }
// // // // // // // // // // // // // // // //         setRoomData(data.rooms);  // Assuming data structure { data: [...] }
// // // // // // // // // // // // // // // //       } catch (err) {
// // // // // // // // // // // // // // // //         setError(err.message);
// // // // // // // // // // // // // // // //       } finally {
// // // // // // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // // //     };
// // // // // // // // // // // // // // // //     fetchRoomData();
// // // // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // // // //   // Filter data for the next 7 days based on location and status
// // // // // // // // // // // // // // // //   const getOneWeekData = () => {
// // // // // // // // // // // // // // // //     if (!roomData) return [];

// // // // // // // // // // // // // // // //     const today = new Date();
// // // // // // // // // // // // // // // //     const oneWeekLater = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

// // // // // // // // // // // // // // // //     // Filter and group data by date within the selected location
// // // // // // // // // // // // // // // //     const filteredData = roomData
// // // // // // // // // // // // // // // //       .filter((entry) => {
// // // // // // // // // // // // // // // //         const entryDate = new Date(entry['Check In Time']);
// // // // // // // // // // // // // // // //         return (
// // // // // // // // // // // // // // // //           entryDate >= today &&
// // // // // // // // // // // // // // // //           entryDate <= oneWeekLater &&
// // // // // // // // // // // // // // // //           entry.Location === selectedLocation
// // // // // // // // // // // // // // // //         );
// // // // // // // // // // // // // // // //       })
// // // // // // // // // // // // // // // //       .reduce((acc, entry) => {
// // // // // // // // // // // // // // // //         const dateStr = new Date(entry['Check In Time']).toLocaleDateString();
        
// // // // // // // // // // // // // // // //         if (!acc[dateStr]) {
// // // // // // // // // // // // // // // //           acc[dateStr] = { availableRooms: 0, bookedRooms: 0 };
// // // // // // // // // // // // // // // //         }

// // // // // // // // // // // // // // // //         if (entry.Status === 'Accepted') {
// // // // // // // // // // // // // // // //           acc[dateStr].bookedRooms += parseInt(entry['No Off Room'], 10) || 0;
// // // // // // // // // // // // // // // //         } else {
// // // // // // // // // // // // // // // //           acc[dateStr].availableRooms += parseInt(entry['No Off Room'], 10) || 0;
// // // // // // // // // // // // // // // //         }

// // // // // // // // // // // // // // // //         return acc;
// // // // // // // // // // // // // // // //       }, {});

// // // // // // // // // // // // // // // //     // Convert the grouped object to an array for display
// // // // // // // // // // // // // // // //     return Object.keys(filteredData).map((date) => ({
// // // // // // // // // // // // // // // //       date,
// // // // // // // // // // // // // // // //       availableRooms: filteredData[date].availableRooms,
// // // // // // // // // // // // // // // //       bookedRooms: filteredData[date].bookedRooms,
// // // // // // // // // // // // // // // //     }));
// // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // //   const oneWeekData = getOneWeekData();

// // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // //     <div className="room-availability-calendar">
// // // // // // // // // // // // // // // //       <h2 className="calendar-title">Room Availability Calendar</h2>

// // // // // // // // // // // // // // // //       <label htmlFor="location-select" className="loclab">Select Location:</label>
// // // // // // // // // // // // // // // //       <select
// // // // // // // // // // // // // // // //         id="location-select"
// // // // // // // // // // // // // // // //         value={selectedLocation}
// // // // // // // // // // // // // // // //         onChange={(e) => setSelectedLocation(e.target.value)}
// // // // // // // // // // // // // // // //       >
// // // // // // // // // // // // // // // //         <option value="Dantewada">Dantewada</option>
// // // // // // // // // // // // // // // //         <option value="Barsur">Barsur</option>
// // // // // // // // // // // // // // // //         <option value="Geedam">Geedam</option>
// // // // // // // // // // // // // // // //       </select>

// // // // // // // // // // // // // // // //       {loading && <p>Loading room data...</p>}
// // // // // // // // // // // // // // // //       {error && <p>Error: {error}</p>}

// // // // // // // // // // // // // // // //       <div className="calendar-wrapper">
// // // // // // // // // // // // // // // //         <div className="calendar-table">
// // // // // // // // // // // // // // // //           <div className="room-header">Date</div>
// // // // // // // // // // // // // // // //           <div className="room-header">Available Rooms</div>
// // // // // // // // // // // // // // // //           <div className="room-header">Booked Rooms</div>
          
// // // // // // // // // // // // // // // //           {oneWeekData.map((day, index) => (
// // // // // // // // // // // // // // // //             <React.Fragment key={index}>
// // // // // // // // // // // // // // // //               <div className="date-box">
// // // // // // // // // // // // // // // //                 <div className="date-item">{day.date}</div>
// // // // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // // // //               <div className="room-item">{day.availableRooms}</div>
// // // // // // // // // // // // // // // //               <div className="room-item">{day.bookedRooms}</div>
// // // // // // // // // // // // // // // //             </React.Fragment>
// // // // // // // // // // // // // // // //           ))}
// // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // export default RoomAvailabilityCalendar;




// // // // // // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // // // // // import './RoomAvailabilityCalendar.css';

// // // // // // // // // // // // // // // const RoomAvailabilityCalendar = () => {
// // // // // // // // // // // // // // //   const [roomData, setRoomData] = useState(null);
// // // // // // // // // // // // // // //   const [selectedLocation, setSelectedLocation] = useState('Dantewada');
// // // // // // // // // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // // // // // // // // //   const [error, setError] = useState(null);

// // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // //     // Fetch the room data from API
// // // // // // // // // // // // // // //     const fetchRoomData = async () => {
// // // // // // // // // // // // // // //       try {
// // // // // // // // // // // // // // //         const response = await fetch(
// // // // // // // // // // // // // // //           'https://script.google.com/macros/s/AKfycbzxw1FdbBucQKFaX4tagaiaXguCGhH_1XEymI7mWTicV9gGTqx2gcSf_C_47E3mehxE/exec'
// // // // // // // // // // // // // // //         );
// // // // // // // // // // // // // // //         if (!response.ok) {
// // // // // // // // // // // // // // //           throw new Error('Failed to fetch data');
// // // // // // // // // // // // // // //         }

// // // // // // // // // // // // // // //         const data = await response.json();
// // // // // // // // // // // // // // //         console.log(data);
// // // // // // // // // // // // // // //         setRoomData(data.rooms || []); // Ensure we set roomData to an empty array if no rooms are returned
// // // // // // // // // // // // // // //       } catch (err) {
// // // // // // // // // // // // // // //         setError(err.message);
// // // // // // // // // // // // // // //       } finally {
// // // // // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // //     };
// // // // // // // // // // // // // // //     fetchRoomData();
// // // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // // //   // Filter room data based on selected location
// // // // // // // // // // // // // // //   const getLocationRoomData = () => {
// // // // // // // // // // // // // // //     if (!roomData) return [];
// // // // // // // // // // // // // // //     return roomData.map(day => ({
// // // // // // // // // // // // // // //       date: day.date,
// // // // // // // // // // // // // // //       room_data: day.room_data.filter(room => room.Location === selectedLocation),
// // // // // // // // // // // // // // //     }));
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   const locationRoomData = getLocationRoomData();

// // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // //     <div className="room-availability-calendar">
// // // // // // // // // // // // // // //       <h2 className="calendar-title">Room Availability Calendar</h2>
// // // // // // // // // // // // // // //       {/* Dropdown for selecting location */}
// // // // // // // // // // // // // // //       <label htmlFor="location-select" className="loclab">
// // // // // // // // // // // // // // //         Select Location:
// // // // // // // // // // // // // // //       </label>
// // // // // // // // // // // // // // //       <select
// // // // // // // // // // // // // // //         id="location-select"
// // // // // // // // // // // // // // //         value={selectedLocation}
// // // // // // // // // // // // // // //         onChange={e => setSelectedLocation(e.target.value)}
// // // // // // // // // // // // // // //       >
// // // // // // // // // // // // // // //         <option value="Dantewada">Dantewada</option>
// // // // // // // // // // // // // // //         <option value="Barsur">Barsur</option>
// // // // // // // // // // // // // // //         <option value="Geedam">Geedam</option>
// // // // // // // // // // // // // // //       </select>

// // // // // // // // // // // // // // //       {/* Loading and error states */}
// // // // // // // // // // // // // // //       {loading && <p>Loading room data...</p>}
// // // // // // // // // // // // // // //       {error && <p>Error: {error}</p>}

// // // // // // // // // // // // // // //       {/* Room Availability Table */}
// // // // // // // // // // // // // // //       <div className="calendar-wrapper">
// // // // // // // // // // // // // // //         <div className="calendar-table">
// // // // // // // // // // // // // // //           <div className="room-header">Date</div>
// // // // // // // // // // // // // // //           <div className="room-header">Available Rooms</div>
// // // // // // // // // // // // // // //           <div className="room-header">Booked</div>
// // // // // // // // // // // // // // //           <div className="room-header">Total Rooms</div>
          
// // // // // // // // // // // // // // //           {locationRoomData.map((day, index) => (
// // // // // // // // // // // // // // //             <React.Fragment key={index}>
// // // // // // // // // // // // // // //               <div className="date-box">
// // // // // // // // // // // // // // //                 <div className="date-item">{day.date}</div>
// // // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // // //               {day.room_data.length > 0 ? (
// // // // // // // // // // // // // // //                 day.room_data.map((room, i) => (
// // // // // // // // // // // // // // //                   <React.Fragment key={i}>
// // // // // // // // // // // // // // //                     <div className="room-item">{room.available_room}</div>
// // // // // // // // // // // // // // //                     <div className="room-item">{room.unavailable_room}</div>
// // // // // // // // // // // // // // //                     <div className="room-item">{room.total_room}</div>
// // // // // // // // // // // // // // //                   </React.Fragment>
// // // // // // // // // // // // // // //                 ))
// // // // // // // // // // // // // // //               ) : (
// // // // // // // // // // // // // // //                 <div className="room-item">No data for this day</div>
// // // // // // // // // // // // // // //               )}
// // // // // // // // // // // // // // //             </React.Fragment>
// // // // // // // // // // // // // // //           ))}
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // export default RoomAvailabilityCalendar;





// // // // // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // // // // import './RoomAvailabilityCalendar.css';

// // // // // // // // // // // // // // const RoomAvailabilityCalendar = () => {
// // // // // // // // // // // // // //   const [roomData, setRoomData] = useState([]);
// // // // // // // // // // // // // //   const [selectedLocation, setSelectedLocation] = useState('Dantewada');
// // // // // // // // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // // // // // // // //   const [error, setError] = useState(null);

// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     // Fetch the room data from API
// // // // // // // // // // // // // //     const fetchRoomData = async () => {
// // // // // // // // // // // // // //       try {
// // // // // // // // // // // // // //         const response = await fetch(
// // // // // // // // // // // // // //           'https://script.google.com/macros/s/AKfycbzxw1FdbBucQKFaX4tagaiaXguCGhH_1XEymI7mWTicV9gGTqx2gcSf_C_47E3mehxE/exec'
// // // // // // // // // // // // // //         );
// // // // // // // // // // // // // //         if (!response.ok) {
// // // // // // // // // // // // // //           throw new Error('Failed to fetch data');
// // // // // // // // // // // // // //         }

// // // // // // // // // // // // // //         const data = await response.json();
// // // // // // // // // // // // // //         console.log(data);
// // // // // // // // // // // // // //         // Check if rooms exist in the data structure and set state
// // // // // // // // // // // // // //         setRoomData(data.rooms || []); // Use an empty array if no rooms
// // // // // // // // // // // // // //       } catch (err) {
// // // // // // // // // // // // // //         setError(err.message);
// // // // // // // // // // // // // //       } finally {
// // // // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //     };

// // // // // // // // // // // // // //     fetchRoomData();
// // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // //   // Filter room data based on selected location
// // // // // // // // // // // // // //   const getLocationRoomData = () => {
// // // // // // // // // // // // // //     if (!roomData.length) return []; // If roomData is empty, return an empty array

// // // // // // // // // // // // // //     return roomData.map(day => {
// // // // // // // // // // // // // //       // Check if day.room_data exists and is an array
// // // // // // // // // // // // // //       const roomDataForDay = day.room_data || [];
// // // // // // // // // // // // // //       return {
// // // // // // // // // // // // // //         date: day.date,
// // // // // // // // // // // // // //         room_data: roomDataForDay.filter(room => room.Location === selectedLocation),
// // // // // // // // // // // // // //       };
// // // // // // // // // // // // // //     });
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const locationRoomData = getLocationRoomData();

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <div className="room-availability-calendar">
// // // // // // // // // // // // // //       <h2 className="calendar-title">Room Availability Calendar</h2>
// // // // // // // // // // // // // //       {/* Dropdown for selecting location */}
// // // // // // // // // // // // // //       <label htmlFor="location-select" className="loclab">
// // // // // // // // // // // // // //         Select Location:
// // // // // // // // // // // // // //       </label>
// // // // // // // // // // // // // //       <select
// // // // // // // // // // // // // //         id="location-select"
// // // // // // // // // // // // // //         value={selectedLocation}
// // // // // // // // // // // // // //         onChange={e => setSelectedLocation(e.target.value)}
// // // // // // // // // // // // // //       >
// // // // // // // // // // // // // //         <option value="Dantewada">Dantewada</option>
// // // // // // // // // // // // // //         <option value="Barsur">Barsur</option>
// // // // // // // // // // // // // //         <option value="Geedam">Geedam</option>
// // // // // // // // // // // // // //       </select>

// // // // // // // // // // // // // //       {/* Loading and error states */}
// // // // // // // // // // // // // //       {loading && <p>Loading room data...</p>}
// // // // // // // // // // // // // //       {error && <p>Error: {error}</p>}

// // // // // // // // // // // // // //       {/* Room Availability Table */}
// // // // // // // // // // // // // //       <div className="calendar-wrapper">
// // // // // // // // // // // // // //         <div className="calendar-table">
// // // // // // // // // // // // // //           <div className="room-header">Date</div>
// // // // // // // // // // // // // //           <div className="room-header">Available Rooms</div>
// // // // // // // // // // // // // //           <div className="room-header">Booked</div>
// // // // // // // // // // // // // //           <div className="room-header">Total Rooms</div>

// // // // // // // // // // // // // //           {locationRoomData.map((day, index) => (
// // // // // // // // // // // // // //             <React.Fragment key={index}>
// // // // // // // // // // // // // //               <div className="date-box">
// // // // // // // // // // // // // //                 <div className="date-item">{day.date}</div>
// // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // //               {day.room_data.length > 0 ? (
// // // // // // // // // // // // // //                 day.room_data.map((room, i) => (
// // // // // // // // // // // // // //                   <React.Fragment key={i}>
// // // // // // // // // // // // // //                     <div className="room-item">{room.available_room}</div>
// // // // // // // // // // // // // //                     <div className="room-item">{room.unavailable_room}</div>
// // // // // // // // // // // // // //                     <div className="room-item">{room.total_room}</div>
// // // // // // // // // // // // // //                   </React.Fragment>
// // // // // // // // // // // // // //                 ))
// // // // // // // // // // // // // //               ) : (
// // // // // // // // // // // // // //                 <div className="room-item">No data for this day</div>
// // // // // // // // // // // // // //               )}
// // // // // // // // // // // // // //             </React.Fragment>
// // // // // // // // // // // // // //           ))}
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // export default RoomAvailabilityCalendar;


// // // // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // // // import './RoomAvailabilityCalendar.css';

// // // // // // // // // // // // // const RoomAvailabilityCalendar = () => {
// // // // // // // // // // // // //   const [roomData, setRoomData] = useState([]);
// // // // // // // // // // // // //   const [selectedLocation, setSelectedLocation] = useState('Dantewada');
// // // // // // // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // // // // // // //   const [error, setError] = useState(null);

// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     // Fetch the room data from API
// // // // // // // // // // // // //     const fetchRoomData = async () => {
// // // // // // // // // // // // //       try {
// // // // // // // // // // // // //         const response = await fetch(
// // // // // // // // // // // // //           'https://script.google.com/macros/s/AKfycbzxw1FdbBucQKFaX4tagaiaXguCGhH_1XEymI7mWTicV9gGTqx2gcSf_C_47E3mehxE/exec'
// // // // // // // // // // // // //         );
// // // // // // // // // // // // //         if (!response.ok) {
// // // // // // // // // // // // //           throw new Error('Failed to fetch data');
// // // // // // // // // // // // //         }

// // // // // // // // // // // // //         const data = await response.json();
// // // // // // // // // // // // //         console.log(data);
// // // // // // // // // // // // //         setRoomData(data.rooms || []); // Use an empty array if no rooms
// // // // // // // // // // // // //       } catch (err) {
// // // // // // // // // // // // //         setError(err.message);
// // // // // // // // // // // // //       } finally {
// // // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     };

// // // // // // // // // // // // //     fetchRoomData();
// // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // //   // Filter room data based on selected location
// // // // // // // // // // // // //   const getLocationRoomData = () => {
// // // // // // // // // // // // //     if (!roomData.length) return []; // If roomData is empty, return an empty array

// // // // // // // // // // // // //     return roomData.map(day => {
// // // // // // // // // // // // //       // Check if day.room_data exists and is an array
// // // // // // // // // // // // //       const roomDataForDay = day.room_data || [];
// // // // // // // // // // // // //       let bookedCount = 0; // Counter for booked rooms
// // // // // // // // // // // // //       let availableCount = 0; // Counter for available rooms

// // // // // // // // // // // // //       roomDataForDay.forEach(room => {
// // // // // // // // // // // // //         if (room.Status === "Accepted") {
// // // // // // // // // // // // //           bookedCount++; // Increment if status is "Accepted"
// // // // // // // // // // // // //         } else if (room.Status === "" || room.Status === "Rejected") {
// // // // // // // // // // // // //           availableCount++; // Increment if status is empty or "Rejected"
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //       });

// // // // // // // // // // // // //       return {
// // // // // // // // // // // // //         date: day.date,
// // // // // // // // // // // // //         bookedCount,
// // // // // // // // // // // // //         availableCount,
// // // // // // // // // // // // //       };
// // // // // // // // // // // // //     });
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const locationRoomData = getLocationRoomData();

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div className="room-availability-calendar">
// // // // // // // // // // // // //       <h2 className="calendar-title">Room Availability Calendar</h2>
// // // // // // // // // // // // //       {/* Dropdown for selecting location */}
// // // // // // // // // // // // //       <label htmlFor="location-select" className="loclab">
// // // // // // // // // // // // //         Select Location:
// // // // // // // // // // // // //       </label>
// // // // // // // // // // // // //       <select
// // // // // // // // // // // // //         id="location-select"
// // // // // // // // // // // // //         value={selectedLocation}
// // // // // // // // // // // // //         onChange={e => setSelectedLocation(e.target.value)}
// // // // // // // // // // // // //       >
// // // // // // // // // // // // //         <option value="Dantewada">Dantewada</option>
// // // // // // // // // // // // //         <option value="Barsur">Barsur</option>
// // // // // // // // // // // // //         <option value="Geedam">Geedam</option>
// // // // // // // // // // // // //       </select>

// // // // // // // // // // // // //       {/* Loading and error states */}
// // // // // // // // // // // // //       {loading && <p>Loading room data...</p>}
// // // // // // // // // // // // //       {error && <p>Error: {error}</p>}

// // // // // // // // // // // // //       {/* Room Availability Table */}
// // // // // // // // // // // // //       <div className="calendar-wrapper">
// // // // // // // // // // // // //         <div className="calendar-table">
// // // // // // // // // // // // //           <div className="room-header">Date</div>
// // // // // // // // // // // // //           <div className="room-header">Booked Rooms</div>
// // // // // // // // // // // // //           <div className="room-header">Available Rooms</div>

// // // // // // // // // // // // //           {locationRoomData.map((day, index) => (
// // // // // // // // // // // // //             <React.Fragment key={index}>
// // // // // // // // // // // // //               <div className="date-box">
// // // // // // // // // // // // //                 <div className="date-item">{day.date}</div>
// // // // // // // // // // // // //               </div>
// // // // // // // // // // // // //               <div className="room-item">{day.bookedCount}</div>
// // // // // // // // // // // // //               <div className="room-item">{day.availableCount}</div>
// // // // // // // // // // // // //             </React.Fragment>
// // // // // // // // // // // // //           ))}
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default RoomAvailabilityCalendar;




// // // // // // // // // // // // import React, { useEffect, useState } from 'react';

// // // // // // // // // // // // // Sample room data
// // // // // // // // // // // // const roomData = [
// // // // // // // // // // // //   {
// // // // // // // // // // // //     "Check In Time": "2024-10-23T18:30:00.000Z",
// // // // // // // // // // // //     "Check Out Time": "2024-10-20T04:30:00.000Z",
// // // // // // // // // // // //     "Customer Type": "Non-Government",
// // // // // // // // // // // //     "Full Name": "Bhupend Deshmukh",
// // // // // // // // // // // //     "ID": 1,
// // // // // // // // // // // //     "Location": "Dantewada",
// // // // // // // // // // // //     "Mo No": 1234567890,
// // // // // // // // // // // //     "No Off Room": 2,
// // // // // // // // // // // //     "QRCodeImage": "",
// // // // // // // // // // // //     "Status": "Accepted",
// // // // // // // // // // // //     "Total Days": 2,
// // // // // // // // // // // //     "Total Guest": 1
// // // // // // // // // // // //   },
// // // // // // // // // // // //   {
// // // // // // // // // // // //     "Check In Time": "2024-10-24T18:30:00.000Z",
// // // // // // // // // // // //     "Check Out Time": "2024-10-20T04:30:00.000Z",
// // // // // // // // // // // //     "Customer Type": "Non-Government",
// // // // // // // // // // // //     "Full Name": "Ankit Verma",
// // // // // // // // // // // //     "ID": 2,
// // // // // // // // // // // //     "Location": "Dantewada",
// // // // // // // // // // // //     "Mo No": 9876543210,
// // // // // // // // // // // //     "No Off Room": 1,
// // // // // // // // // // // //     "QRCodeImage": "",
// // // // // // // // // // // //     "Status": "Rejected",
// // // // // // // // // // // //     "Total Days": 1,
// // // // // // // // // // // //     "Total Guest": 2
// // // // // // // // // // // //   },
// // // // // // // // // // // //   // Add more entries as needed
// // // // // // // // // // // // ];

// // // // // // // // // // // // const RoomAvailabilityCalendar = () => {
// // // // // // // // // // // //   const [locationRoomData, setLocationRoomData] = useState([]);

// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     const data = getLocationRoomData();
// // // // // // // // // // // //     setLocationRoomData(data);
// // // // // // // // // // // //   }, []);

// // // // // // // // // // // //   const getLocationRoomData = () => {
// // // // // // // // // // // //     if (!roomData || roomData.length === 0) return [];

// // // // // // // // // // // //     // Group bookings by date
// // // // // // // // // // // //     const groupedBookings = {};

// // // // // // // // // // // //     roomData.forEach((booking) => {
// // // // // // // // // // // //       const date = new Date(booking['Check In Time']).toISOString().split('T')[0]; // Extract date from Check In Time
// // // // // // // // // // // //       if (!groupedBookings[date]) {
// // // // // // // // // // // //         groupedBookings[date] = {
// // // // // // // // // // // //           booked: 0,
// // // // // // // // // // // //           available: 0,
// // // // // // // // // // // //           totalRooms: 0, // This will count total rooms if needed
// // // // // // // // // // // //         };
// // // // // // // // // // // //       }

// // // // // // // // // // // //       // Update counts based on Status
// // // // // // // // // // // //       if (booking.Status === "Accepted") {
// // // // // // // // // // // //         groupedBookings[date].booked += booking['No Off Room']; // Increment booked rooms
// // // // // // // // // // // //       } else if (booking.Status === "" || booking.Status === "Rejected") {
// // // // // // // // // // // //         groupedBookings[date].available += booking['No Off Room']; // Increment available rooms
// // // // // // // // // // // //       }
// // // // // // // // // // // //       groupedBookings[date].totalRooms += booking['No Off Room']; // Count total rooms booked
// // // // // // // // // // // //     });

// // // // // // // // // // // //     // Transform grouped data into array format
// // // // // // // // // // // //     return Object.keys(groupedBookings).map((date) => ({
// // // // // // // // // // // //       date: date,
// // // // // // // // // // // //       booked: groupedBookings[date].booked,
// // // // // // // // // // // //       available: groupedBookings[date].available,
// // // // // // // // // // // //       totalRooms: groupedBookings[date].totalRooms,
// // // // // // // // // // // //     }));
// // // // // // // // // // // //   };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div className="room-availability-calendar">
// // // // // // // // // // // //       <div className="header">
// // // // // // // // // // // //         <div className="date-box">Date</div>
// // // // // // // // // // // //         <div className="room-item">Available Rooms</div>
// // // // // // // // // // // //         <div className="room-item">Booked Rooms</div>
// // // // // // // // // // // //         <div className="room-item">Total Rooms</div>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //       {locationRoomData.map((day, index) => (
// // // // // // // // // // // //         <React.Fragment key={index}>
// // // // // // // // // // // //           <div className="date-box">
// // // // // // // // // // // //             <div className="date-item">{day.date}</div>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //           <div className="room-item">{day.available}</div>
// // // // // // // // // // // //           <div className="room-item">{day.booked}</div>
// // // // // // // // // // // //           <div className="room-item">{day.totalRooms}</div>
// // // // // // // // // // // //         </React.Fragment>
// // // // // // // // // // // //       ))}
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default RoomAvailabilityCalendar;




// // // // // // // // // // // import React, { useEffect, useState } from 'react';

// // // // // // // // // // // const API_URL = 'https://script.google.com/macros/s/AKfycbwRWOxc83WAWuSJrxs-Hc7PV5OOTakx5i-72HMpnqPyWeGRZoWfKsZlHABaJAFAt3l_/exec'; // Replace with your API endpoint

// // // // // // // // // // // const RoomAvailabilityCalendar = () => {
// // // // // // // // // // //   const [locationRoomData, setLocationRoomData] = useState([]);

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     // Fetch data from API
// // // // // // // // // // //     const fetchRoomData = async () => {
// // // // // // // // // // //       try {
// // // // // // // // // // //         const response = await fetch(API_URL);
// // // // // // // // // // //         const data = await response.json();
// // // // // // // // // // //         console.log("API Response Data:", data); 
// // // // // // // // // // //         if (data && Array.isArray(data.rooms)) {
// // // // // // // // // // //           const processedData = getLocationRoomData(data.rooms);
// // // // // // // // // // //           setLocationRoomData(processedData);
// // // // // // // // // // //         } else {
// // // // // // // // // // //           console.error('API returned data in an unexpected format:', data);
// // // // // // // // // // //         }
// // // // // // // // // // //       } catch (error) {
// // // // // // // // // // //         console.error('Error fetching room data:', error);
// // // // // // // // // // //       }
// // // // // // // // // // //     };

// // // // // // // // // // //     fetchRoomData();
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   // Function to process data based on Status and Check In Time
// // // // // // // // // // //   const getLocationRoomData = (roomData) => {
// // // // // // // // // // //     if (!roomData || roomData.length === 0) return [];

// // // // // // // // // // //     // Group bookings by date
// // // // // // // // // // //     const groupedBookings = {};

// // // // // // // // // // //     roomData.forEach((booking) => {
// // // // // // // // // // //       const date = new Date(booking['Check In Time']).toISOString().split('T')[0]; // Extract date from Check In Time
// // // // // // // // // // //       if (!groupedBookings[date]) {
// // // // // // // // // // //         groupedBookings[date] = {
// // // // // // // // // // //           booked: 0,
// // // // // // // // // // //           available: 0,
// // // // // // // // // // //           totalRooms: 0, // This will count total rooms if needed
// // // // // // // // // // //         };
// // // // // // // // // // //       }

// // // // // // // // // // //       // Update counts based on Status
// // // // // // // // // // //       if (booking.Status === "Accepted") {
// // // // // // // // // // //         groupedBookings[date].booked += booking['No Off Room']; // Increment booked rooms
// // // // // // // // // // //       } else if (booking.Status === "" || booking.Status === "Rejected") {
// // // // // // // // // // //         groupedBookings[date].available += booking['No Off Room']; // Increment available rooms
// // // // // // // // // // //       }
// // // // // // // // // // //       groupedBookings[date].totalRooms += booking['No Off Room']; // Count total rooms booked
// // // // // // // // // // //     });

// // // // // // // // // // //     // Transform grouped data into array format
// // // // // // // // // // //     return Object.keys(groupedBookings).map((date) => ({
// // // // // // // // // // //       date: date,
// // // // // // // // // // //       booked: groupedBookings[date].booked,
// // // // // // // // // // //       available: groupedBookings[date].available,
// // // // // // // // // // //       totalRooms: groupedBookings[date].totalRooms,
// // // // // // // // // // //     }));
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="room-availability-calendar">
// // // // // // // // // // //       <div className="header">
// // // // // // // // // // //         <div className="date-box">Date</div>
// // // // // // // // // // //         <div className="room-item">Available Rooms</div>
// // // // // // // // // // //         <div className="room-item">Booked Rooms</div>
// // // // // // // // // // //         <div className="room-item">Total Rooms</div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //       {locationRoomData.map((day, index) => (
// // // // // // // // // // //         <React.Fragment key={index}>
// // // // // // // // // // //           <div className="date-box">
// // // // // // // // // // //             <div className="date-item">{day.date}</div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <div className="room-item">{day.available}</div>
// // // // // // // // // // //           <div className="room-item">{day.booked}</div>
// // // // // // // // // // //           <div className="room-item">{day.totalRooms}</div>
// // // // // // // // // // //         </React.Fragment>
// // // // // // // // // // //       ))}
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default RoomAvailabilityCalendar;




// // // // // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // // // // import './RoomAvailabilityCalendar.css'
// // // // // // // // // // // const API_URL = 'https://script.google.com/macros/s/AKfycbwRWOxc83WAWuSJrxs-Hc7PV5OOTakx5i-72HMpnqPyWeGRZoWfKsZlHABaJAFAt3l_/exec';

// // // // // // // // // // // const RoomAvailabilityCalendar = () => {
// // // // // // // // // // //   const [locationRoomData, setLocationRoomData] = useState([]);

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const fetchRoomData = async () => {
// // // // // // // // // // //       try {
// // // // // // // // // // //         const response = await fetch(API_URL);
// // // // // // // // // // //         const data = await response.json();
// // // // // // // // // // //         console.log("API Response Data:", data); 
// // // // // // // // // // //         if (data && Array.isArray(data.rooms)) {
// // // // // // // // // // //           const processedData = getLocationRoomData(data.rooms);
// // // // // // // // // // //           setLocationRoomData(processedData);
// // // // // // // // // // //         } else {
// // // // // // // // // // //           console.error('API returned data in an unexpected format:', data);
// // // // // // // // // // //         }
// // // // // // // // // // //       } catch (error) {
// // // // // // // // // // //         console.error('Error fetching room data:', error);
// // // // // // // // // // //       }
// // // // // // // // // // //     };

// // // // // // // // // // //     fetchRoomData();
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   const getLocationRoomData = (roomData) => {
// // // // // // // // // // //     if (!roomData || roomData.length === 0) return [];

// // // // // // // // // // //     const groupedBookings = {};

// // // // // // // // // // //     roomData.forEach((booking) => {
// // // // // // // // // // //       const date = new Date(booking['Check In Time']).toISOString().split('T')[0];
// // // // // // // // // // //       if (!groupedBookings[date]) {
// // // // // // // // // // //         groupedBookings[date] = {
// // // // // // // // // // //           booked: 0,
// // // // // // // // // // //           available: 0,
// // // // // // // // // // //           totalRooms: 0,
// // // // // // // // // // //         };
// // // // // // // // // // //       }

// // // // // // // // // // //       if (booking.Status === "Accepted") {
// // // // // // // // // // //         groupedBookings[date].booked += booking['No Off Room'];
// // // // // // // // // // //       } else if (booking.Status === "" || booking.Status === "Rejected") {
// // // // // // // // // // //         groupedBookings[date].available += booking['No Off Room'];
// // // // // // // // // // //       }
// // // // // // // // // // //       groupedBookings[date].totalRooms += booking['No Off Room'];
// // // // // // // // // // //     });

// // // // // // // // // // //     return Object.keys(groupedBookings).map((date) => ({
// // // // // // // // // // //       date: date,
// // // // // // // // // // //       booked: groupedBookings[date].booked,
// // // // // // // // // // //       available: groupedBookings[date].available,
// // // // // // // // // // //       totalRooms: groupedBookings[date].totalRooms,
// // // // // // // // // // //     }));
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="room-availability-calendar">
// // // // // // // // // // //       <table>
// // // // // // // // // // //         <thead>
// // // // // // // // // // //           <tr>
// // // // // // // // // // //             <th>Date</th>
// // // // // // // // // // //             <th>Available Rooms</th>
// // // // // // // // // // //             <th>Booked Rooms</th>
// // // // // // // // // // //             <th>Total Rooms</th>
// // // // // // // // // // //           </tr>
// // // // // // // // // // //         </thead>
// // // // // // // // // // //         <tbody>
// // // // // // // // // // //           {locationRoomData.map((day, index) => (
// // // // // // // // // // //             <tr key={index}>
// // // // // // // // // // //               <td>{day.date}</td>
// // // // // // // // // // //               <td>{day.available}</td>
// // // // // // // // // // //               <td>{day.booked}</td>
// // // // // // // // // // //               <td>{day.totalRooms}</td>
// // // // // // // // // // //             </tr>
// // // // // // // // // // //           ))}
// // // // // // // // // // //         </tbody>
// // // // // // // // // // //       </table>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default RoomAvailabilityCalendar;



// // // // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // // // import './RoomAvailabilityCalendar.css';

// // // // // // // // // // const API_URL = 'https://script.google.com/macros/s/AKfycbwRWOxc83WAWuSJrxs-Hc7PV5OOTakx5i-72HMpnqPyWeGRZoWfKsZlHABaJAFAt3l_/exec';

// // // // // // // // // // const RoomAvailabilityCalendar = () => {
// // // // // // // // // //   const [locationRoomData, setLocationRoomData] = useState([]);
// // // // // // // // // //   const [selectedLocation, setSelectedLocation] = useState('Dantewada'); // Default location

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const fetchRoomData = async () => {
// // // // // // // // // //       try {
// // // // // // // // // //         const response = await fetch(API_URL);
// // // // // // // // // //         const data = await response.json();
// // // // // // // // // //         console.log("API Response Data:", data);
// // // // // // // // // //         if (data && Array.isArray(data.rooms)) {
// // // // // // // // // //           setLocationRoomData(data.rooms);
// // // // // // // // // //         } else {
// // // // // // // // // //           console.error('API returned data in an unexpected format:', data);
// // // // // // // // // //         }
// // // // // // // // // //       } catch (error) {
// // // // // // // // // //         console.error('Error fetching room data:', error);
// // // // // // // // // //       }
// // // // // // // // // //     };

// // // // // // // // // //     fetchRoomData();
// // // // // // // // // //   }, []);

// // // // // // // // // //   // Function to filter data based on selected location and process it
// // // // // // // // // //   const getLocationRoomData = () => {
// // // // // // // // // //     const filteredData = locationRoomData.filter((room) => room.Location === selectedLocation);

// // // // // // // // // //     const groupedBookings = {};

// // // // // // // // // //     filteredData.forEach((booking) => {
// // // // // // // // // //       const date = new Date(booking['Check In Time']).toISOString().split('T')[0];
// // // // // // // // // //       if (!groupedBookings[date]) {
// // // // // // // // // //         groupedBookings[date] = {
// // // // // // // // // //           booked: 0,
// // // // // // // // // //           available: 0,
// // // // // // // // // //           totalRooms: 0,
// // // // // // // // // //         };
// // // // // // // // // //       }

// // // // // // // // // //       if (booking.Status === "Accepted") {
// // // // // // // // // //         groupedBookings[date].booked += booking['No Off Room'];
// // // // // // // // // //       } else if (booking.Status === "" || booking.Status === "Rejected") {
// // // // // // // // // //         groupedBookings[date].available += booking['No Off Room'];
// // // // // // // // // //       }
// // // // // // // // // //       groupedBookings[date].totalRooms += booking['No Off Room'];
// // // // // // // // // //     });

// // // // // // // // // //     return Object.keys(groupedBookings).map((date) => ({
// // // // // // // // // //       date: date,
// // // // // // // // // //       booked: groupedBookings[date].booked,
// // // // // // // // // //       available: groupedBookings[date].available,
// // // // // // // // // //       totalRooms: groupedBookings[date].totalRooms,
// // // // // // // // // //     }));
// // // // // // // // // //   };

// // // // // // // // // //   const processedData = getLocationRoomData();

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="room-availability-calendar">
// // // // // // // // // //       <h2>Room Availability Calendar</h2>

// // // // // // // // // //       {/* Location Dropdown */}
// // // // // // // // // //       <div className="location-selector">
// // // // // // // // // //         <label htmlFor="location">Select Location:</label>
// // // // // // // // // //         <select
// // // // // // // // // //           id="location"
// // // // // // // // // //           value={selectedLocation}
// // // // // // // // // //           onChange={(e) => setSelectedLocation(e.target.value)}
// // // // // // // // // //         >
// // // // // // // // // //           <option value="Dantewada">Dantewada</option>
// // // // // // // // // //           <option value="Geedam">Geedam</option>
// // // // // // // // // //           <option value="Barsur">Barsur</option>
// // // // // // // // // //         </select>
// // // // // // // // // //       </div>

// // // // // // // // // //       <table>
// // // // // // // // // //         <thead>
// // // // // // // // // //           <tr>
// // // // // // // // // //             <th>Date</th>
// // // // // // // // // //             <th>Available Rooms</th>
// // // // // // // // // //             <th>Booked Rooms</th>
// // // // // // // // // //             <th>Total Rooms</th>
// // // // // // // // // //           </tr>
// // // // // // // // // //         </thead>
// // // // // // // // // //         <tbody>
// // // // // // // // // //           {processedData.map((day, index) => (
// // // // // // // // // //             <tr key={index}>
// // // // // // // // // //               <td>{day.date}</td>
// // // // // // // // // //               <td>{day.available}</td>
// // // // // // // // // //               <td>{day.booked}</td>
// // // // // // // // // //               <td>{day.totalRooms}</td>
// // // // // // // // // //             </tr>
// // // // // // // // // //           ))}
// // // // // // // // // //         </tbody>
// // // // // // // // // //       </table>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default RoomAvailabilityCalendar;




// // // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // // import './RoomAvailabilityCalendar.css';

// // // // // // // // // const API_URL = 'https://script.google.com/macros/s/AKfycbwRWOxc83WAWuSJrxs-Hc7PV5OOTakx5i-72HMpnqPyWeGRZoWfKsZlHABaJAFAt3l_/exec';

// // // // // // // // // const RoomAvailabilityCalendar = () => {
// // // // // // // // //   const [locationRoomData, setLocationRoomData] = useState([]);
// // // // // // // // //   const [selectedLocation, setSelectedLocation] = useState('Dantewada'); // Default location

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const fetchRoomData = async () => {
// // // // // // // // //       try {
// // // // // // // // //         const response = await fetch(API_URL);
// // // // // // // // //         const data = await response.json();
// // // // // // // // //         console.log("API Response Data:", data);
// // // // // // // // //         if (data && Array.isArray(data.rooms)) {
// // // // // // // // //           setLocationRoomData(data.rooms);
// // // // // // // // //         } else {
// // // // // // // // //           console.error('API returned data in an unexpected format:', data);
// // // // // // // // //         }
// // // // // // // // //       } catch (error) {
// // // // // // // // //         console.error('Error fetching room data:', error);
// // // // // // // // //       }
// // // // // // // // //     };

// // // // // // // // //     fetchRoomData();
// // // // // // // // //   }, []);

// // // // // // // // //   // Function to filter and process data for the selected location within the next 7 days
// // // // // // // // //   const getLocationRoomData = () => {
// // // // // // // // //     const today = new Date();
// // // // // // // // //     const oneWeekFromToday = new Date(today);
// // // // // // // // //     oneWeekFromToday.setDate(today.getDate() + 7);

// // // // // // // // //     // Filter by location and date within the next 7 days
// // // // // // // // //     const filteredData = locationRoomData.filter((room) => {
// // // // // // // // //       const checkInDate = new Date(room['Check In Time']);
// // // // // // // // //       return (
// // // // // // // // //         room.Location === selectedLocation &&
// // // // // // // // //         checkInDate >= today &&
// // // // // // // // //         checkInDate <= oneWeekFromToday
// // // // // // // // //       );
// // // // // // // // //     });

// // // // // // // // //     const groupedBookings = {};

// // // // // // // // //     filteredData.forEach((booking) => {
// // // // // // // // //       const date = new Date(booking['Check In Time']).toISOString().split('T')[0];
// // // // // // // // //       if (!groupedBookings[date]) {
// // // // // // // // //         groupedBookings[date] = {
// // // // // // // // //           booked: 0,
// // // // // // // // //           available: 0,
// // // // // // // // //           totalRooms: 0,
// // // // // // // // //         };
// // // // // // // // //       }

// // // // // // // // //       if (booking.Status === "Accepted") {
// // // // // // // // //         groupedBookings[date].booked += booking['No Off Room'];
// // // // // // // // //       } else if (booking.Status === "" || booking.Status === "Rejected") {
// // // // // // // // //         groupedBookings[date].available += booking['No Off Room'];
// // // // // // // // //       }
// // // // // // // // //       groupedBookings[date].totalRooms += booking['No Off Room'];
// // // // // // // // //     });

// // // // // // // // //     return Object.keys(groupedBookings).map((date) => ({
// // // // // // // // //       date: date,
// // // // // // // // //       booked: groupedBookings[date].booked,
// // // // // // // // //       available: groupedBookings[date].available,
// // // // // // // // //       totalRooms: groupedBookings[date].totalRooms,
// // // // // // // // //     }));
// // // // // // // // //   };

// // // // // // // // //   const processedData = getLocationRoomData();

// // // // // // // // //   return (
// // // // // // // // //     <div className="room-availability-calendar">
// // // // // // // // //       <h2>Room Availability Calendar</h2>

// // // // // // // // //       {/* Location Dropdown */}
// // // // // // // // //       <div className="location-selector">
// // // // // // // // //         <label htmlFor="location">Select Location:</label>
// // // // // // // // //         <select
// // // // // // // // //           id="location"
// // // // // // // // //           value={selectedLocation}
// // // // // // // // //           onChange={(e) => setSelectedLocation(e.target.value)}
// // // // // // // // //         >
// // // // // // // // //           <option value="Dantewada">Dantewada</option>
// // // // // // // // //           <option value="Geedam">Geedam</option>
// // // // // // // // //           <option value="Barsur">Barsur</option>
// // // // // // // // //         </select>
// // // // // // // // //       </div>

// // // // // // // // //       <table>
// // // // // // // // //         <thead>
// // // // // // // // //           <tr>
// // // // // // // // //             <th>Date</th>
// // // // // // // // //             <th>Available Rooms</th>
// // // // // // // // //             <th>Booked Rooms</th>
// // // // // // // // //             <th>Total Rooms</th>
// // // // // // // // //           </tr>
// // // // // // // // //         </thead>
// // // // // // // // //         <tbody>
// // // // // // // // //           {processedData.map((day, index) => (
// // // // // // // // //             <tr key={index}>
// // // // // // // // //               <td>{day.date}</td>
// // // // // // // // //               <td>{day.available}</td>
// // // // // // // // //               <td>{day.booked}</td>
// // // // // // // // //               <td>{day.totalRooms}</td>
// // // // // // // // //             </tr>
// // // // // // // // //           ))}
// // // // // // // // //         </tbody>
// // // // // // // // //       </table>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default RoomAvailabilityCalendar;




// // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // import './RoomAvailabilityCalendar.css';

// // // // // // // // const API_URL = 'https://script.google.com/macros/s/AKfycbwRWOxc83WAWuSJrxs-Hc7PV5OOTakx5i-72HMpnqPyWeGRZoWfKsZlHABaJAFAt3l_/exec';

// // // // // // // // const RoomAvailabilityCalendar = () => {
// // // // // // // //   const [locationRoomData, setLocationRoomData] = useState([]);
// // // // // // // //   const [selectedLocation, setSelectedLocation] = useState('Dantewada'); // Default location

// // // // // // // //   useEffect(() => {
// // // // // // // //     const fetchRoomData = async () => {
// // // // // // // //       try {
// // // // // // // //         const response = await fetch(API_URL);
// // // // // // // //         const data = await response.json();
// // // // // // // //         if (data && Array.isArray(data.rooms)) {
// // // // // // // //           setLocationRoomData(data.rooms);
// // // // // // // //         } else {
// // // // // // // //           console.error('API returned data in an unexpected format:', data);
// // // // // // // //         }
// // // // // // // //       } catch (error) {
// // // // // // // //         console.error('Error fetching room data:', error);
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     fetchRoomData();
// // // // // // // //   }, []);

// // // // // // // //   // Function to filter and process data for the selected location within the next 7 days
// // // // // // // //   const getLocationRoomData = () => {
// // // // // // // //     const today = new Date();
// // // // // // // //     const oneWeekFromToday = new Date(today);
// // // // // // // //     oneWeekFromToday.setDate(today.getDate() + 7);

// // // // // // // //     // Filter by location and date within the next 7 days
// // // // // // // //     const filteredData = locationRoomData.filter((room) => {
// // // // // // // //       const checkInDate = new Date(room['Check In Time']);
// // // // // // // //       return (
// // // // // // // //         room.Location === selectedLocation &&  // Match the selected location
// // // // // // // //         checkInDate >= today &&                // Match date range starting from today
// // // // // // // //         checkInDate <= oneWeekFromToday
// // // // // // // //       );
// // // // // // // //     });

// // // // // // // //     // Group and process data by date
// // // // // // // //     const groupedBookings = {};

// // // // // // // //     filteredData.forEach((booking) => {
// // // // // // // //       const date = new Date(booking['Check In Time']).toISOString().split('T')[0];
// // // // // // // //       if (!groupedBookings[date]) {
// // // // // // // //         groupedBookings[date] = {
// // // // // // // //           booked: 0,
// // // // // // // //           available: 0,
// // // // // // // //           totalRooms: 0,
// // // // // // // //         };
// // // // // // // //       }

// // // // // // // //       if (booking.Status === "Accepted") {
// // // // // // // //         groupedBookings[date].booked += booking['No Off Room'];
// // // // // // // //       } else if (booking.Status === "" || booking.Status === "Rejected") {
// // // // // // // //         groupedBookings[date].available += booking['No Off Room'];
// // // // // // // //       }
// // // // // // // //       groupedBookings[date].totalRooms += booking['No Off Room'];
// // // // // // // //     });

// // // // // // // //     return Object.keys(groupedBookings).map((date) => ({
// // // // // // // //       date: date,
// // // // // // // //       booked: groupedBookings[date].booked,
// // // // // // // //       available: groupedBookings[date].available,
// // // // // // // //       totalRooms: groupedBookings[date].totalRooms,
// // // // // // // //     }));
// // // // // // // //   };

// // // // // // // //   const processedData = getLocationRoomData();

// // // // // // // //   return (
// // // // // // // //     <div className="room-availability-calendar">
// // // // // // // //       <h2>Room Availability Calendar</h2>

// // // // // // // //       {/* Location Dropdown */}
// // // // // // // //       <div className="location-selector">
// // // // // // // //         <label htmlFor="location">Select Location:</label>
// // // // // // // //         <select
// // // // // // // //           id="location"
// // // // // // // //           value={selectedLocation}
// // // // // // // //           onChange={(e) => setSelectedLocation(e.target.value)}
// // // // // // // //         >
// // // // // // // //           <option value="Dantewada">Dantewada</option>
// // // // // // // //           <option value="Geedam">Geedam</option>
// // // // // // // //           <option value="Barsur">Barsur</option>
// // // // // // // //         </select>
// // // // // // // //       </div>

// // // // // // // //       <table>
// // // // // // // //         <thead>
// // // // // // // //           <tr>
// // // // // // // //             <th>Date</th>
// // // // // // // //             <th>Available Rooms</th>
// // // // // // // //             <th>Booked Rooms</th>
// // // // // // // //             <th>Total Rooms</th>
// // // // // // // //           </tr>
// // // // // // // //         </thead>
// // // // // // // //         <tbody>
// // // // // // // //           {processedData.length > 0 ? (
// // // // // // // //             processedData.map((day, index) => (
// // // // // // // //               <tr key={index}>
// // // // // // // //                 <td>{day.date}</td>
// // // // // // // //                 <td>{day.available}</td>
// // // // // // // //                 <td>{day.booked}</td>
// // // // // // // //                 <td>{day.totalRooms}</td>
// // // // // // // //               </tr>
// // // // // // // //             ))
// // // // // // // //           ) : (
// // // // // // // //             <tr>
// // // // // // // //               <td colSpan="4">No data available for the selected location in the upcoming week.</td>
// // // // // // // //             </tr>
// // // // // // // //           )}
// // // // // // // //         </tbody>
// // // // // // // //       </table>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default RoomAvailabilityCalendar;


// // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // import './RoomAvailabilityCalendar.css';

// // // // // // // const API_URL = 'https://script.google.com/macros/s/AKfycbwRWOxc83WAWuSJrxs-Hc7PV5OOTakx5i-72HMpnqPyWeGRZoWfKsZlHABaJAFAt3l_/exec';

// // // // // // // const RoomAvailabilityCalendar = () => {
// // // // // // //   const [locationRoomData, setLocationRoomData] = useState([]);
// // // // // // //   const [selectedLocation, setSelectedLocation] = useState('Dantewada'); // Default location

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchRoomData = async () => {
// // // // // // //       try {
// // // // // // //         const response = await fetch(API_URL);
// // // // // // //         const data = await response.json();
// // // // // // //         if (data && Array.isArray(data.rooms)) {
// // // // // // //           setLocationRoomData(data.rooms);
// // // // // // //         } else {
// // // // // // //           console.error('API returned data in an unexpected format:', data);
// // // // // // //         }
// // // // // // //       } catch (error) {
// // // // // // //         console.error('Error fetching room data:', error);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     fetchRoomData();
// // // // // // //   }, []);

// // // // // // //   // Generate the next 7 days' dates starting from today
// // // // // // //   const getNextWeekDates = () => {
// // // // // // //     const dates = [];
// // // // // // //     const today = new Date();
// // // // // // //     for (let i = 0; i < 7; i++) {
// // // // // // //       const date = new Date(today);
// // // // // // //       date.setDate(today.getDate() + i);
// // // // // // //       dates.push(date.toISOString().split('T')[0]); // Format as YYYY-MM-DD
// // // // // // //     }
// // // // // // //     return dates;
// // // // // // //   };

// // // // // // //   const getLocationRoomData = () => {
// // // // // // //     const today = new Date();
// // // // // // //     const oneWeekFromToday = new Date(today);
// // // // // // //     oneWeekFromToday.setDate(today.getDate() + 7);

// // // // // // //     const filteredData = locationRoomData.filter((room) => {
// // // // // // //       const checkInDate = new Date(room['Check In Time']);
// // // // // // //       return (
// // // // // // //         room.Location === selectedLocation &&
// // // // // // //         checkInDate >= today &&
// // // // // // //         checkInDate <= oneWeekFromToday
// // // // // // //       );
// // // // // // //     });

// // // // // // //     const groupedBookings = {};

// // // // // // //     filteredData.forEach((booking) => {
// // // // // // //       const date = new Date(booking['Check In Time']).toISOString().split('T')[0];
// // // // // // //       if (!groupedBookings[date]) {
// // // // // // //         groupedBookings[date] = {
// // // // // // //           booked: 0,
// // // // // // //           available: 0,
// // // // // // //           totalRooms: 0,
// // // // // // //         };
// // // // // // //       }

// // // // // // //       if (booking.Status === "Accepted") {
// // // // // // //         groupedBookings[date].booked += booking['No Off Room'];
// // // // // // //       } else if (booking.Status === "" || booking.Status === "Rejected") {
// // // // // // //         groupedBookings[date].available += booking['No Off Room'];
// // // // // // //       }
// // // // // // //       groupedBookings[date].totalRooms += booking['No Off Room'];
// // // // // // //     });

// // // // // // //     // Transform grouped data to match the dates of the next week
// // // // // // //     const nextWeekDates = getNextWeekDates();
// // // // // // //     return nextWeekDates.map((date) => ({
// // // // // // //       date: date,
// // // // // // //       booked: groupedBookings[date]?.booked || 0,
// // // // // // //       available: groupedBookings[date]?.available || 0,
// // // // // // //       totalRooms: groupedBookings[date]?.totalRooms || 0,
// // // // // // //     }));
// // // // // // //   };

// // // // // // //   const processedData = getLocationRoomData();

// // // // // // //   return (
// // // // // // //     <div className="room-availability-calendar">
// // // // // // //       <h2>Room Availability Calendar</h2>

// // // // // // //       {/* Location Dropdown */}
// // // // // // //       <div className="location-selector">
// // // // // // //         <label htmlFor="location">Select Location:</label>
// // // // // // //         <select
// // // // // // //           id="location"
// // // // // // //           value={selectedLocation}
// // // // // // //           onChange={(e) => setSelectedLocation(e.target.value)}
// // // // // // //         >
// // // // // // //           <option value="Dantewada">Dantewada</option>
// // // // // // //           <option value="Geedam">Geedam</option>
// // // // // // //           <option value="Barsur">Barsur</option>
// // // // // // //         </select>
// // // // // // //       </div>

// // // // // // //       <table>
// // // // // // //         <thead>
// // // // // // //           <tr>
// // // // // // //             <th>Date</th>
// // // // // // //             <th>Available Rooms</th>
// // // // // // //             <th>Booked Rooms</th>
// // // // // // //             <th>Total Rooms</th>
// // // // // // //           </tr>
// // // // // // //         </thead>
// // // // // // //         <tbody>
// // // // // // //           {processedData.map((day, index) => (
// // // // // // //             <tr key={index}>
// // // // // // //               <td>{day.date}</td>
// // // // // // //               <td>{day.available}</td>
// // // // // // //               <td>{day.booked}</td>
// // // // // // //               <td>{day.totalRooms}</td>
// // // // // // //             </tr>
// // // // // // //           ))}
// // // // // // //         </tbody>
// // // // // // //       </table>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default RoomAvailabilityCalendar;






// // // // // // import React, { useEffect, useState } from 'react';
// // // // // // import './RoomAvailabilityCalendar.css';

// // // // // // const API_URL = 'https://script.google.com/macros/s/AKfycbwRWOxc83WAWuSJrxs-Hc7PV5OOTakx5i-72HMpnqPyWeGRZoWfKsZlHABaJAFAt3l_/exec';

// // // // // // const MAX_ROOMS = {
// // // // // //   Dantewada: 6,
// // // // // //   Geedam: 2,
// // // // // //   Barsur: 2,
// // // // // // };

// // // // // // const RoomAvailabilityCalendar = () => {
// // // // // //   const [locationRoomData, setLocationRoomData] = useState([]);
// // // // // //   const [selectedLocation, setSelectedLocation] = useState('Dantewada'); // Default location

// // // // // //   useEffect(() => {
// // // // // //     const fetchRoomData = async () => {
// // // // // //       try {
// // // // // //         const response = await fetch(API_URL);
// // // // // //         const data = await response.json();
// // // // // //         if (data && Array.isArray(data.rooms)) {
// // // // // //           setLocationRoomData(data.rooms);
// // // // // //         } else {
// // // // // //           console.error('API returned data in an unexpected format:', data);
// // // // // //         }
// // // // // //       } catch (error) {
// // // // // //         console.error('Error fetching room data:', error);
// // // // // //       }
// // // // // //     };

// // // // // //     fetchRoomData();
// // // // // //   }, []);

// // // // // //   // Generate the next 7 days' dates starting from today
// // // // // //   const getNextWeekDates = () => {
// // // // // //     const dates = [];
// // // // // //     const today = new Date();
// // // // // //     for (let i = 0; i < 7; i++) {
// // // // // //       const date = new Date(today);
// // // // // //       date.setDate(today.getDate() + i);
// // // // // //       dates.push(date.toISOString().split('T')[0]); // Format as YYYY-MM-DD
// // // // // //     }
// // // // // //     return dates;
// // // // // //   };

// // // // // //   const getLocationRoomData = () => {
// // // // // //     const today = new Date();
// // // // // //     const oneWeekFromToday = new Date(today);
// // // // // //     oneWeekFromToday.setDate(today.getDate() + 7);

// // // // // //     const filteredData = locationRoomData.filter((room) => {
// // // // // //       const checkInDate = new Date(room['Check In Time']);
// // // // // //       return (
// // // // // //         room.Location === selectedLocation &&
// // // // // //         checkInDate >= today &&
// // // // // //         checkInDate <= oneWeekFromToday
// // // // // //       );
// // // // // //     });

// // // // // //     const groupedBookings = {};

// // // // // //     filteredData.forEach((booking) => {
// // // // // //       const date = new Date(booking['Check In Time']).toISOString().split('T')[0];
// // // // // //       if (!groupedBookings[date]) {
// // // // // //         groupedBookings[date] = {
// // // // // //           booked: 0,
// // // // // //           available: 0,
// // // // // //           totalRooms: MAX_ROOMS[selectedLocation], // Set total rooms to maximum for the location
// // // // // //         };
// // // // // //       }

// // // // // //       if (booking.Status === "Accepted") {
// // // // // //         groupedBookings[date].booked += booking['No Off Room'];
// // // // // //       } else if (booking.Status === "" || booking.Status === "Rejected") {
// // // // // //         groupedBookings[date].available += booking['No Off Room'];
// // // // // //       }
// // // // // //       groupedBookings[date].totalRooms = MAX_ROOMS[selectedLocation]; // Ensure total rooms reflect max
// // // // // //     });

// // // // // //     // Transform grouped data to match the dates of the next week
// // // // // //     const nextWeekDates = getNextWeekDates();
// // // // // //     return nextWeekDates.map((date) => ({
// // // // // //       date: date,
// // // // // //       booked: groupedBookings[date]?.booked || 0,
// // // // // //       available: groupedBookings[date]?.available || 0,
// // // // // //       totalRooms: MAX_ROOMS[selectedLocation], // Use max rooms for the location
// // // // // //     }));
// // // // // //   };

// // // // // //   const processedData = getLocationRoomData();

// // // // // //   return (
// // // // // //     <div className="room-availability-calendar">
// // // // // //       <h2>Room Availability Calendar</h2>

// // // // // //       {/* Location Dropdown */}
// // // // // //       <div className="location-selector">
// // // // // //         <label htmlFor="location">Select Location:</label>
// // // // // //         <select
// // // // // //           id="location"
// // // // // //           value={selectedLocation}
// // // // // //           onChange={(e) => setSelectedLocation(e.target.value)}
// // // // // //         >
// // // // // //           <option value="Dantewada">Dantewada</option>
// // // // // //           <option value="Geedam">Geedam</option>
// // // // // //           <option value="Barsur">Barsur</option>
// // // // // //         </select>
// // // // // //       </div>

// // // // // //       <table>
// // // // // //         <thead>
// // // // // //           <tr>
// // // // // //             <th>Date</th>
// // // // // //             <th>Available Rooms</th>
// // // // // //             <th>Booked Rooms</th>
// // // // // //             <th>Total Rooms</th>
// // // // // //           </tr>
// // // // // //         </thead>
// // // // // //         <tbody>
// // // // // //           {processedData.map((day, index) => (
// // // // // //             <tr key={index}>
// // // // // //               <td>{day.date}</td>
// // // // // //               <td>{day.available}</td>
// // // // // //               <td>{day.booked}</td>
// // // // // //               <td>{day.totalRooms}</td>
// // // // // //             </tr>
// // // // // //           ))}
// // // // // //         </tbody>
// // // // // //       </table>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default RoomAvailabilityCalendar;




// // // // // import React, { useEffect, useState } from 'react';
// // // // // import './RoomAvailabilityCalendar.css';

// // // // // const API_URL = 'https://script.google.com/macros/s/AKfycbwRWOxc83WAWuSJrxs-Hc7PV5OOTakx5i-72HMpnqPyWeGRZoWfKsZlHABaJAFAt3l_/exec';

// // // // // const MAX_ROOMS = {
// // // // //   Dantewada: 6,
// // // // //   Geedam: 2,
// // // // //   Barsur: 2,
// // // // // };

// // // // // const RoomAvailabilityCalendar = () => {
// // // // //   const [locationRoomData, setLocationRoomData] = useState([]);
// // // // //   const [selectedLocation, setSelectedLocation] = useState('Dantewada'); // Default location

// // // // //   useEffect(() => {
// // // // //     const fetchRoomData = async () => {
// // // // //       try {
// // // // //         const response = await fetch(API_URL);
// // // // //         const data = await response.json();
// // // // //         if (data && Array.isArray(data.rooms)) {
// // // // //           setLocationRoomData(data.rooms);
// // // // //         } else {
// // // // //           console.error('API returned data in an unexpected format:', data);
// // // // //         }
// // // // //       } catch (error) {
// // // // //         console.error('Error fetching room data:', error);
// // // // //       }
// // // // //     };

// // // // //     fetchRoomData();
// // // // //   }, []);

// // // // //   // Generate the next 7 days' dates starting from today in dd-mm-yy format
// // // // //   const getNextWeekDates = () => {
// // // // //     const dates = [];
// // // // //     const today = new Date();
// // // // //     for (let i = 0; i < 7; i++) {
// // // // //       const date = new Date(today);
// // // // //       date.setDate(today.getDate() + i);
// // // // //       // Format as dd-mm-yy
// // // // //       const formattedDate = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getFullYear()).slice(2)}`;
// // // // //       dates.push(formattedDate);
// // // // //     }
// // // // //     return dates;
// // // // //   };

// // // // //   const getLocationRoomData = () => {
// // // // //     const today = new Date();
// // // // //     const oneWeekFromToday = new Date(today);
// // // // //     oneWeekFromToday.setDate(today.getDate() + 7);

// // // // //     const filteredData = locationRoomData.filter((room) => {
// // // // //       const checkInDate = new Date(room['Check In Time']);
// // // // //       return (
// // // // //         room.Location === selectedLocation &&
// // // // //         checkInDate >= today &&
// // // // //         checkInDate <= oneWeekFromToday
// // // // //       );
// // // // //     });

// // // // //     const groupedBookings = {};

// // // // //     filteredData.forEach((booking) => {
// // // // //       const date = new Date(booking['Check In Time']).toISOString().split('T')[0];
// // // // //       if (!groupedBookings[date]) {
// // // // //         groupedBookings[date] = {
// // // // //           booked: 0,
// // // // //           available: 0,
// // // // //           totalRooms: MAX_ROOMS[selectedLocation], // Set total rooms to maximum for the location
// // // // //         };
// // // // //       }

// // // // //       if (booking.Status === "Accepted") {
// // // // //         groupedBookings[date].booked += booking['No Off Room'];
// // // // //       } else if (booking.Status === "" || booking.Status === "Rejected") {
// // // // //         groupedBookings[date].available += booking['No Off Room'];
// // // // //       }
// // // // //       groupedBookings[date].totalRooms = MAX_ROOMS[selectedLocation]; // Ensure total rooms reflect max
// // // // //     });

// // // // //     // Transform grouped data to match the dates of the next week
// // // // //     const nextWeekDates = getNextWeekDates();
// // // // //     return nextWeekDates.map((date) => ({
// // // // //       date: date,
// // // // //       booked: groupedBookings[date]?.booked || 0,
// // // // //       available: groupedBookings[date]?.available || 0,
// // // // //       totalRooms: MAX_ROOMS[selectedLocation], // Use max rooms for the location
// // // // //     }));
// // // // //   };

// // // // //   const processedData = getLocationRoomData();

// // // // //   return (
// // // // //     <div className="room-availability-calendar">
// // // // //       <h2>Room Availability Calendar</h2>

// // // // //       {/* Location Dropdown */}
// // // // //       <div className="location-selector">
// // // // //         <label htmlFor="location">Select Location:</label>
// // // // //         <select
// // // // //           id="location"
// // // // //           value={selectedLocation}
// // // // //           onChange={(e) => setSelectedLocation(e.target.value)}
// // // // //         >
// // // // //           <option value="Dantewada">Dantewada</option>
// // // // //           <option value="Geedam">Geedam</option>
// // // // //           <option value="Barsur">Barsur</option>
// // // // //         </select>
// // // // //       </div>

// // // // //       <table>
// // // // //         <thead>
// // // // //           <tr>
// // // // //             <th>Date</th>
// // // // //             <th>Available Rooms</th>
// // // // //             <th>Booked Rooms</th>
// // // // //             <th>Total Rooms</th>
// // // // //           </tr>
// // // // //         </thead>
// // // // //         <tbody>
// // // // //           {processedData.map((day, index) => (
// // // // //             <tr key={index}>
// // // // //               <td>{day.date}</td>
// // // // //               <td>{day.available}</td>
// // // // //               <td>{day.booked}</td>
// // // // //               <td>{day.totalRooms}</td>
// // // // //             </tr>
// // // // //           ))}
// // // // //         </tbody>
// // // // //       </table>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default RoomAvailabilityCalendar;


// // // // import React, { useEffect, useState } from 'react';
// // // // import './RoomAvailabilityCalendar.css';

// // // // const API_URL = 'https://script.google.com/macros/s/AKfycbwRWOxc83WAWuSJrxs-Hc7PV5OOTakx5i-72HMpnqPyWeGRZoWfKsZlHABaJAFAt3l_/exec';

// // // // const MAX_ROOMS = {
// // // //   Dantewada: 6,
// // // //   Geedam: 2,
// // // //   Barsur: 2,
// // // // };

// // // // const RoomAvailabilityCalendar = () => {
// // // //   const [locationRoomData, setLocationRoomData] = useState([]);
// // // //   const [selectedLocation, setSelectedLocation] = useState('Dantewada'); // Default location

// // // //   useEffect(() => {
// // // //     const fetchRoomData = async () => {
// // // //       try {
// // // //         const response = await fetch(API_URL);
// // // //         const data = await response.json();
// // // //         if (data && Array.isArray(data.rooms)) {
// // // //           setLocationRoomData(data.rooms);
// // // //         } else {
// // // //           console.error('API returned data in an unexpected format:', data);
// // // //         }
// // // //       } catch (error) {
// // // //         console.error('Error fetching room data:', error);
// // // //       }
// // // //     };

// // // //     fetchRoomData();
// // // //   }, []);

// // // //   // Generate the next 7 days' dates starting from today in dd-mm-yyyy format
// // // //   const getNextWeekDates = () => {
// // // //     const dates = [];
// // // //     const today = new Date();
// // // //     for (let i = 0; i < 7; i++) {
// // // //       const date = new Date(today);
// // // //       date.setDate(today.getDate() + i);
// // // //       // Format as dd-mm-yyyy
// // // //       const formattedDate = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;
// // // //       dates.push(formattedDate);
// // // //     }
// // // //     return dates;
// // // //   };

// // // //   const getLocationRoomData = () => {
// // // //     const today = new Date();
// // // //     const oneWeekFromToday = new Date(today);
// // // //     oneWeekFromToday.setDate(today.getDate() + 7);

// // // //     const filteredData = locationRoomData.filter((room) => {
// // // //       const checkInDate = new Date(room['Check In Time']);
// // // //       return (
// // // //         room.Location === selectedLocation &&
// // // //         checkInDate >= today &&
// // // //         checkInDate <= oneWeekFromToday
// // // //       );
// // // //     });

// // // //     const groupedBookings = {};

// // // //     filteredData.forEach((booking) => {
// // // //       const date = new Date(booking['Check In Time']).toISOString().split('T')[0];
// // // //       if (!groupedBookings[date]) {
// // // //         groupedBookings[date] = {
// // // //           booked: 0,
// // // //           available: 0,
// // // //           totalRooms: MAX_ROOMS[selectedLocation], // Set total rooms to maximum for the location
// // // //         };
// // // //       }

// // // //       if (booking.Status === "Accepted") {
// // // //         groupedBookings[date].booked += booking['No Off Room'];
// // // //       } else if (booking.Status === "" || booking.Status === "Rejected") {
// // // //         groupedBookings[date].available += booking['No Off Room'];
// // // //       }
// // // //       groupedBookings[date].totalRooms = MAX_ROOMS[selectedLocation]; // Ensure total rooms reflect max
// // // //     });

// // // //     // Transform grouped data to match the dates of the next week
// // // //     const nextWeekDates = getNextWeekDates();
// // // //     return nextWeekDates.map((date) => ({
// // // //       date: date,
// // // //       booked: groupedBookings[date]?.booked || 0,
// // // //       available: groupedBookings[date]?.available || 0,
// // // //       totalRooms: MAX_ROOMS[selectedLocation], // Use max rooms for the location
// // // //     }));
// // // //   };

// // // //   const processedData = getLocationRoomData();

// // // //   return (
// // // //     <div className="room-availability-calendar">
// // // //       <h2>Room Availability Calendar</h2>

// // // //       {/* Location Dropdown */}
// // // //       <div className="location-selector">
// // // //         <label htmlFor="location">Select Location:</label>
// // // //         <select
// // // //           id="location"
// // // //           value={selectedLocation}
// // // //           onChange={(e) => setSelectedLocation(e.target.value)}
// // // //         >
// // // //           <option value="Dantewada">Dantewada</option>
// // // //           <option value="Geedam">Geedam</option>
// // // //           <option value="Barsur">Barsur</option>
// // // //         </select>
// // // //       </div>

// // // //       <table>
// // // //         <thead>
// // // //           <tr>
// // // //             <th>Date</th>
// // // //             <th>Available Rooms</th>
// // // //             <th>Booked Rooms</th>
// // // //             <th>Total Rooms</th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {processedData.map((day, index) => (
// // // //             <tr key={index}>
// // // //               <td>{day.date}</td>
// // // //               <td>{day.available}</td>
// // // //               <td>{day.booked}</td>
// // // //               <td>{day.totalRooms}</td>
// // // //             </tr>
// // // //           ))}
// // // //         </tbody>
// // // //       </table>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default RoomAvailabilityCalendar;



// // // import React, { useEffect, useState } from 'react';
// // // import './RoomAvailabilityCalendar.css';

// // // const API_URL = 'https://script.google.com/macros/s/AKfycbwRWOxc83WAWuSJrxs-Hc7PV5OOTakx5i-72HMpnqPyWeGRZoWfKsZlHABaJAFAt3l_/exec';

// // // const MAX_ROOMS = {
// // //   Dantewada: 6,
// // //   Geedam: 2,
// // //   Barsur: 2,
// // // };

// // // const RoomAvailabilityCalendar = () => {
// // //   const [locationRoomData, setLocationRoomData] = useState([]);
// // //   const [selectedLocation, setSelectedLocation] = useState('Dantewada'); // Default location

// // //   useEffect(() => {
// // //     const fetchRoomData = async () => {
// // //       try {
// // //         const response = await fetch(API_URL);
// // //         const data = await response.json();
// // //         if (data && Array.isArray(data.rooms)) {
// // //           setLocationRoomData(data.rooms);
// // //         } else {
// // //           console.error('API returned data in an unexpected format:', data);
// // //         }
// // //       } catch (error) {
// // //         console.error('Error fetching room data:', error);
// // //       }
// // //     };

// // //     fetchRoomData();
// // //   }, []);

// // //   // Generate the next 7 days' dates starting from today in dd-mm-yyyy format
// // //   const getNextWeekDates = () => {
// // //     const dates = [];
// // //     const today = new Date();
// // //     for (let i = 0; i < 7; i++) {
// // //       const date = new Date(today);
// // //       date.setDate(today.getDate() + i);
// // //       // Format as dd-mm-yyyy
// // //       const formattedDate = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;
// // //       dates.push(formattedDate);
// // //     }
// // //     return dates;
// // //   };

// // //   const getLocationRoomData = () => {
// // //     const today = new Date();
// // //     const oneWeekFromToday = new Date(today);
// // //     oneWeekFromToday.setDate(today.getDate() + 7);

// // //     // Filter data by selected location and date range
// // //     const filteredData = locationRoomData.filter((room) => {
// // //       const checkInDate = new Date(room['Check In Time']);
// // //       return (
// // //         room.Location === selectedLocation &&
// // //         checkInDate >= today &&
// // //         checkInDate <= oneWeekFromToday
// // //       );
// // //     });

// // //     // Group bookings by date
// // //     const groupedBookings = {};
// // //     filteredData.forEach((booking) => {
// // //       const checkInDate = new Date(booking['Check In Time']);
// // //       const dateKey = `${String(checkInDate.getDate()).padStart(2, '0')}-${String(checkInDate.getMonth() + 1).padStart(2, '0')}-${checkInDate.getFullYear()}`;

// // //       if (!groupedBookings[dateKey]) {
// // //         groupedBookings[dateKey] = {
// // //           booked: 0,
// // //           available: MAX_ROOMS[selectedLocation], // Initialize available rooms as max
// // //         };
// // //       }

// // //       // Increment booked count based on status
// // //       if (booking.Status === "Accepted") {
// // //         groupedBookings[dateKey].booked += booking['No Off Room'];
// // //       }
// // //     });

// // //     // Prepare the final data structure
// // //     const nextWeekDates = getNextWeekDates();
// // //     return nextWeekDates.map((date) => ({
// // //       date: date,
// // //       booked: groupedBookings[date]?.booked || 0,
// // //       available: MAX_ROOMS[selectedLocation] - (groupedBookings[date]?.booked || 0), // Calculate available
// // //       totalRooms: MAX_ROOMS[selectedLocation],
// // //     }));
// // //   };

// // //   const processedData = getLocationRoomData();

// // //   return (
// // //     <div className="room-availability-calendar">
// // //       <h2>Room Availability Calendar</h2>

// // //       {/* Location Dropdown */}
// // //       <div className="location-selector">
// // //         <label htmlFor="location">Select Location:</label>
// // //         <select
// // //           id="location"
// // //           value={selectedLocation}
// // //           onChange={(e) => {
// // //             setSelectedLocation(e.target.value);
// // //             // Reset room data when location changes
// // //             setLocationRoomData([]); // Clear current data for new fetch
// // //             fetchRoomData(); // Fetch new data for the selected location
// // //           }}
// // //         >
// // //           <option value="Dantewada">Dantewada</option>
// // //           <option value="Geedam">Geedam</option>
// // //           <option value="Barsur">Barsur</option>
// // //         </select>
// // //       </div>

// // //       <table>
// // //         <thead>
// // //           <tr>
// // //             <th>Date</th>
// // //             <th>Available Rooms</th>
// // //             <th>Booked Rooms</th>
// // //             <th>Total Rooms</th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {processedData.map((day, index) => (
// // //             <tr key={index}>
// // //               <td>{day.date}</td>
// // //               <td>{day.available}</td>
// // //               <td>{day.booked}</td>
// // //               <td>{day.totalRooms}</td>
// // //             </tr>
// // //           ))}
// // //         </tbody>
// // //       </table>
// // //     </div>
// // //   );
// // // };

// // // export default RoomAvailabilityCalendar;




// // import React, { useEffect, useState } from 'react';
// // import './RoomAvailabilityCalendar.css';

// // const API_URL = 'https://script.google.com/macros/s/AKfycbwRWOxc83WAWuSJrxs-Hc7PV5OOTakx5i-72HMpnqPyWeGRZoWfKsZlHABaJAFAt3l_/exec';

// // const MAX_ROOMS = {
// //   Dantewada: 6,
// //   Geedam: 2,
// //   Barsur: 2,
// // };

// // const RoomAvailabilityCalendar = () => {
// //   const [locationRoomData, setLocationRoomData] = useState([]);
// //   const [selectedLocation, setSelectedLocation] = useState('Dantewada'); // Default location

// //   const fetchRoomData = async () => {
// //     try {
// //       const response = await fetch(API_URL);
// //       const data = await response.json();
// //       if (data && Array.isArray(data.rooms)) {
// //         setLocationRoomData(data.rooms);
// //       } else {
// //         console.error('API returned data in an unexpected format:', data);
// //       }
// //     } catch (error) {
// //       console.error('Error fetching room data:', error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchRoomData(); // Fetch room data on component mount
// //   }, []);

// //   // Generate the next 7 days' dates starting from today in dd-mm-yyyy format
// //   const getNextWeekDates = () => {
// //     const dates = [];
// //     const today = new Date();
// //     for (let i = 0; i < 7; i++) {
// //       const date = new Date(today);
// //       date.setDate(today.getDate() + i);
// //       // Format as dd-mm-yyyy
// //       const formattedDate = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;
// //       dates.push(formattedDate);
// //     }
// //     return dates;
// //   };

// //   const getLocationRoomData = () => {
// //     const today = new Date();
// //     const oneWeekFromToday = new Date(today);
// //     oneWeekFromToday.setDate(today.getDate() + 7);

// //     // Filter data by selected location and date range
// //     const filteredData = locationRoomData.filter((room) => {
// //       const checkInDate = new Date(room['Check In Time']);
// //       return (
// //         room.Location === selectedLocation &&
// //         checkInDate >= today &&
// //         checkInDate <= oneWeekFromToday
// //       );
// //     });

// //     // Group bookings by date
// //     const groupedBookings = {};
// //     filteredData.forEach((booking) => {
// //       const checkInDate = new Date(booking['Check In Time']);
// //       const dateKey = `${String(checkInDate.getDate()).padStart(2, '0')}-${String(checkInDate.getMonth() + 1).padStart(2, '0')}-${checkInDate.getFullYear()}`;

// //       if (!groupedBookings[dateKey]) {
// //         groupedBookings[dateKey] = {
// //           booked: 0,
// //           available: MAX_ROOMS[selectedLocation], // Initialize available rooms as max
// //         };
// //       }

// //       // Increment booked count based on status
// //       if (booking.Status === "Accepted") {
// //         groupedBookings[dateKey].booked += booking['No Off Room'];
// //       }
// //     });

// //     // Prepare the final data structure
// //     const nextWeekDates = getNextWeekDates();
// //     return nextWeekDates.map((date) => ({
// //       date: date,
// //       booked: groupedBookings[date]?.booked || 0,
// //       available: MAX_ROOMS[selectedLocation] - (groupedBookings[date]?.booked || 0), // Calculate available
// //       totalRooms: MAX_ROOMS[selectedLocation],
// //     }));
// //   };

// //   const processedData = getLocationRoomData();

// //   return (
// //     <div className="room-availability-calendar">
// //       <h2>Room Availability Calendar</h2>

// //       {/* Location Dropdown */}
// //       <div className="location-selector">
// //         <label htmlFor="location">Select Location:</label>
// //         <select
// //           id="location"
// //           value={selectedLocation}
// //           onChange={(e) => {
// //             setSelectedLocation(e.target.value);
// //             fetchRoomData(); // Fetch new data for the selected location
// //           }}
// //         >
// //           <option value="Dantewada">Dantewada</option>
// //           <option value="Geedam">Geedam</option>
// //           <option value="Barsur">Barsur</option>
// //         </select>
// //       </div>

// //       <table>
// //         <thead>
// //           <tr>
// //             <th>Date</th>
// //             <th>Available Rooms</th>
// //             <th>Booked Rooms</th>
// //             <th>Total Rooms</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {processedData.map((day, index) => (
// //             <tr key={index}>
// //               <td>{day.date}</td>
// //               <td>{day.available}</td>
// //               <td>{day.booked}</td>
// //               <td>{day.totalRooms}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default RoomAvailabilityCalendar;





// import React, { useEffect, useState } from 'react';
// import './RoomAvailabilityCalendar.css';

// const API_URL = 'https://script.google.com/macros/s/AKfycbwRWOxc83WAWuSJrxs-Hc7PV5OOTakx5i-72HMpnqPyWeGRZoWfKsZlHABaJAFAt3l_/exec';

// const MAX_ROOMS = {
//   Dantewada: 6,
//   Geedam: 2,
//   Barsur: 2,
// };

// const RoomAvailabilityCalendar = () => {
//   const [locationRoomData, setLocationRoomData] = useState([]);
//   const [selectedLocation, setSelectedLocation] = useState('Dantewada'); // Default location

//   const fetchRoomData = async () => {
//     try {
//       const response = await fetch(API_URL);
//       const data = await response.json();
//       if (data && Array.isArray(data.rooms)) {
//         setLocationRoomData(data.rooms);
//       } else {
//         console.error('API returned data in an unexpected format:', data);
//       }
//     } catch (error) {
//       console.error('Error fetching room data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchRoomData(); // Fetch room data on component mount
//   }, []);

//   // Generate the next 7 days' dates starting from today in dd-mm-yyyy format
//   const getNextWeekDates = () => {
//     const dates = [];
//     const today = new Date();
//     for (let i = 0; i < 7; i++) {
//       const date = new Date(today);
//       date.setDate(today.getDate() + i);
//       // Format as dd-mm-yyyy
//       const formattedDate = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;
//       dates.push(formattedDate);
//     }
//     return dates;
//   };

//   const getLocationRoomData = () => {
//     const today = new Date();
//     const oneWeekFromToday = new Date(today);
//     oneWeekFromToday.setDate(today.getDate() + 7);

//     // Filter data by selected location and date range
//     const filteredData = locationRoomData.filter((room) => {
//       const checkInDate = new Date(room['Check In Time']);
//       return (
//         room.Location === selectedLocation &&
//         checkInDate >= today &&
//         checkInDate <= oneWeekFromToday
//       );
//     });

//     // Group bookings by date
//     const groupedBookings = {};
//     filteredData.forEach((booking) => {
//       const checkInDate = new Date(booking['Check In Time']);
//       const dateKey = `${String(checkInDate.getDate()).padStart(2, '0')}-${String(checkInDate.getMonth() + 1).padStart(2, '0')}-${checkInDate.getFullYear()}`;

//       // Initialize entry if it doesn't exist
//       if (!groupedBookings[dateKey]) {
//         groupedBookings[dateKey] = {
//           booked: 0,
//           available: MAX_ROOMS[selectedLocation], // Initialize available rooms as max
//         };
//       }

//       // Increment booked count based on status
//       if (booking.Status === "Accepted") {
//         groupedBookings[dateKey].booked += booking['No Off Room'];
//       }
//     });

//     // Prepare the final data structure
//     const nextWeekDates = getNextWeekDates();
//     return nextWeekDates.map((date) => ({
//       date: date,
//       booked: groupedBookings[date]?.booked || 0,
//       available: MAX_ROOMS[selectedLocation] - (groupedBookings[date]?.booked || 0), // Calculate available
//       totalRooms: MAX_ROOMS[selectedLocation],
//     }));
//   };

//   const processedData = getLocationRoomData();

//   return (
//     <div className="room-availability-calendar">
//       <h2>Room Availability Calendar</h2>

//       {/* Location Dropdown */}
//       <div className="location-selector">
//         <label htmlFor="location">Select Location:</label>
//         <select
//           id="location"
//           value={selectedLocation}
//           onChange={(e) => {
//             setSelectedLocation(e.target.value);
//             fetchRoomData(); // Fetch new data for the selected location
//           }}
//         >
//           <option value="Dantewada">Dantewada</option>
//           <option value="Geedam">Geedam</option>
//           <option value="Barsur">Barsur</option>
//         </select>
//       </div>

//       <table>
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Available Rooms</th>
//             <th>Booked Rooms</th>
//             <th>Total Rooms</th>
//           </tr>
//         </thead>
//         <tbody>
//           {processedData.map((day, index) => (
//             <tr key={index}>
//               <td>{day.date}</td>
//               <td>{day.available}</td>
//               <td>{day.booked}</td>
//               <td>{day.totalRooms}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RoomAvailabilityCalendar;




////.............best 

import React, { useEffect, useState } from 'react';
import './RoomAvailabilityCalendar.css';

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
        console.log("Fetched Data:", data);
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

    const filteredData = locationRoomData.filter(room => 
      room.Location === selectedLocation &&
      nextWeekDates.includes(formatDate(new Date(room['Check In Time'])))
    );

    filteredData.forEach(booking => {
      const dateKey = formatDate(new Date(booking['Check In Time']));
      if (booking.Status && booking.Status.trim() === "Accepted") {
        bookingData[dateKey].booked += booking['No Off Room'];
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
