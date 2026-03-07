import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import axios from "axios";

type Value = Date | null | [Date | null, Date | null];

export default function Booking() {

  const [date, setDate] = useState<Value>(new Date());

  const handleDateChange = (value: Value) => {
    setDate(value);
  };

  const bookSlot = async () => {

    if (!date || Array.isArray(date)) {
      alert("Please select a valid date");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/bookings/book", {
        date,
        timeSlot: "10:00-11:00",
        package: "with_camera"
      });

      alert("Slot booked!");

    } catch (error) {
      console.error(error);
      alert("Booking failed");
    }

  };

  return (
    <div>

      <h2>Select Date</h2>

      <Calendar
        onChange={handleDateChange}
        value={date}
        minDate={new Date()}
      />

      <button onClick={bookSlot}>
        Book Slot
      </button>

    </div>
  );
}