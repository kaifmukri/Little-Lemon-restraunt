import { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Hightlights from "./components/Hightlights";
import BookingForm from "./components/BookingForm";
import Testimonial from "./components/testimonial";
import Footer from "./components/Footer";

function App() {
  const [bookingFormOpen, setBookingFormOpen] = useState(false);

  function openBookingFormHandler() {
    setBookingFormOpen(!bookingFormOpen);
  }

  return (
    <>
      {bookingFormOpen && (
        <BookingForm onCloseLayout={openBookingFormHandler} />
      )}
      <Header onOpenLayout={openBookingFormHandler}></Header>
      <Hero onOpenLayout={openBookingFormHandler}></Hero>
      <Hightlights></Hightlights>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </>
  );
}

export default App;
