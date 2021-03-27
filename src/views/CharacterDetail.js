import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';

function CharacterDetail() {

  const [character, setCharacter] = useState({});
  const [species, setSpecies] = useState({});
  const [homeWorld, setHomeWorld] = useState({});
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

      fetch(character.species)
        .then(res => {
          return res.json()
        })
        .then(s => {
          setSpecies(s)
        })

      fetch(character.homeworld)
        .then(res => {
          return res.json()
        })
        .then(h => {
          setHomeWorld(h)
        })
    },
    [id, character]
  );

  return (
      <div className="mx-auto w-2/3">
        <button onClick={history.goBack}>
            <div className="inline-block mx-auto my-auto align-middle">
              <i className="fas fa-chevron-left"></i> Back
            </div>
        </button>
        <p className="text-center text-2xl font-bold">{character.name}</p>
        <div className="flex">
          <div className="w-1/2 text-center">
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Skin Color: {character.skin_color}</p>
            <p>Eye Color: {character.eye_color}</p>
            <p>Birth Year: {character.birth_year}</p>
            <p>Sex: {character.gender}</p>
          </div>
          <div className="w-1/2 text-center">
            <p>Species: {species.name}</p>
            <p>Classification: {species.classification}</p>
            <p>Language: {species.language}</p>
          </div>
          <div className="w-1/2 text-center">
            <p>Planet: {homeWorld.name}</p>
            <p>Population: {homeWorld.population}</p>
          </div>
        </div>
      </div>
  );
}

export default CharacterDetail;