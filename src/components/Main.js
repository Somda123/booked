import React,{useEffect} from 'react';
import Header from './Header';
import ImageSlider from './ImageSlider';
import BookingForm from './BookingForm';
import '../App.css';
import RoomAvailabilityCalendar from './RoomAvailabilityCalendar';
import TermsAndConditions from './TermsAndConditions';
import Footer from './Footer.js'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Typed from 'typed.js';
const Main = () => {
  useEffect(() => {
    const typed = new Typed('#typed-element', {
      strings: [
        'Your Comfort Is Our Priority!',
        'आपकी सुविधा हमारी प्राथमिकता है!',
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="app">
      <Header />
      <ImageSlider />

      {/* Centered Section for Comment and Availability Heading */}
      <div className="centered-section">
        {/* Element for Typed.js text */}
        <span id="typed-element" className="comfort-comment"></span>
        
        <h2 className="availability-heading">
          Check Availability | उपलब्धता जांचें
        </h2>
      </div>

      <BookingForm />
      <RoomAvailabilityCalendar />
      <TermsAndConditions />
      <Footer />
    </div>
  );
};

export default Main;



























// import React, { useEffect } from 'react';
// import Header from './Header';
// import ImageSlider from './ImageSlider';
// import BookingForm from './BookingForm';
// import RoomAvailabilityCalendar from './RoomAvailabilityCalendar';
// import TermsAndConditions from './TermsAndConditions';
// import Footer from './Footer';
// import '../App.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import Typed from 'typed.js';

// const Main = () => {
//   // Typed.js initialization inside useEffect
//   useEffect(() => {
//     const typed = new Typed('#typed-element', {
//       strings: [
//         'Your Comfort Is Our Priority!',
//         'आपकी सुविधा हमारी प्राथमिकता है!',
//         'Experience Luxurious Stays.',
//         'आरामदायक और शानदार रहने का अनुभव करें।',
//       ],
//       typeSpeed: 50,
//       backSpeed: 25,
//       loop: true,
//       smartBackspace: true,
//     });

//     // Cleanup on component unmount
//     return () => {
//       typed.destroy();
//     };
//   }, []);

//   return (
//     <div className="app">
//       <Header />
//       <ImageSlider />

//       {/* Centered Section for Typed.js and Availability Heading */}
//       <div className="centered-section">
//         <span id="typed-element" className="comfort-comment"></span>
//         <h2 className="availability-heading">Check Availability | उपलब्धता जांचें</h2>
//       </div>

//       <BookingForm />
//       <RoomAvailabilityCalendar />
//       <TermsAndConditions />
//       <Footer />
//     </div>
//   );
// };

// export default Main;
