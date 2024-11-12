// // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // import './AllRooms.css';

// // // // // // // // // // const AllRooms = () => {
// // // // // // // // // //     const [location, setLocation] = useState('Dantewada');
// // // // // // // // // //     const [roomsData, setRoomsData] = useState({}); // Stores rooms for all locations
// // // // // // // // // //     const [filteredRooms, setFilteredRooms] = useState([]); // Stores rooms filtered by location

// // // // // // // // // //     // Total room count for each location
// // // // // // // // // //     const totalRooms = {
// // // // // // // // // //         'Dantewada': 6,
// // // // // // // // // //         'Geedam': 2,
// // // // // // // // // //         'Barsur': 2,
// // // // // // // // // //     };

// // // // // // // // // //     // Fetching the room data from the Google Apps Script
// // // // // // // // // //     const fetchRooms = async () => {
// // // // // // // // // //         try {
// // // // // // // // // //             let res = await fetch("https://script.google.com/macros/s/AKfycbzKkHTAVZLLk7DjCIv1Wzay-egQROJLuVBzqIyNH-9mkJ5kfhAaYxfbdq4ltVOutYw3/exec");
// // // // // // // // // //             let data = await res.json(); //https://script.google.com/macros/s/AKfycbwRWOxc83WAWuSJrxs-Hc7PV5OOTakx5i-72HMpnqPyWeGRZoWfKsZlHABaJAFAt3l_/exec

// // // // // // // // // //             // Ensure rooms data contains rooms for all locations and set state
// // // // // // // // // //             if (data.rooms) {
// // // // // // // // // //                 setRoomsData(data.rooms);  // Save all rooms data
// // // // // // // // // //                 setFilteredRooms(data.rooms[location] || []);  // Filter for initial location (Dantewada)
// // // // // // // // // //             } else {
// // // // // // // // // //                 console.error('Expected data.rooms to contain room information:', data.rooms);
// // // // // // // // // //                 setRoomsData({});
// // // // // // // // // //                 setFilteredRooms([]);
// // // // // // // // // //             }
// // // // // // // // // //         } catch (error) {
// // // // // // // // // //             console.error('Error fetching rooms:', error);
// // // // // // // // // //         }
// // // // // // // // // //     };

// // // // // // // // // //     // useEffect to fetch the rooms on component mount and when location changes
// // // // // // // // // //     useEffect(() => {
// // // // // // // // // //         fetchRooms();
// // // // // // // // // //     }, []);

// // // // // // // // // //     // Update the filtered rooms when the location changes
// // // // // // // // // //     useEffect(() => {
// // // // // // // // // //         // Log the rooms data and location for debugging
// // // // // // // // // //         console.log(`Rooms for ${location}:`, roomsData[location]);

// // // // // // // // // //         // Set filtered rooms for the selected location
// // // // // // // // // //         setFilteredRooms(roomsData[location] || []);
// // // // // // // // // //     }, [location, roomsData]);

// // // // // // // // // //     const handleLocationChange = (event) => {
// // // // // // // // // //         setLocation(event.target.value);
// // // // // // // // // //     };

// // // // // // // // // //     // Render rooms based on the total room count for the selected location
// // // // // // // // // //     const renderRooms = () => {
// // // // // // // // // //         const rooms = [];

// // // // // // // // // //         for (let i = 1; i <= totalRooms[location]; i++) {
// // // // // // // // // //             // Find the room by its index in the array (or fallback to "Available")
// // // // // // // // // //             const room = filteredRooms[i - 1]; // Assuming rooms are indexed based on room numbers

// // // // // // // // // //             // If no room is found, default to 'Available'
// // // // // // // // // //             const roomStatus = room ? room.status : 'Available';

// // // // // // // // // //             rooms.push(
// // // // // // // // // //                 <tr key={`${i}-${location}`} className="table-row">
// // // // // // // // // //                     <td className="AllRooms-table-data">{i}</td> {/* Room number starting from 1 */}
// // // // // // // // // //                     <td className="AllRooms-table-data">{roomStatus}</td>
// // // // // // // // // //                 </tr>
// // // // // // // // // //             );
// // // // // // // // // //         }

// // // // // // // // // //         return rooms;
// // // // // // // // // //     };

// // // // // // // // // //     return (
// // // // // // // // // //         <div className="room-list">
// // // // // // // // // //             <h2 className='room-head'>Room List For Today !</h2>

// // // // // // // // // //             {/* Location Filters */}
// // // // // // // // // //             <label htmlFor="location-select">Select Location:</label>
// // // // // // // // // //             <select id="location-select" value={location} onChange={handleLocationChange}>
// // // // // // // // // //                 <option value="Dantewada">Dantewada</option>
// // // // // // // // // //                 <option value="Barsur">Barsur</option>
// // // // // // // // // //                 <option value="Geedam">Geedam</option>
// // // // // // // // // //             </select>

// // // // // // // // // //             {/* Room Table */}
// // // // // // // // // //             <table className="room-table">
// // // // // // // // // //                 <thead>
// // // // // // // // // //                     <tr>
// // // // // // // // // //                         <th className="AllRooms-table-header">Room No.</th>
// // // // // // // // // //                         <th className="AllRooms-table-header">Status</th>
// // // // // // // // // //                     </tr>
// // // // // // // // // //                 </thead>
// // // // // // // // // //                 <tbody>
// // // // // // // // // //                     {renderRooms()}
// // // // // // // // // //                 </tbody>
// // // // // // // // // //             </table>
// // // // // // // // // //         </div>
// // // // // // // // // //     );
// // // // // // // // // // };

// // // // // // // // // // export default AllRooms;





// // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // import './AllRooms.css';

