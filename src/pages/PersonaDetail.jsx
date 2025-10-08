import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPersonById } from "../services/personsAPI";

export default function PersonaDetail() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    getPersonById(id)
      .then(setPerson)
      .catch(console.error);
  }, [id]);

  if (!person) return <p>Loading...</p>;

  return (
    <div>
      <h1>{person.name}</h1>
      <img src={person.image} alt={person.name} style={{ height: "200px" }} />
      <p><strong>Type:</strong> {person.type}</p>
      <p><strong>Weakness:</strong> {person.weakness}</p>
      <p><strong>Attacks:</strong> {person.attacks.join(", ")}</p>
      <Link to="/">Back to List</Link>
    </div>
  );
}
