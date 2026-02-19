import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, updateTimes, submitForm }) {
  return (
    <div>
      <h2>Book a Table</h2>
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        submitForm={submitForm}
      />
    </div>
  );
}

export default BookingPage;
