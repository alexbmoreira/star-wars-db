import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';

import CharacterDetailItem from '../components/CharacterDetailItem'

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

      if(character.species) {
        fetch(character.species[0])
          .then(res => {
            return res.json()
          })
          .then(s => {
            setSpecies(s)
          })
        }

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
        <p className="text-center text-3xl font-bold mb-4">{character.name}</p>
        <div className="flex space-x-8">
          <div className="w-1/3 text-center">
            <p className="text-xl border-b-2 border-gray-700">Details</p>
            <CharacterDetailItem item="Birth Year" data={character.birth_year} />
            <CharacterDetailItem item="Height" data={character.height} />
            <CharacterDetailItem item="Mass" data={character.mass} />
            <CharacterDetailItem item="Skin Color" data={character.skin_color} />
            <CharacterDetailItem item="Hair Color" data={character.hair_color} />
            <CharacterDetailItem item="Eye Color" data={character.eye_color} />
            <CharacterDetailItem item="Sex" data={character.gender} />
          </div>
          <div className="w-1/3 text-center">
            <p className="text-xl border-b-2 border-gray-700">Species</p>
            <CharacterDetailItem item="Species" data={species.name} />
            <CharacterDetailItem item="Language" data={species.language} />
            <CharacterDetailItem item="Language" data={species.classification} />
          </div>
          <div className="w-1/3 text-center">
            <p className="text-xl border-b-2 border-gray-700">Home Planet</p>
            <CharacterDetailItem item="Planet" data={homeWorld.name} />
            <CharacterDetailItem item="Population" data={homeWorld.population} />
          </div>
        </div>
      </div>
  );
}

export default CharacterDetail;