// // // // // // // // // const AllRooms = () => {
// // // // // // // // //     const [location, setLocation] = useState('Dantewada');
// // // // // // // // //     const [roomsData, setRoomsData] = useState({}); // Stores rooms for all locations
// // // // // // // // //     const [filteredRooms, setFilteredRooms] = useState([]); // Stores rooms filtered by location

// // // // // // // // //     // Total room count for each location
// // // // // // // // //     const totalRooms = {
// // // // // // // // //         'Dantewada': 6,
// // // // // // // // //         'Geedam': 2,
// // // // // // // // //         'Barsur': 2,
// // // // // // // // //     };

// // // // // // // // //     // Fetching the room data from the Google Apps Script
// // // // // // // // //     const fetchRooms = async () => {
// // // // // // // // //         try {
// // // // // // // // //             let res = await fetch("https://script.google.com/macros/s/AKfycbwRWOxc83WAWuSJrxs-Hc7PV5OOTakx5i-72HMpnqPyWeGRZoWfKsZlHABaJAFAt3l_/exec");
// // // // // // // // //             let data = await res.json(); //https://script.google.com/macros/s/AKfycbwRWOxc83WAWuSJrxs-Hc7PV5OOTakx5i-72HMpnqPyWeGRZoWfKsZlHABaJAFAt3l_/exec

// // // // // // // // //             // Ensure rooms data contains rooms for all locations and set state
// // // // // // // // //             if (data.rooms) {
// // // // // // // // //                 setRoomsData(data.rooms);  // Save all rooms data
// // // // // // // // //                 setFilteredRooms(data.rooms[location] || []);  // Filter for initial location (Dantewada)
// // // // // // // // //             } else {
// // // // // // // // //                 console.error('Expected data.rooms to contain room information:', data.rooms);
// // // // // // // // //                 setRoomsData({});
// // // // // // // // //                 setFilteredRooms([]);
// // // // // // // // //             }
// // // // // // // // //         } catch (error) {
// // // // // // // // //             console.error('Error fetching rooms:', error);
// // // // // // // // //         }
// // // // // // // // //     };

// // // // // // // // //     // useEffect to fetch the rooms on component mount and when location changes
// // // // // // // // //     useEffect(() => {
// // // // // // // // //         fetchRooms();
// // // // // // // // //     }, []);

// // // // // // // // //     // Update the filtered rooms when the location changes
// // // // // // // // //     useEffect(() => {
// // // // // // // // //         // Log the rooms data and location for debugging
// // // // // // // // //         console.log(`Rooms for ${location}:`, roomsData[location]);

// // // // // // // // //         // Set filtered rooms for the selected location
// // // // // // // // //         setFilteredRooms(roomsData[location] || []);
// // // // // // // // //     }, [location, roomsData]);

// // // // // // // // //     const handleLocationChange = (event) => {
// // // // // // // // //         setLocation(event.target.value);
// // // // // // // // //     };

// // // // // // // // //     // Render rooms based on the total room count for the selected location
// // // // // // // // //     const renderRooms = () => {
// // // // // // // // //         const rooms = [];

// // // // // // // // //         for (let i = 1; i <= totalRooms[location]; i++) {
// // // // // // // // //             // Find the room by its index in the array (or fallback to "Available")
// // // // // // // // //             const room = filteredRooms[i - 1]; // Assuming rooms are indexed based on room numbers

// // // // // // // // //             // If no room is found, default to 'Available'
// // // // // // // // //             const roomStatus = room ? room.status : 'Available';

// // // // // // // // //             rooms.push(
// // // // // // // // //                 <tr key={`${i}-${location}`} className="table-row">
// // // // // // // // //                     <td className="AllRooms-table-data">{i}</td> {/* Room number starting from 1 */}
// // // // // // // // //                     <td className="AllRooms-table-data">{roomStatus}</td>
// // // // // // // // //                 </tr>
// // // // // // // // //             );
// // // // // // // // //         }

// // // // // // // // //         return rooms;
// // // // // // // // //     };

// // // // // // // // //     return (
// // // // // // // // //         <div className="room-list">
// // // // // // // // //             <h2 className='room-head'>Room List For Today !</h2>

// // // // // // // // //             {/* Location Filters */}
// // // // // // // // //             <label htmlFor="location-select">Select Location:</label>
// // // // // // // // //             <select id="location-select" value={location} onChange={handleLocationChange}>
// // // // // // // // //                 <option value="Dantewada">Dantewada</option>
// // // // // // // // //                 <option value="Barsur">Barsur</option>
// // // // // // // // //                 <option value="Geedam">Geedam</option>
// // // // // // // // //             </select>

// // // // // // // // //             {/* Room Table */}
// // // // // // // // //             <table className="room-table">
// // // // // // // // //                 <thead>
// // // // // // // // //                     <tr>
// // // // // // // // //                         <th className="AllRooms-table-header">Room No.</th>
// // // // // // // // //                         <th className="AllRooms-table-header">Status</th>
// // // // // // // // //                     </tr>
// // // // // // // // //                 </thead>
// // // // // // // // //                 <tbody>
// // // // // // // // //                     {renderRooms()}
// // // // // // // // //                 </tbody>
// // // // // // // // //             </table>
// // // // // // // // //         </div>
// // // // // // // // //     );
// // // // // // // // // };

// // // // // // // // // export default AllRooms;



// // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // import './AllRooms.css';

// // // // // // // // const AllRooms = () => {
// // // // // // // //     const [location, setLocation] = useState('Dantewada');
// // // // // // // //     const [roomsData, setRoomsData] = useState({}); // Stores rooms for all locations
// // // // // // // //     const [filteredRooms, setFilteredRooms] = useState([]); // Stores rooms filtered by location

