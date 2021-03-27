import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';

import CharacterDetailItem from '../components/CharacterDetailItem'
import CharacterDetailSkeleton from "../components/CharacterDetailSkeleton";

function CharacterDetail() {

  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});
  const [species, setSpecies] = useState({"name": "n/a", "language": "n/a"});
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
    },
    [id]
  );

  useEffect(() => {
    if(Object.keys(character).length > 0) {
      if(character.species && character.species.length >= 1) {
        fetch(character.species[0])
          .then(res => {
            return res.json()
          })
          .then(s => {
            setSpecies(s)
          })
      }

      if(character.homeworld) {
        fetch(character.homeworld)
          .then(res => {
            return res.json()
          })
          .then(h => {
            setHomeWorld(h)
            setLoading(false)
          })
      }
    }
    },
    [character]
  );

  return (
      <div className="mx-auto px-4">
        <button onClick={history.goBack}>
            <div className="inline-block mx-auto my-auto align-middle">
              <i className="fas fa-chevron-left"></i> Back
            </div>
        </button>
        {loading ? <div className="flex my-2 animate-pulse"><div className="h-8 mx-auto bg-gray-800 rounded w-1/3"></div></div> : <p className="text-center text-3xl font-bold mb-4">{character.name}</p>}
        <div className="flex flex-col md:space-x-8 md:flex-row">
          <div className="text-center mb-4 md:w-1/3">
            <p className="text-xl border-b-2 border-gray-700">Details</p>
            {loading ? <CharacterDetailSkeleton /> : <CharacterDetailItem item="Birth Year" data={character.birth_year} />}
            {loading ? <CharacterDetailSkeleton /> : <CharacterDetailItem item="Height" data={character.height} />}
            {loading ? <CharacterDetailSkeleton /> : <CharacterDetailItem item="Mass" data={character.mass} />}
            {loading ? <CharacterDetailSkeleton /> : <CharacterDetailItem item="Skin Color" data={character.skin_color} />}
            {loading ? <CharacterDetailSkeleton /> : <CharacterDetailItem item="Hair Color" data={character.hair_color} />}
            {loading ? <CharacterDetailSkeleton /> : <CharacterDetailItem item="Eye Color" data={character.eye_color} />}
            {loading ? <CharacterDetailSkeleton /> : <CharacterDetailItem item="Sex" data={character.gender} />}
          </div>
          <div className="text-center mb-4 md:w-1/3">
            <p className="text-xl border-b-2 border-gray-700">Species</p>
            {loading ? <CharacterDetailSkeleton /> : <CharacterDetailItem item="Species" data={species.name} />}
            {loading ? <CharacterDetailSkeleton /> : <CharacterDetailItem item="Language" data={species.language} />}
          </div>
          <div className="text-center mb-4 md:w-1/3">
            <p className="text-xl border-b-2 border-gray-700">Home Planet</p>
            {loading ? <CharacterDetailSkeleton /> : <CharacterDetailItem item="Planet" data={homeWorld.name} />}
            {loading ? <CharacterDetailSkeleton /> : <CharacterDetailItem item="Population" data={homeWorld.population} />}
          </div>
        </div>
      </div>
  );
}

export default CharacterDetail;