// // // // import React, { useState } from 'react';
// // // // import './Status.css'; // CSS for styling

// // // // const Status = () => {
// // // //   const [searchID, setSearchID] = useState(''); // State to store the input value

// // // //   // Function to handle search button click
// // // //   const handleSearch = () => {
// // // //     if (searchID.trim() !== '') {
// // // //       // Add your search logic here
// // // //       console.log(`Searching for ID or Room Number: ${searchID}`);
// // // //       // You can perform API calls or filter your data based on searchID
// // // //     } else {
// // // //       alert('Please enter a valid ID or Room Number.');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="status-page-container">
// // // //       <div className="status-box">
// // // //         <h2>Check Status</h2>
// // // //         <div className="search-section">
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Search by ID"
// // // //             value={searchID}
// // // //             onChange={(e) => setSearchID(e.target.value)}
// // // //           />
// // // //           <button onClick={handleSearch}>Search</button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Status;




// // // import React, { useEffect, useState } from 'react';
// // // import "../components/Allbooking.css";

// // // const Customers = () => {
// // //     const [customers, setCustomers] = useState([]);
// // //     const [loading, setLoading] = useState(true);
// // //     const [error, setError] = useState('');
// // //     const [filteredCustomers, setFilteredCustomers] = useState([]);
// // //     const [searchQuery, setSearchQuery] = useState('');
// // //     const [searchDate, setSearchDate] = useState('');

// // //     const API_BASE_URL = 'https://script.google.com/macros/s/AKfycbyk-6RM66Dc9rgUMrxVzYxQHsGCwNWamTTFsmWAVol0kdpS4JmwLSOQIT1vZ7vxnIth/exec';

// // //     const fetchCustomers = async () => {
// // //         try {
// // //             const response = await fetch(`${API_BASE_URL}?action=fetch`);
// // //             if (!response.ok) throw new Error('Network response was not ok');
            
// // //             const data = await response.json();
// // //             if (data.rooms) {
// // //                 const formattedData = data.rooms;
// // //                 setCustomers(formattedData);
// // //                 setFilteredCustomers(formattedData); // Initial load shows all customers
// // //             } else {
// // //                 throw new Error("Data format is incorrect: 'rooms' property not found");
// // //             }
// // //         } catch (error) {
// // //             setError('Error fetching data: ' + error.message);
// // //         } finally {
// // //             setLoading(false);
// // //         }
// // //     };

// // //     useEffect(() => {
// // //         fetchCustomers();
// // //     }, []);

// // //     const filterCustomers = (data, query, date) => {
// // //         let filtered = data;
    
// // //         if (query) {
// // //             const lowerCaseQuery = query.toLowerCase();
// // //             filtered = filtered.filter(customer => 
// // //                 // (customer["Full Name"] && customer["Full Name"].toLowerCase().includes(lowerCaseQuery)) ||
// // //                 // (customer["Mo No"] && customer["Mo No"].toString().includes(query)) || // Convert Mo No to string
// // //                 (customer["ID"] && customer["ID"].toString().includes(query)) || // Convert Mo No to string
// // //                 (customer.Location && customer.Location.toLowerCase().includes(lowerCaseQuery))
// // //             );
// // //         }
        
// // //         if (date) {
// // //             filtered = filtered.filter(customer => {
// // //                 const checkInDate = new Date(customer["Check In Time"]).toLocaleDateString();
// // //                 return checkInDate === new Date(date).toLocaleDateString();
// // //             });
// // //         }
    
// // //         setFilteredCustomers(filtered);
// // //     };
    

// // //     const handleSearchQueryChange = (query) => {
// // //         setSearchQuery(query);
// // //         filterCustomers(customers, query, searchDate);
// // //     };

// // //     // const handleSearchDateChange = (date) => {
// // //     //     setSearchDate(date);
// // //     //     filterCustomers(customers, searchQuery, date);
// // //     // };

// // //     if (loading) return <div>Loading...</div>;
// // //     if (error) return <div>{error}</div>;

