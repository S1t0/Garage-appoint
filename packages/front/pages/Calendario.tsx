import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.css";

const Calendario = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div className="container">
        <div className="center">
        <p>Selecciona el dia y hora de tu cita</p>
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
        />
        </div>
      </div>
    </>
  );
};

export default Calendario;