// // // // // // // //     // Total room count for each location
// // // // // // // //     const totalRooms = {
// // // // // // // //         'Dantewada': 6,
// // // // // // // //         'Geedam': 2,
// // // // // // // //         'Barsur': 2,
// // // // // // // //     };

// // // // // // // //     // Fetching the room data from the Google Apps Script
// // // // // // // //     const fetchRooms = async () => {
// // // // // // // //         try {
// // // // // // // //             let res = await fetch("https://script.google.com/macros/s/AKfycbwRWOxc83WAWuSJrxs-Hc7PV5OOTakx5i-72HMpnqPyWeGRZoWfKsZlHABaJAFAt3l_/exec");
// // // // // // // //             let data = await res.json();

// // // // // // // //             // Ensure rooms data contains rooms for all locations and set state
// // // // // // // //             if (data.rooms) {
// // // // // // // //                 setRoomsData(data.rooms);  // Save all rooms data
// // // // // // // //                 setFilteredRooms(data.rooms[location] || []);  // Filter for initial location (Dantewada)
// // // // // // // //             } else {
// // // // // // // //                 console.error('Expected data.rooms to contain room information:', data.rooms);
// // // // // // // //                 setRoomsData({});
// // // // // // // //                 setFilteredRooms([]);
// // // // // // // //             }
// // // // // // // //         } catch (error) {
// // // // // // // //             console.error('Error fetching rooms:', error);
// // // // // // // //         }
// // // // // // // //     };

// // // // // // // //     // useEffect to fetch the rooms on component mount and when location changes
// // // // // // // //     useEffect(() => {
// // // // // // // //         fetchRooms();
// // // // // // // //         // Set an interval to fetch data every 24 hours (86400000 ms)
// // // // // // // //         const intervalId = setInterval(fetchRooms, 86400000);
        
// // // // // // // //         // Cleanup interval on component unmount
// // // // // // // //         return () => clearInterval(intervalId);
// // // // // // // //     }, []);

// // // // // // // //     // Update the filtered rooms when the location changes
// // // // // // // //     useEffect(() => {
// // // // // // // //         console.log(`Rooms for ${location}:`, roomsData[location]);
        
// // // // // // // //         // Filter the rooms to only include those with status "Accepted"
// // // // // // // //         const acceptedRooms = roomsData[location]?.filter(room => room.Status === 'Accepted') || [];
// // // // // // // //         setFilteredRooms(acceptedRooms);
// // // // // // // //     }, [location, roomsData]);

// // // // // // // //     const handleLocationChange = (event) => {
// // // // // // // //         setLocation(event.target.value);
// // // // // // // //     };

// // // // // // // //     // Render rooms based on the total room count for the selected location
// // // // // // // //     const renderRooms = () => {
// // // // // // // //         const rooms = [];

// // // // // // // //         // Loop through the total rooms for the selected location
// // // // // // // //         for (let i = 1; i <= totalRooms[location]; i++) {
// // // // // // // //             // Find the room by its index in the array
// // // // // // // //             const room = filteredRooms[i - 1]; // Assuming rooms are indexed based on room numbers

// // // // // // // //             // If no room is found, default to 'Available'
// // // // // // // //             const roomStatus = room ? room.status : 'Available';

// // // // // // // //             rooms.push(
// // // // // // // //                 <tr key={`${i}-${location}`} className="table-row">
// // // // // // // //                     <td className="AllRooms-table-data">{i}</td> {/* Room number starting from 1 */}
// // // // // // // //                     <td className="AllRooms-table-data">{roomStatus}</td>
// // // // // // // //                 </tr>
// // // // // // // //             );
// // // // // // // //         }

// // // // // // // //         return rooms;
// // // // // // // //     };

// // // // // // // //     return (
// // // // // // // //         <div className="room-list">
// // // // // // // //             <h2 className='room-head'>Room List For Today !</h2>

// // // // // // // //             {/* Location Filters */}
// // // // // // // //             <label htmlFor="location-select">Select Location:</label>
// // // // // // // //             <select id="location-select" value={location} onChange={handleLocationChange}>
// // // // // // // //                 <option value="Dantewada">Dantewada</option>
// // // // // // // //                 <option value="Barsur">Barsur</option>
// // // // // // // //                 <option value="Geedam">Geedam</option>
// // // // // // // //             </select>

// // // // // // // //             {/* Room Table */}
// // // // // // // //             <table className="room-table">
// // // // // // // //                 <thead>
// // // // // // // //                     <tr>
// // // // // // // //                         <th className="AllRooms-table-header">Room No.</th>
// // // // // // // //                         <th className="AllRooms-table-header">Status</th>
// // // // // // // //                     </tr>
// // // // // // // //                 </thead>
// // // // // // // //                 <tbody>
// // // // // // // //                     {renderRooms()}
// // // // // // // //                 </tbody>
// // // // // // // //             </table>
// // // // // // // //         </div>
// // // // // // // //     );
// // // // // // // // };

// // // // // // // // export default AllRooms;



// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import './AllRooms.css';

// // // // // // // const AllRooms = () => {
// // // // // // //     const [location, setLocation] = useState('Dantewada');
// // // // // // //     const [roomsData, setRoomsData] = useState({}); // Stores rooms for all locations
// // // // // // //     const [filteredRooms, setFilteredRooms] = useState([]); // Stores rooms filtered by location

// // // // // // //     // Total room count for each location
// // // // // // //     const totalRooms = {
// // // // // // //         'Dantewada': 6,
// // // // // // //         'Geedam': 2,
// // // // // // //         'Barsur': 2,
// // // // // // //     };

