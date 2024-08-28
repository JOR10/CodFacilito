// Placeholder to host a component
import React, { useState, useEffect } from 'react';

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
};

export default HoraDelDia;