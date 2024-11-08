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


// // import React, { useState, useEffect } from 'react';
// // import './AllRooms.css';

// // const AllRooms = () => {
// //     const [location, setLocation] = useState('Dantewada');
// //     const [roomsData, setRoomsData] = useState([]);
// //     const [filteredRooms, setFilteredRooms] = useState([]);
// //     const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

// //     const totalRooms = {
// //         'Dantewada': 6,
// //         'Geedam': 2,
// //         'Barsur': 2,
// //     };

// //     const fetchRooms = async () => {
// //         try {
// //             const res = await fetch("https://script.google.com/macros/s/AKfycbwRWOxc83WAWuSJrxs-Hc7PV5OOTakx5i-72HMpnqPyWeGRZoWfKsZlHABaJAFAt3l_/exec");
// //             const data = await res.json();
// //             if (data.rooms) {
// //                 setRoomsData(data.rooms);
// //             } else {
// //                 console.error('No room data available');
// //             }
// //         } catch (error) {
// //             console.error('Error fetching rooms:', error);
// //         }
// //     };

// //     const formatDateToDDMMYYYY = (dateStr) => {
// //         const [year, month, day] = dateStr.split('-');
// //         return `${day}/${month}/${year}`;
// //     };

// //     const updateFilteredRooms = () => {
// //         const formattedDate = selectedDate;

// //         // Filter rooms with status "Accepted" for the selected location and date
// //         const bookedRooms = roomsData.filter(room => {
// //             const checkInDate = room['Check In Time'].split('T')[0];
// //             const checkOutDate = room['Check Out Time'].split('T')[0];
// //             return (
// //                 formattedDate >= checkInDate &&
// //                 formattedDate <= checkOutDate &&
// //                 room.Status === 'Accepted' &&
// //                 room.Location === location
// //             );
// //         }).map(room => room.RoomNo); // Extract room numbers for booked rooms

// //         const allRoomNumbers = Array.from({ length: totalRooms[location] }, (_, index) => index + 1);
// //         const allRooms = allRoomNumbers.map(number => ({
// //             RoomNo: number,
// //             Status: bookedRooms.includes(number) ? 'Booked' : 'Available'
// //         }));

// //         setFilteredRooms(allRooms);
// //     };

// //     useEffect(() => {
// //         fetchRooms();
// //     }, []);

// //     useEffect(() => {
// //         updateFilteredRooms();
// //     }, [location, roomsData, selectedDate]);

// //     const handleLocationChange = (event) => {
// //         setLocation(event.target.value);
// //     };

// //     const handleDateChange = (event) => {
// //         setSelectedDate(event.target.value);
// //     };

// //     const renderRooms = () => {
// //         return filteredRooms.map(room => (
// //             <tr key={room.RoomNo} className="table-row">
// //                 <td className="AllRooms-table-data">{room.RoomNo}</td>
// //                 <td className="AllRooms-table-data">{room.Status}</td>
// //             </tr>
// //         ));
// //     };

// //     return (
// //         <div className="room-list">
// //             <h2 className="room-head">Room List for {formatDateToDDMMYYYY(selectedDate)}</h2>

// //             <label htmlFor="location-select">Select Location:</label>
// //             <select id="location-select" value={location} onChange={handleLocationChange}>
// //                 <option value="Dantewada">Dantewada</option>
// //                 <option value="Barsur">Barsur</option>
// //                 <option value="Geedam">Geedam</option>
// //             </select>

// //             <label htmlFor="date-select">Select Date:</label>
// //             <input
// //                 type="date"
// //                 id="date-select"
// //                 value={selectedDate}
// //                 onChange={handleDateChange}
// //             />

// //             <table className="room-table">
// //                 <thead>
// //                     <tr>
// //                         <th className="AllRooms-table-header">Room No.</th>
// //                         <th className="AllRooms-table-header">Status</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {renderRooms()}
// //                 </tbody>
// //             </table>
// //         </div>
// //     );
// // };

// // export default AllRooms;