// // // // // // //     // Fetching the room data from the Google Apps Script
// // // // // // //     const fetchRooms = async () => {
// // // // // // //         try {
// // // // // // //             let res = await fetch("https://script.google.com/macros/s/AKfycbwRWOxc83WAWuSJrxs-Hc7PV5OOTakx5i-72HMpnqPyWeGRZoWfKsZlHABaJAFAt3l_/exec");
// // // // // // //             let data = await res.json();

// // // // // // //             console.log("Fetched Rooms Data:", data.rooms); // Log the fetched data

// // // // // // //             // Ensure rooms data contains rooms for all locations and set state
// // // // // // //             if (data.rooms) {
// // // // // // //                 setRoomsData(data.rooms);  // Save all rooms data
// // // // // // //                 setFilteredRooms(data.rooms[location]?.filter(room => room.status === 'Accepted') || []);  // Filter for initial location (Dantewada)
// // // // // // //             } else {
// // // // // // //                 console.error('Expected data.rooms to contain room information:', data.rooms);
// // // // // // //                 setRoomsData({});
// // // // // // //                 setFilteredRooms([]);
// // // // // // //             }
// // // // // // //         } catch (error) {
// // // // // // //             console.error('Error fetching rooms:', error);
// // // // // // //         }
// // // // // // //     };

// // // // // // //     // useEffect to fetch the rooms on component mount and when location changes
// // // // // // //     useEffect(() => {
// // // // // // //         fetchRooms();
// // // // // // //         // Set an interval to fetch data every 24 hours (86400000 ms)
// // // // // // //         const intervalId = setInterval(fetchRooms, 86400000);
        
// // // // // // //         // Cleanup interval on component unmount
// // // // // // //         return () => clearInterval(intervalId);
// // // // // // //     }, []);

// // // // // // //     // Update the filtered rooms when the location changes
// // // // // // //     useEffect(() => {
// // // // // // //         console.log(`Rooms for ${location}:`, roomsData[Location]);
        
// // // // // // //         // Filter the rooms to only include those with status "Accepted"
// // // // // // //         const acceptedRooms = roomsData[Location]?.filter(room => room.Status === 'Accepted') || [];
// // // // // // //         setFilteredRooms(acceptedRooms);
// // // // // // //     }, [location, roomsData]);

// // // // // // //     const handleLocationChange = (event) => {
// // // // // // //         setLocation(event.target.value);
// // // // // // //     };

// // // // // // //     // Render rooms based on the total room count for the selected location
// // // // // // //     const renderRooms = () => {
// // // // // // //         const rooms = [];

// // // // // // //         // Loop through the total rooms for the selected location
// // // // // // //         for (let i = 1; i <= totalRooms[Location]; i++) {
// // // // // // //             // Find the room by its index in the filteredRooms array
// // // // // // //             const room = filteredRooms[i - 1]; // Assuming rooms are indexed based on room numbers

// // // // // // //             // If no room is found, default to 'Available'
// // // // // // //             const roomStatus = room ? room.status : 'Available';

// // // // // // //             rooms.push(
// // // // // // //                 <tr key={`${i}-${location}`} className="table-row">
// // // // // // //                     <td className="AllRooms-table-data">{i}</td> {/* Room number starting from 1 */}
// // // // // // //                     <td className="AllRooms-table-data">{roomStatus}</td>
// // // // // // //                 </tr>
// // // // // // //             );
// // // // // // //         }

// // // // // // //         return rooms.length ? rooms : (
// // // // // // //             <tr>
// // // // // // //                 <td colSpan="2" className="AllRooms-table-data">No rooms available</td>
// // // // // // //             </tr>
// // // // // // //         );
// // // // // // //     };

// // // // // // //     return (
// // // // // // //         <div className="room-list">
// // // // // // //             <h2 className='room-head'>Room List For Today !</h2>

// // // // // // //             {/* Location Filters */}
// // // // // // //             <label htmlFor="location-select">Select Location:</label>
// // // // // // //             <select id="location-select" value={location} onChange={handleLocationChange}>
// // // // // // //                 <option value="Dantewada">Dantewada</option>
// // // // // // //                 <option value="Barsur">Barsur</option>
// // // // // // //                 <option value="Geedam">Geedam</option>
// // // // // // //             </select>

// // // // // // //             {/* Room Table */}
// // // // // // //             <table className="room-table">
// // // // // // //                 <thead>
// // // // // // //                     <tr>
// // // // // // //                         <th className="AllRooms-table-header">Room No.</th>
// // // // // // //                         <th className="AllRooms-table-header">Status</th>
// // // // // // //                     </tr>
// // // // // // //                 </thead>
// // // // // // //                 <tbody>
// // // // // // //                     {renderRooms()}
// // // // // // //                 </tbody>
// // // // // // //             </table>
// // // // // // //         </div>
// // // // // // //     );
// // // // // // // };

// // // // // // // export default AllRooms;





// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import './AllRooms.css';

// // // // // // const AllRooms = () => {
// // // // // //     const [location, setLocation] = useState('Dantewada');
// // // // // //     const [roomsData, setRoomsData] = useState({}); // Stores rooms for all locations
// // // // // //     const [filteredRooms, setFilteredRooms] = useState([]); // Stores rooms filtered by location

// // // // // //     // Total room count for each location
// // // // // //     const totalRooms = {
// // // // // //         'Dantewada': 6,
// // // // // //         'Geedam': 2,
// // // // // //         'Barsur': 2,
// // // // // //     };

// // // // // //     // Fetching the room data from the Google Apps Script
// // // // // //     const fetchRooms = async () => {
// // // // // //         try {
// // // // // //             let res = await fetch("https://script.google.com/macros/s/AKfycbwRWOxc83WAWuSJrxs-Hc7PV5OOTakx5i-72HMpnqPyWeGRZoWfKsZlHABaJAFAt3l_/exec");
// // // // // //             let data = await res.json();