// // //     return (
// // //         <div className='booking-list'>
// // //             <h1 className='all-head'>Customer's Bookings (Status)</h1>

// // //             <div className="filter-section">
// // //                 {/* <label htmlFor="searchQuery">Search by Name, Mobile, User ID or Location:</label> */}
// // //                 <label htmlFor="searchQuery">Search by User ID:</label>
// // //                 <input
// // //                     type="text"
// // //                     id="searchQuery"
// // //                     value={searchQuery}
// // //                     onChange={(e) => handleSearchQueryChange(e.target.value)}
// // //                     // placeholder="Enter Name, Mobile, User ID, or Location"
// // //                     placeholder="Enter User ID"
// // //                 />

// // //                 {/* <label htmlFor="searchDate">Search by Date:</label>
// // //                 <input
// // //                     type="date"
// // //                     id="searchDate"
// // //                     value={searchDate}
// // //                     onChange={(e) => handleSearchDateChange(e.target.value)}
// // //                 /> */}
// // //             </div>

// // //             <table className='booking-table'>
// // //                 <thead className='Allbooking-table-header'>
// // //                     <tr>
// // //                         <th>User ID</th>
// // //                         <th>Check-In Date</th>
// // //                         <th>Check-Out Date</th>
// // //                         <th>Total Days</th>
// // //                         <th>Full Name</th>
// // //                         <th>Mobile No</th>
// // //                         <th>Location</th>
// // //                         <th>Customer Type</th>
// // //                         <th>Aadhar/Pan</th>
// // //                         <th>No of Rooms</th>
// // //                         <th>Total Guests</th>
// // //                         <th>Status</th>
// // //                     </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                     {filteredCustomers.map((customer) => (
// // //                         <tr key={customer["ID"]}>
// // //                             <td>{customer["ID"]}</td>
// // //                             <td>{new Date(customer["Check In Time"]).toLocaleDateString()}</td>
// // //                             <td>{new Date(customer['Check Out Time']).toLocaleDateString()}</td>
// // //                             <td>{customer["Total Days"]}</td>
// // //                             <td>{customer["Full Name"]}</td>
// // //                             <td>{customer["Mo No"]}</td>
// // //                             <td>{customer["Location"]}</td>
// // //                             <td>{customer["Customer Type"]}</td>
// // //                             <td>{customer["Aadhar-Pan/link"]}</td>
// // //                             <td>{customer["No Off Room"]}</td>
// // //                             <td>{customer["Total Guest"]}</td>
// // //                             <td>
// // //                                 {customer.Status === 'Accepted' ? (
// // //                                     <span style={{ color: 'green' }}>Booked</span>
// // //                                 ) : customer.Status === 'Rejected' ? (
// // //                                     <span>❌</span>
// // //                                 ) : (
// // //                                     <span>Pending</span>
// // //                                 )}
// // //                             </td>
// // //                         </tr>
// // //                     ))}
// // //                 </tbody>
// // //             </table>
// // //         </div>
// // //     );
// // // };

// // // export default Customers;





// // import React, { useEffect, useState } from 'react';
// // import "../components/Allbooking.css";

// // const Customers = () => {
// //     const [customers, setCustomers] = useState([]); // All customer data
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState('');
// //     const [filteredCustomers, setFilteredCustomers] = useState([]); // Customers to display based on search
// //     const [searchQuery, setSearchQuery] = useState('');

// //     const API_BASE_URL = 'https://script.google.com/macros/s/AKfycbyk-6RM66Dc9rgUMrxVzYxQHsGCwNWamTTFsmWAVol0kdpS4JmwLSOQIT1vZ7vxnIth/exec';

// //     const fetchCustomers = async () => {
// //         try {
// //             const response = await fetch(`${API_BASE_URL}?action=fetch`);
// //             if (!response.ok) throw new Error('Network response was not ok');

