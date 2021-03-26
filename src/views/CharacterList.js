import CharacterListItem from '../components/CharacterListItem'

import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function CharacterList() {
  let url_page = useQuery().get("page");
  if(!url_page) {
    url_page = 1
  }

  const [characters, setCharacters] = useState([]);
  const history = useHistory();

  const [page, setPage] = useState(url_page);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?page=${page}`)
      .then(res => {
        return res.json()
      })
      .then(c => {
        setCharacters(c.results)
        history.push(`/?page=${page}`)
      })
    },
    [page, history]
  );

  function incrementPage(inc) {
    history.push(`/?page=${parseInt(page) + inc}`)
    setPage(parseInt(page) + inc)
  }

  const characterArray = characters.map((character, i) => {
    return <CharacterListItem key={i} character={characters[i]} />
  })

  return (
    <div className="mx-auto w-2/3">
      <h1>Character List</h1>
      {characterArray}
      <button onClick={() => incrementPage(-1)}>Click me</button>
      <button onClick={() => incrementPage(1)}>Click me</button>
    </div>
  );
}

export default CharacterList;