// // // // // //             console.log("Fetched Rooms Data:", data.rooms); // Log the fetched data

// // // // // //             // Ensure rooms data contains rooms for all locations and set state
// // // // // //             if (data.rooms) {
// // // // // //                 setRoomsData(data.rooms);  // Save all rooms data
// // // // // //                 setFilteredRooms(data.rooms[location]?.filter(room => room.Status === 'Accepted') || []);  // Filter for initial location (Dantewada)
// // // // // //             } else {
// // // // // //                 console.error('Expected data.rooms to contain room information:', data.rooms);
// // // // // //                 setRoomsData({});
// // // // // //                 setFilteredRooms([]);
// // // // // //             }
// // // // // //         } catch (error) {
// // // // // //             console.error('Error fetching rooms:', error);
// // // // // //         }
// // // // // //     };

// // // // // //     // useEffect to fetch the rooms on component mount and when location changes
// // // // // //     useEffect(() => {
// // // // // //         fetchRooms();
// // // // // //         // Set an interval to fetch data every 24 hours (86400000 ms)
// // // // // //         const intervalId = setInterval(fetchRooms, 86400000);
        
// // // // // //         // Cleanup interval on component unmount
// // // // // //         return () => clearInterval(intervalId);
// // // // // //     }, []);

// // // // // //     // Update the filtered rooms when the location changes
// // // // // //     useEffect(() => {
// // // // // //         console.log(`Rooms for ${location}:`, roomsData[location]);
        
// // // // // //         // Filter the rooms to only include those with status "Accepted"
// // // // // //         const acceptedRooms = roomsData[location]?.filter(room => room.Status === 'Accepted') || [];
// // // // // //         setFilteredRooms(acceptedRooms);
// // // // // //     }, [location, roomsData]);

// // // // // //     const handleLocationChange = (event) => {
// // // // // //         setLocation(event.target.value);
// // // // // //     };

// // // // // //     // Render rooms based on the total room count for the selected location
// // // // // //     const renderRooms = () => {
// // // // // //         const rooms = [];

// // // // // //         // Loop through the total rooms for the selected location
// // // // // //         for (let i = 1; i <= totalRooms[location]; i++) {
// // // // // //             // Find the room by its index in the filteredRooms array
// // // // // //             const room = filteredRooms[i - 1]; // Assuming rooms are indexed based on room numbers

// // // // // //             // If no room is found, default to an empty row
// // // // // //             if (room) {
// // // // // //                 rooms.push(
// // // // // //                     <tr key={`${room.ID}-${location}`} className="table-row">
// // // // // //                         <td className="AllRooms-table-data">{room.NoOffRoom}</td> {/* Room number */}
// // // // // //                         <td className="AllRooms-table-data">{room.Status}</td> {/* Room Status */}
// // // // // //                         <td className="AllRooms-table-data">{room.FullName}</td> {/* Full Name */}
// // // // // //                         <td className="AllRooms-table-data">{new Date(room.CheckInTime).toLocaleString()}</td> {/* Check In Time */}
// // // // // //                         <td className="AllRooms-table-data">{new Date(room.CheckOutTime).toLocaleString()}</td> {/* Check Out Time */}
// // // // // //                     </tr>
// // // // // //                 );
// // // // // //             }
// // // // // //         }

// // // // // //         return rooms.length ? rooms : (
// // // // // //             <tr>
// // // // // //                 <td colSpan="5" className="AllRooms-table-data">No rooms available</td>
// // // // // //             </tr>
// // // // // //         );
// // // // // //     };

// // // // // //     return (
// // // // // //         <div className="room-list">
// // // // // //             <h2 className='room-head'>Room List For Today !</h2>

// // // // // //             {/* Location Filters */}
// // // // // //             <label htmlFor="location-select">Select Location:</label>
// // // // // //             <select id="location-select" value={location} onChange={handleLocationChange}>
// // // // // //                 <option value="Dantewada">Dantewada</option>
// // // // // //                 <option value="Barsur">Barsur</option>
// // // // // //                 <option value="Geedam">Geedam</option>
// // // // // //             </select>

// // // // // //             {/* Room Table */}
// // // // // //             <table className="room-table">
// // // // // //                 <thead>
// // // // // //                     <tr>
// // // // // //                         <th className="AllRooms-table-header">Room No.</th>
// // // // // //                         <th className="AllRooms-table-header">Status</th>
// // // // // //                         <th className="AllRooms-table-header">Full Name</th>
// // // // // //                         <th className="AllRooms-table-header">Check In Time</th>
// // // // // //                         <th className="AllRooms-table-header">Check Out Time</th>
// // // // // //                     </tr>
// // // // // //                 </thead>
// // // // // //                 <tbody>
// // // // // //                     {renderRooms()}
// // // // // //                 </tbody>
// // // // // //             </table>
// // // // // //         </div>
// // // // // //     );
// // // // // // };

// // // // // // export default AllRooms;



// // // // // import React, { useState, useEffect } from 'react';
// // // // // import './AllRooms.css';

// // // // // const AllRooms = () => {
// // // // //     const [location, setLocation] = useState('Dantewada');
// // // // //     const [roomsData, setRoomsData] = useState({}); // Stores rooms for all locations
// // // // //     const [filteredRooms, setFilteredRooms] = useState([]); // Stores rooms filtered by location

// // // // //     // Total room count for each location
// // // // //     const totalRooms = {
// // // // //         'Dantewada': 6,
// // // // //         'Geedam': 2,
// // // // //         'Barsur': 2,
// // // // //     };

// // // // //     // Fetching the room data from the Google Apps Script
// // // // //     const fetchRooms = async () => {
// // // // //         try {
// // // // //             let res = await fetch("https://script.google.com/macros/s/AKfycbwRWOxc83WAWuSJrxs-Hc7PV5OOTakx5i-72HMpnqPyWeGRZoWfKsZlHABaJAFAt3l_/exec");
// // // // //             let data = await res.json();