// //             const data = await response.json();
// //             if (data.rooms) {
// //                 const formattedData = data.rooms;
// //                 setCustomers(formattedData);
// //                 // Set filteredCustomers to an empty array initially
// //                 setFilteredCustomers([]); 
// //             } else {
// //                 throw new Error("Data format is incorrect: 'rooms' property not found");
// //             }
// //         } catch (error) {
// //             setError('Error fetching data: ' + error.message);
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     useEffect(() => {
// //         fetchCustomers();
// //     }, []);

// //     const filterCustomers = (data, query) => {
// //         if (query) {
// //             const lowerCaseQuery = query.toLowerCase();
// //             const filtered = data.filter(customer => 
// //                 (customer["ID"] && customer["ID"].toString().includes(query)) || 
// //                 (customer.Location && customer.Location.toLowerCase().includes(lowerCaseQuery))
// //             );
// //             setFilteredCustomers(filtered); // Update filtered customers based on query
// //         } else {
// //             setFilteredCustomers([]); // Reset filtered customers if query is empty
// //         }
// //     };

// //     const handleSearchQueryChange = (query) => {
// //         setSearchQuery(query);
// //         filterCustomers(customers, query);
// //     };

// //     if (loading) return <div>Loading...</div>;
// //     if (error) return <div>{error}</div>;

// //     return (
// //         <div className='booking-list'>
// //             <h1 className='all-head'>Customers Bookings (Status)</h1>

// //             <div className="filter-section">
// //                 <label htmlFor="searchQuery">Search by User ID:</label>
// //                 <input
// //                     type="text"
// //                     id="searchQuery"
// //                     value={searchQuery}
// //                     onChange={(e) => handleSearchQueryChange(e.target.value)}
// //                     placeholder="Enter User ID"
// //                 />
// //             </div>

// //             <table className='booking-table'>
// //                 <thead className='Allbooking-table-header'>
// //                     <tr>
// //                         <th>User ID</th>
// //                         <th>Check-In Date</th>
// //                         <th>Check-Out Date</th>
// //                         <th>Total Days</th>
// //                         <th>Full Name</th>
// //                         <th>Mobile No</th>
// //                         <th>Location</th>
// //                         <th>Customer Type</th>
// //                         <th>Aadhar/Pan</th>
// //                         <th>No of Rooms</th>
// //                         <th>Total Guests</th>
// //                         <th>Status</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {filteredCustomers.length > 0 ? (
// //                         filteredCustomers.map((customer) => (
// //                             <tr key={customer["ID"]}>
// //                                 <td>{customer["ID"]}</td>
// //                                 <td>{new Date(customer["Check In Time"]).toLocaleDateString()}</td>
// //                                 <td>{new Date(customer['Check Out Time']).toLocaleDateString()}</td>
// //                                 <td>{customer["Total Days"]}</td>
// //                                 <td>{customer["Full Name"]}</td>
// //                                 <td>{customer["Mo No"]}</td>
// //                                 <td>{customer["Location"]}</td>
// //                                 <td>{customer["Customer Type"]}</td>
// //                                 <td>{customer["Aadhar-Pan/link"]}</td>
// //                                 <td>{customer["No Off Room"]}</td>
// //                                 <td>{customer["Total Guest"]}</td>
// //                                 <td>
// //                                     {customer.Status === 'Accepted' ? (
// //                                         <span style={{ color: 'green' }}>Booked</span>
// //                                     ) : customer.Status === 'Rejected' ? (
// //                                         <span>❌</span>
// //                                     ) : (
// //                                         <span>Pending</span>
// //                                     )}
// //                                 </td>
// //                             </tr>
// //                         ))
// //                     ) : (
// //                         <tr>
// //                             <td colSpan="12">No results found.</td>
// //                         </tr>
// //                     )}
// //                 </tbody>
// //             </table>
// //         </div>
// //     );
// // };

// // export default Customers;


// import React, { useEffect, useState } from 'react';
// import "../components/Allbooking.css";

// const Customers = () => {
//     const [customers, setCustomers] = useState([]); // All customer data
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const [filteredCustomers, setFilteredCustomers] = useState([]); // Customers to display based on search
//     const [searchQuery, setSearchQuery] = useState('');

//     const API_BASE_URL = 'https://script.google.com/macros/s/AKfycbyk-6RM66Dc9rgUMrxVzYxQHsGCwNWamTTFsmWAVol0kdpS4JmwLSOQIT1vZ7vxnIth/exec';

//     const fetchCustomers = async () => {
//         try {
//             const response = await fetch(`${API_BASE_URL}?action=fetch`);
//             if (!response.ok) throw new Error('Network response was not ok');

//             const data = await response.json();
//             if (data.rooms) {
//                 const formattedData = data.rooms;
//                 setCustomers(formattedData);
//                 // Set filteredCustomers to an empty array initially
//                 setFilteredCustomers([]); 
//             } else {
//                 throw new Error("Data format is incorrect: 'rooms' property not found");
//             }
//         } catch (error) {
//             setError('Error fetching data: ' + error.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchCustomers();
//     }, []);

//     const filterCustomers = (data, query) => {
//         if (query) {
//             const lowerCaseQuery = query.toLowerCase();
//             const filtered = data.filter(customer => 
//                 (customer["ID"] && customer["ID"].toString().includes(query)) || 
//                 (customer.Location && customer.Location.toLowerCase().includes(lowerCaseQuery))
//             );
//             setFilteredCustomers(filtered); // Update filtered customers based on query
//         } else {
//             setFilteredCustomers([]); // Reset filtered customers if query is empty
//         }
//     };

//     const handleSearchQueryChange = (query) => {
//         setSearchQuery(query);
//         filterCustomers(customers, query);
//     };

//     // const handleSearchClick = () => {
//     //     filterCustomers(customers, searchQuery); // Trigger search when button is clicked
//     // };

//     const handleSearchClick = () => {
//         if (searchQuery) { // Only trigger search if searchQuery is not empty
//             filterCustomers(customers, searchQuery); // Trigger search when button is clicked
//         } else {
//             alert("not found")
//             setFilteredCustomers([]); // Clear filtered customers if the search query is empty
//         }
//     };
    

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>{error}</div>;

//     return (
//         <div className='booking-list'>
//             <h1 className='all-head'>Customers Bookings (Status)</h1>

//             <div className="filter-section">
//                 <label htmlFor="searchQuery">Search by User ID:</label>
//                 <input
//                     type="text"
//                     id="searchQuery"
//                     value={searchQuery}
//                     onChange={(e) => handleSearchQueryChange(e.target.value)}
//                     placeholder="Enter User ID"
//                 />
//                 <button onClick={handleSearchClick}>Search</button>
//             </div>

//             <table className='booking-table'>
//                 <thead className='Allbooking-table-header'>
//                     <tr>
//                         <th>User ID</th>
//                         <th>Check-In Date</th>
//                         <th>Check-Out Date</th>
//                         <th>Total Days</th>
//                         <th>Full Name</th>
//                         <th>Mobile No</th>
//                         <th>Location</th>
//                         <th>Customer Type</th>
//                         <th>Aadhar/Pan</th>
//                         <th>No of Rooms</th>
//                         <th>Total Guests</th>
//                         <th>Status</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {filteredCustomers.length > 0 ? (
//                         filteredCustomers.map((customer) => (
//                             <tr key={customer["ID"]}>
//                                 <td>{customer["ID"]}</td>
//                                 <td>{new Date(customer["Check In Time"]).toLocaleDateString()}</td>
//                                 <td>{new Date(customer['Check Out Time']).toLocaleDateString()}</td>
//                                 <td>{customer["Total Days"]}</td>
//                                 <td>{customer["Full Name"]}</td>
//                                 <td>{customer["Mo No"]}</td>
//                                 <td>{customer["Location"]}</td>
//                                 <td>{customer["Customer Type"]}</td>
//                                 <td>{customer["Aadhar-Pan/link"]}</td>
//                                 <td>{customer["No Off Room"]}</td>
//                                 <td>{customer["Total Guest"]}</td>
//                                 <td>
//                                     {customer.Status === 'Accepted' ? (
//                                         <span style={{ color: 'green' }}>Booked</span>
//                                     ) : customer.Status === 'Rejected' ? (
//                                         <span>❌</span>
//                                     ) : (
//                                         <span>Pending</span>
//                                     )}
//                                 </td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="12">No results found.</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Customers;



import React, { useEffect, useState } from 'react';
import "../components/Allbooking.css";

const Customers = () => {
    const [customers, setCustomers] = useState([]); // All customer data
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [filteredCustomers, setFilteredCustomers] = useState([]); // Customers to display based on search
    const [searchQuery, setSearchQuery] = useState('');

    const API_BASE_URL = 'https://script.google.com/macros/s/AKfycbyk-6RM66Dc9rgUMrxVzYxQHsGCwNWamTTFsmWAVol0kdpS4JmwLSOQIT1vZ7vxnIth/exec';

    const fetchCustomers = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}?action=fetch`);
            if (!response.ok) throw new Error('Network response was not ok');

            const data = await response.json();
            if (data.rooms) {
                const formattedData = data.rooms;
                setCustomers(formattedData);
                // Set filteredCustomers to an empty array initially
                setFilteredCustomers([]); 
            } else {
                throw new Error("Data format is incorrect: 'rooms' property not found");
            }
        } catch (error) {
            setError('Error fetching data: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCustomers();
        
    }, []);

    const filterCustomers = (data, query) => {
        if (query) {
            const lowerCaseQuery = query.toLowerCase();
            const filtered = data.filter(customer => 
                (customer["ID"] && customer["ID"].toString().includes(query)) || 
                (customer.Location && customer.Location.toLowerCase().includes(lowerCaseQuery))
            );
            setFilteredCustomers(filtered); // Update filtered customers based on query
        } else {
            setFilteredCustomers([]); // Reset filtered customers if query is empty
        }
    };

    const handleSearchQueryChange = (query) => {
        setSearchQuery(query);
        // filterCustomers(customers, query);
    };
    const handleSearchClick = () => {
        if (searchQuery.trim() ) { // Only trigger search if searchQuery is not empty
            filterCustomers(customers, searchQuery); // Trigger search when button is clicked
        } else {
            setFilteredCustomers([]); // Clear filtered customers if the search query is empty
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className='booking-list'>
            <h1 className='all-head'>Customers Bookings (Status)</h1>

            <div className="filter-section">
                <label htmlFor="searchQuery">Search by User ID:</label>
                <input
                    type="text"
                    id="searchQuery"
                    value={searchQuery}
                    onChange={(e) => handleSearchQueryChange(e.target.value)}
                    placeholder="Enter User ID"
                />
                <button onClick={handleSearchClick}>Search</button>
            </div>

            <table className='booking-table'>
                <thead className='Allbooking-table-header'>
                    <tr>
                        <th>User ID</th>
                        <th>Check-In Date</th>
                        <th>Check-Out Date</th>
                        <th>Total Days</th>
                        <th>Full Name</th>
                        <th>Mobile No</th>
                        <th>Location</th>
                        <th>Customer Type</th>
                        <th>No of Rooms</th>
                        <th>Total Guests</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCustomers.length > 0 ? (
                        filteredCustomers.map((customer) => (
                            <tr key={customer["ID"]}>
                                <td>{customer["ID"]}</td>
                                <td>{new Date(customer["Check In Time"]).toLocaleDateString()}</td>
                                <td>{new Date(customer['Check Out Time']).toLocaleDateString()}</td>
                                <td>{customer["Total Days"]}</td>
                                <td>{customer["Full Name"]}</td>
                                <td>{customer["Mo No"]}</td>
                                <td>{customer["Location"]}</td>
                                <td>{customer["Customer Type"]}</td>
                                <td>{customer["No Off Room"]}</td>
                                <td>{customer["Total Guest"]}</td>
                                <td>
                                    {customer.Status === 'Accepted' ? (
                                        <span style={{ color: 'green' }}>Booked</span>
                                    ) : customer.Status === 'Rejected' ? (
                                        <span>❌</span>
                                    ) : (
                                        <span>Pending</span>
                                    )}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="12">No results found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Customers;
