// Placeholder to host a component
import React, { useState, useEffect } from 'react';
/*
const HoraDelDia = () => {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const formatHora = (date) => {
    let horas = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();
    const ampm = horas >= 12 ? 'PM' : 'AM';
    horas = horas % 12;
    horas = horas || 12; // la hora '0' debe ser '12'
    minutos = minutos < 10 ? `0${minutos}` : minutos;
    segundos = segundos < 10 ? `0${segundos}` : segundos;
    return `${horas}:${minutos}:${segundos} ${ampm}`;
  };

  return (
    <div>
      <h1>Hora Actual:</h1>
      <h2><p> {formatHora(hora)}</p></h2>
    </div>
  );
};*/
const HoraDelDia = () => {
  // add logic

  const shelterHours = [
      { day: "Monday", open: "10:00", close: "16:00" },
      { day: "Tuesday", open: "10:00", close: "16:00" },
      { day: "Wednesday", open: "10:00", close: "16:00" },
      { day: "Thursday", open: "10:00", close: "16:00" },
      { day: "Friday", open: "10:00", close: "16:00" },
      { day: "Saturday", open: "9:00", close: "20:00" },
      { day: "Sunday", open: "9:00", close: "20:00" },

  ]

  // get the long day name and store it in a variable called today
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  // get today's hours
  const todayHours = shelterHours.find((day) => day.day === today);

  // display today and the hours in an div with an id of hours
  return (
      <div id="hours">
          <h2>Today's Hours</h2>
          <h3><p>{todayHours.day} {todayHours.open} - {todayHours.close}</p></h3>
      </div>
  )
}

export default HoraDelDia;