// // // // //             // Ensure rooms data contains rooms for all locations and set state
// // // // //             if (data.rooms) {
// // // // //                 setRoomsData(data.rooms);  // Save all rooms data
// // // // //                 setFilteredRooms(data.rooms[location] || []);  // Filter for initial location (Dantewada)
// // // // //             } else {
// // // // //                 console.error('Expected data.rooms to contain room information:', data.rooms);
// // // // //                 setRoomsData({});
// // // // //                 setFilteredRooms([]);
// // // // //             }
// // // // //         } catch (error) {
// // // // //             console.error('Error fetching rooms:', error);
// // // // //         }
// // // // //     };

// // // // //     // useEffect to fetch the rooms on component mount and when location changes
// // // // //     useEffect(() => {
// // // // //         fetchRooms();
// // // // //     }, []);

// // // // //     // Update the filtered rooms when the location changes
// // // // //     useEffect(() => {
// // // // //         // Log the rooms data and location for debugging
// // // // //         console.log(`Rooms for ${location}:`, roomsData[location]);

// // // // //         // Filter rooms to show only those with Status "Accepted" as "Booked"
// // // // //         const updatedFilteredRooms = (roomsData[location] || []).map(room => ({
// // // // //             ...room,
// // // // //             Status: room.Status === 'Accepted' ? 'Booked' : 'Available'
// // // // //         }));
// // // // //         setFilteredRooms(updatedFilteredRooms);
// // // // //     }, [location, roomsData]);

// // // // //     const handleLocationChange = (event) => {
// // // // //         setLocation(event.target.value);
// // // // //     };

// // // // //     // Render rooms based on the total room count for the selected location
// // // // //     const renderRooms = () => {
// // // // //         const rooms = [];

// // // // //         for (let i = 1; i <= totalRooms[location]; i++) {
// // // // //             // Find the room by its index in the filteredRooms array
// // // // //             const room = filteredRooms[i - 1]; // Assuming rooms are indexed based on room numbers

// // // // //             // If no room is found, default to 'Available'
// // // // //             const roomStatus = room ? room.Status : 'Available';

// // // // //             rooms.push(
// // // // //                 <tr key={`${i}-${location}`} className="table-row">
// // // // //                     <td className="AllRooms-table-data">{i}</td> {/* Room number starting from 1 */}
// // // // //                     <td className="AllRooms-table-data">{roomStatus}</td> {/* Room Status */}
// // // // //                 </tr>
// // // // //             );
// // // // //         }

// // // // //         return rooms;
// // // // //     };

// // // // //     return (
// // // // //         <div className="room-list">
// // // // //             <h2 className='room-head'>Room List For Today !</h2>

// // // // //             {/* Location Filters */}
// // // // //             <label htmlFor="location-select">Select Location:</label>
// // // // //             <select id="location-select" value={location} onChange={handleLocationChange}>
// // // // //                 <option value="Dantewada">Dantewada</option>
// // // // //                 <option value="Barsur">Barsur</option>
// // // // //                 <option value="Geedam">Geedam</option>
// // // // //             </select>

// // // // //             {/* Room Table */}
// // // // //             <table className="room-table">
// // // // //                 <thead>
// // // // //                     <tr>
// // // // //                         <th className="AllRooms-table-header">Room No.</th>
// // // // //                         <th className="AllRooms-table-header">Status</th>
// // // // //                     </tr>
// // // // //                 </thead>
// // // // //                 <tbody>
// // // // //                     {renderRooms()}
// // // // //                 </tbody>
// // // // //             </table>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default AllRooms;


// // // // import React, { useState, useEffect } from 'react';
// // // // import './AllRooms.css';

// // // // const AllRooms = () => {
// // // //     const [location, setLocation] = useState('Dantewada');
// // // //     const [roomsData, setRoomsData] = useState({}); // Stores rooms for all locations
// // // //     const [filteredRooms, setFilteredRooms] = useState([]); // Stores rooms filtered by location

// // // //     // Total room count for each location
// // // //     const totalRooms = {
// // // //         'Dantewada': 6,
// // // //         'Geedam': 2,
// // // //         'Barsur': 2,
// // // //     };

// // // //     // Fetching the room data from the Google Apps Script
// // // //     const fetchRooms = async () => {
// // // //         try {
// // // //             let res = await fetch("https://script.google.com/macros/s/AKfycbwRWOxc83WAWuSJrxs-Hc7PV5OOTakx5i-72HMpnqPyWeGRZoWfKsZlHABaJAFAt3l_/exec");
// // // //             let data = await res.json();

// // // //             // Ensure rooms data contains rooms for all locations and set state
// // // //             if (data.rooms) {
// // // //                 setRoomsData(data.rooms);  // Save all rooms data
// // // //                 setFilteredRooms(data.rooms[location] || []);  // Filter for initial location (Dantewada)
// // // //             } else {
// // // //                 console.error('Expected data.rooms to contain room information:', data.rooms);
// // // //                 setRoomsData({});
// // // //                 setFilteredRooms([]);
// // // //             }
// // // //         } catch (error) {
// // // //             console.error('Error fetching rooms:', error);
// // // //         }
// // // //     };

// // // //     // Function to get today's date in ISO format
// // // //     const getTodayDate = () => {
// // // //         const today = new Date();
// // // //         return today.toISOString().split('T')[0]; // Returns YYYY-MM-DD format
// // // //     };

// // // //     // useEffect to fetch the rooms on component mount and when location changes
// // // //     useEffect(() => {
// // // //         fetchRooms();
// // // //     }, []);

