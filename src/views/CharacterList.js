import CharacterListItem from '../components/CharacterListItem'

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  let page = useQuery().get("page") ;

  if(!page) {
    page = 1
  }

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?page=${page}`)
      .then(res => {
        return res.json()
      })
      .then(c => {
        setCharacters(c.results)
      })
    },
    [page]
  );

  const characterArray = characters.map((character, i) => {
    return <CharacterListItem key={i} character={characters[i]} />
  })

  return (
    <div className="mx-auto w-2/3">
      <h1>Character List</h1>
      {characterArray}
    </div>
  );
}

export default CharacterList;
