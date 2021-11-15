import React, { useState, useEffect } from "react";

export function Us() {
  const [equipo, setEquipo] = useState([]);
  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    setEquipo(users);
  };

  return (
    <div>
      <h1> Nosotros </h1>
      <ul>
        {equipo.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