// // // //     // Update the filtered rooms when the location changes
// // // //     useEffect(() => {
// // // //         // Get today's date
// // // //         const todayDate = getTodayDate();

// // // //         // Log the rooms data and location for debugging
// // // //         console.log(`Rooms for ${location}:`, roomsData[location]);

// // // //         // Filter rooms to show only those with Status "Accepted" as "Booked"
// // // //         const updatedFilteredRooms = (roomsData[location] || []).filter(room => {
// // // //             const checkInDate = room['Check In Time'].split('T')[0]; // Extract date from ISO format
// // // //             const checkOutDate = room['Check Out Time'].split('T')[0]; // Extract date from ISO format
            
// // // //             // Check if today's date is within the booking period
// // // //             const isBookedToday = todayDate >= checkInDate && todayDate <= checkOutDate;
// // // //             return isBookedToday; // Return true if booked today
// // // //         }).map(room => ({
// // // //             ...room,
// // // //             Status: room.Status === 'Accepted' ? 'Booked' : 'Available'
// // // //         }));

// // // //         setFilteredRooms(updatedFilteredRooms);
// // // //     }, [location, roomsData]);

// // // //     const handleLocationChange = (event) => {
// // // //         setLocation(event.target.value);
// // // //     };

// // // //     // Render rooms based on the total room count for the selected location
// // // //     const renderRooms = () => {
// // // //         const rooms = [];

// // // //         for (let i = 1; i <= totalRooms[location]; i++) {
// // // //             // Find the room by its index in the filteredRooms array
// // // //             const room = filteredRooms[i - 1]; // Assuming rooms are indexed based on room numbers

// // // //             // If no room is found, default to 'Available'
// // // //             const roomStatus = room ? room.Status : 'Available';

// // // //             rooms.push(
// // // //                 <tr key={`${i}-${location}`} className="table-row">
// // // //                     <td className="AllRooms-table-data">{i}</td> {/* Room number starting from 1 */}
// // // //                     <td className="AllRooms-table-data">{roomStatus}</td> {/* Room Status */}
// // // //                 </tr>
// // // //             );
// // // //         }

// // // //         return rooms;
// // // //     };

// // // //     return (
// // // //         <div className="room-list">
// // // //             <h2 className='room-head'>Room List For Today !</h2>

// // // //             {/* Location Filters */}
// // // //             <label htmlFor="location-select">Select Location:</label>
// // // //             <select id="location-select" value={location} onChange={handleLocationChange}>
// // // //                 <option value="Dantewada">Dantewada</option>
// // // //                 <option value="Barsur">Barsur</option>
// // // //                 <option value="Geedam">Geedam</option>
// // // //             </select>

// // // //             {/* Room Table */}
// // // //             <table className="room-table">
// // // //                 <thead>
// // // //                     <tr>
// // // //                         <th className="AllRooms-table-header">Room No.</th>
// // // //                         <th className="AllRooms-table-header">Status</th>
// // // //                     </tr>
// // // //                 </thead>
// // // //                 <tbody>
// // // //                     {renderRooms()}
// // // //                 </tbody>
// // // //             </table>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default AllRooms;



// // // ////...best

// // // import React, { useState, useEffect } from 'react';
// // // import './AllRooms.css';

// // // const AllRooms = () => {
// // //     const [location, setLocation] = useState('Dantewada');
// // //     const [roomsData, setRoomsData] = useState([]); // Stores all rooms data
// // //     const [filteredRooms, setFilteredRooms] = useState([]); // Stores rooms filtered by location and date

// // //     // Total room count for each location
// // //     const totalRooms = {
// // //         'Dantewada': 6,
// // //         'Geedam': 2,
// // //         'Barsur': 2,
// // //     };

// // //     // Fetch room data from Google Apps Script
// // //     const fetchRooms = async () => {
// // //         try {
// // //             const res = await fetch("https://script.google.com/macros/s/AKfycbwRWOxc83WAWuSJrxs-Hc7PV5OOTakx5i-72HMpnqPyWeGRZoWfKsZlHABaJAFAt3l_/exec");
// // //             const data = await res.json();

// // //             if (data.rooms) {
// // //                 setRoomsData(data.rooms);  // Save all rooms data
// // //             } else {
// // //                 console.error('No room data available:', data);
// // //             }
// // //         } catch (error) {
// // //             console.error('Error fetching rooms:', error);
// // //         }
// // //     };

// // //     // Get today's date in YYYY-MM-DD format
// // //     const getTodayDate = () => {
// // //         const today = new Date();
// // //         return today.toISOString().split('T')[0];
// // //     };

// // //     // Update filtered rooms based on location and today's date
// // //     const updateFilteredRooms = () => {
// // //         const todayDate = getTodayDate();
// // //         const availableRooms = roomsData.filter(room => {
// // //             const checkInDate = room['Check In Time'].split('T')[0];
// // //             const checkOutDate = room['Check Out Time'].split('T')[0];
// // //             // return todayDate >= checkInDate && todayDate <= checkOutDate && room.Status === 'Accepted';
// // //             return todayDate <= checkInDate && todayDate <= checkOutDate && room.Status === 'Accepted';
// // //         }).map(room => ({
// // //             ...room,
// // //             Status: 'Booked'
// // //         }));

// // //         // Fill in available rooms for those that are not booked today
// // //         const bookedRoomNumbers = availableRooms.map((_, index) => index + 1);
// // //         const allRoomNumbers = Array.from({ length: totalRooms[location] }, (_, index) => index + 1);
// // //         const allRooms = allRoomNumbers.map(number => ({
// // //             RoomNo: number,
// // //             Status: bookedRoomNumbers.includes(number) ? 'Booked' : 'Available'
// // //         }));

