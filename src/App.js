import { useState } from "react";

const exercises = [
  {
    name: "1c1 en media pista",
    category: "Infantil",
    participants: "2 jugadores",
    time: "10 min",
    space: "Media pista",
    material: "Balón",
    type: "Táctica colectiva"
  },
  {
    name: "Rueda de pases con conos",
    category: "Mini",
    participants: "5 jugadores",
    time: "8 min",
    space: "Cuarto de pista",
    material: "Balón, conos",
    type: "Técnica individual"
  },
  {
    name: "Circuito técnico con conos",
    category: "Mini",
    participants: "4 jugadores",
    time: "12 min",
    space: "Cuarto de pista",
    material: "Balones, conos",
    type: "Técnica individual"
  },
  {
    name: "2c2 + 1 apoyo",
    category: "Infantil",
    participants: "5 jugadores",
    time: "10 min",
    space: "Media pista",
    material: "Balón",
    type: "Táctica colectiva"
  },
  {
    name: "Rondo defensivo",
    category: "Cadete",
    participants: "6 jugadores",
    time: "8 min",
    space: "Media pista",
    material: "Balón",
    type: "Defensa"
  },
  {
    name: "Calentamiento en zig-zag",
    category: "Mini",
    participants: "8 jugadores",
    time: "6 min",
    space: "Cuarto de pista",
    material: "Balones y conos",
    type: "Calentamiento"
  },
  {
    name: "5c5 con normas",
    category: "Junior",
    participants: "10 jugadores",
    time: "15 min",
    space: "Pista entera",
    material: "Balón",
    type: "Juego reducido"
  }
];

export default function App() {
  const [filters, setFilters] = useState({
    category: "",
    type: "",
    space: ""
  });

  const filteredExercises = exercises.filter((ex) => {
    return (
      (!filters.category || ex.category === filters.category) &&
      (!filters.type || ex.type === filters.type) &&
      (!filters.space || ex.space === filters.space)
    );
  });

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">🏀 BasketDrillHub</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select
          className="p-2 border rounded"
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        >
          <option value="">Edad</option>
          <option value="Mini">Mini</option>
          <option value="Infantil">Infantil</option>
          <option value="Cadete">Cadete</option>
          <option value="Junior">Junior</option>
        </select>

        <select
          className="p-2 border rounded"
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        >
          <option value="">Tipo de ejercicio</option>
          <option value="Técnica individual">Técnica individual</option>
          <option value="Táctica colectiva">Táctica colectiva</option>
          <option value="Defensa">Defensa</option>
          <option value="Juego reducido">Juego reducido</option>
          <option value="Calentamiento">Calentamiento</option>
        </select>

        <select
          className="p-2 border rounded"
          onChange={(e) => setFilters({ ...filters, space: e.target.value })}
        >
          <option value="">Espacio</option>
          <option value="Media pista">Media pista</option>
          <option value="Cuarto de pista">Cuarto de pista</option>
          <option value="Pista entera">Pista entera</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredExercises.map((ex, i) => (
          <div key={i} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{ex.name}</h2>
            <p><strong>Edad:</strong> {ex.category}</p>
            <p><strong>Participantes:</strong> {ex.participants}</p>
            <p><strong>Tiempo:</strong> {ex.time}</p>
            <p><strong>Espacio:</strong> {ex.space}</p>
            <p><strong>Material:</strong> {ex.material}</p>
            <p><strong>Tipo:</strong> {ex.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

