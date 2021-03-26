import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

function CharacterDetail() {

  const [character, setCharacter] = useState({});
  let { id } = useParams();

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}/`)
      .then(res => {
        return res.json()
      })
      .then(c => {
        setCharacter(c)
      })
    },
    [id]
  );

  return (
      <div className="mx-auto w-2/3">
        <h1>Character: {id}</h1>
        <h1>Name: {character.name}</h1>
      </div>
  );
}

export default CharacterDetail;