import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPersons } from "../services/personsAPI";

export default function PersonaList() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    getAllPersons()
      .then(setPersons)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Persona 4 Characters</h1>
      <ul>
        {persons.map((p) => (
          <li key={p.id}>
            <img src={p.image} alt={p.name} style={{ height: "50px" }} />
            <strong>{p.name}</strong> — {p.type}, Weakness: {p.weakness}{" "}
            <Link to={`/characters/${p.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