// // //         setFilteredRooms(allRooms);
// // //     };
 
// // //     // useEffect to fetch room data and update filtered rooms on location change
// // //     useEffect(() => {
// // //         fetchRooms();
// // //     }, []);

// // //     useEffect(() => {
// // //         updateFilteredRooms();
// // //     }, [location, roomsData]);

// // //     // Handle location change from dropdown
// // //     const handleLocationChange = (event) => {
// // //         setLocation(event.target.value);
// // //     };

// // //     // Render the room table rows
// // //     const renderRooms = () => {
// // //         return filteredRooms.map(room => (
// // //             <tr key={room.RoomNo} className="table-row">
// // //                 <td className="AllRooms-table-data">{room.RoomNo}</td>
// // //                 <td className="AllRooms-table-data">{room.Status}</td>
// // //             </tr>
// // //         ));
// // //     };

// // //     return (
// // //         <div className="room-list">
// // //             <h2 className='room-head'>Room List For Today!</h2>

// // //             {/* Location Filters */}
// // //             <label htmlFor="location-select">Select Location:</label>
// // //             <select id="location-select" value={location} onChange={handleLocationChange}>
// // //                 <option value="Dantewada">Dantewada</option>
// // //                 <option value="Barsur">Barsur</option>
// // //                 <option value="Geedam">Geedam</option>
// // //             </select>

// // //             {/* Room Table */}
// // //             <table className="room-table">
// // //                 <thead>
// // //                     <tr>
// // //                         <th className="AllRooms-table-header">Room No.</th>
// // //                         <th className="AllRooms-table-header">Status</th>
// // //                     </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                     {renderRooms()}
// // //                 </tbody>
// // //             </table>
// // //         </div>
// // //     );
// // // };

// // // export default AllRooms;


// ////....................
// import React, { useState, useEffect } from 'react';
// import './AllRooms.css';

// const AllRooms = () => {
//     const [location, setLocation] = useState('Dantewada');
//     const [roomsData, setRoomsData] = useState([]);
//     const [filteredRooms, setFilteredRooms] = useState([]);
//     const [selectedDate, setSelectedDate] = useState(() => new Date().toISOString().split('T')[0]); // Set today's date as default

//     const totalRooms = {
//         'Dantewada': 6,
//         'Geedam': 2,
//         'Barsur': 2,
//     };

//     const fetchRooms = async () => {
//         try {
//             const res = await fetch("https://script.google.com/macros/s/AKfycbwRWOxc83WAWuSJrxs-Hc7PV5OOTakx5i-72HMpnqPyWeGRZoWfKsZlHABaJAFAt3l_/exec");
//             const data = await res.json();
//             if (data.rooms) {
//                 setRoomsData(data.rooms);
//             } else {
//                 console.error('No room data available:', data);
//             }
//         } catch (error) {
//             console.error('Error fetching rooms:', error);
//         }
//     };

//     const updateFilteredRooms = () => {
//         const availableRooms = roomsData.filter(room => {
//             const checkInDate = room['Check In Time'].split('T')[0];
//             const checkOutDate = room['Check Out Time'].split('T')[0];
//             return (
//                 selectedDate >= checkInDate &&
//                 selectedDate <= checkOutDate &&
//                 room.Status === 'Accepted'
//             );
//         }).map(room => ({
//             ...room,
//             Status: 'Booked'
//         }));

//         const bookedRoomNumbers = availableRooms.map((_, index) => index + 1);
//         const allRoomNumbers = Array.from({ length: totalRooms[location] }, (_, index) => index + 1);
//         const allRooms = allRoomNumbers.map(number => ({
//             RoomNo: number,
//             Status: bookedRoomNumbers.includes(number) ? 'Booked' : 'Available'
//         }));

//         setFilteredRooms(allRooms);
//     };

//     useEffect(() => {
//         fetchRooms();
//     }, []);

//     useEffect(() => {
//         updateFilteredRooms();
//     }, [location, roomsData, selectedDate]);

//     const handleLocationChange = (event) => {
//         setLocation(event.target.value);
//     };

//     const handleDateChange = (event) => {
//         setSelectedDate(event.target.value);
//     };

//     const renderRooms = () => {
//         return filteredRooms.map(room => (
//             <tr key={room.RoomNo} className="table-row">
//                 <td className="AllRooms-table-data">{room.RoomNo}</td>
//                 <td className="AllRooms-table-data">{room.Status}</td>
//             </tr>
//         ));
//     };

//     return (
//         <div className="room-list">
//             <h2 className='room-head'>Room List For Selected Date</h2>

//             <label htmlFor="location-select">Select Location:</label>
//             <select id="location-select" value={location} onChange={handleLocationChange}>
//                 <option value="Dantewada">Dantewada</option>
//                 <option value="Barsur">Barsur</option>
//                 <option value="Geedam">Geedam</option>
//             </select>

//             <label htmlFor="date-select">Select Date:</label>
//             <input
//                 type="date"
//                 id="date-select"
//                 value={selectedDate}
//                 onChange={handleDateChange}
//             />

//             <table className="room-table">
//                 <thead>
//                     <tr>
//                         <th className="AllRooms-table-header">Room No.</th>
//                         <th className="AllRooms-table-header">Status</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {renderRooms()}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default AllRooms;





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
      console.log(bookings);
      
      // Initialize rooms
      const roomStatuses = Array.from({ length: roomsAtLocation }, (_, i) => ({
        roomNumber: i + 1,
        status: 'Available',
        available: true,
      }));
  console.log(roomStatuses);
  
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
          console.log(availableRooms);
          
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
          {/* <button onClick={handleBook} className="booking-book-now">Book Now</button> */}
          {/* <button onClick={handleStatus} className="booking-book-now">Booking Status</button> */}
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
