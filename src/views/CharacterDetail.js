import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';

function CharacterDetail() {

  const [character, setCharacter] = useState({});
  const history = useHistory();
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
        <button onClick={history.goBack}>Go back</button>
      </div>
  );
}

export default CharacterDetail;