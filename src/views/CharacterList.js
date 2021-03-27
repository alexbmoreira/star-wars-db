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

  const [data, setData] = useState([]);
  const [characters, setCharacters] = useState([]);
  const history = useHistory();

  const [page, setPage] = useState(url_page);

  useEffect(() => {
      fetch(`https://swapi.dev/api/people/?page=${page}`)
        .then(res => {
          return res.json()
        })
        .then(d => {
          setData(d)
          setCharacters(d.results)
          history.push(`/?page=${page}`)
        })
    },
    [page, history]
  );

  function incrementPage(inc) {
    if((data.next && inc > 0) || (data.previous && inc < 0)) {
      history.push(`/?page=${parseInt(page) + inc}`)
      setPage(parseInt(page) + inc)
    }
  }

  const characterArray = characters.map((character, i) => {
    return <CharacterListItem key={i} character={characters[i]} />
  })

  return (
    <div className="flex flex-col mx-auto px-4 md:px-32 lg:px-64">
      <div className="flex flex-col divide-solid divide-gray-700 divide-y-2">
        {characterArray}
      </div>
      <div className="flex mx-auto space-x-4">
        <button onClick={() => incrementPage(-1)}>
          <div className="flex w-8 h-8 bg-gray-700 rounded">
            <div className="mx-auto my-auto">
              <i className="fas fa-chevron-left"></i>
            </div>
          </div>
        </button>
        <p className="inline-block align-middle">Page {page}</p>
        <button onClick={() => incrementPage(1)}>
          <div className="flex w-8 h-8 bg-gray-700 rounded">
            <div className="mx-auto my-auto">
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default CharacterList;
