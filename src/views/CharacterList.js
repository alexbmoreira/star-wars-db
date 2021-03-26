import CharacterListItem from '../components/CharacterListItem'

import characters from '../api/characters'

function CharacterList() {
  const characterArray = characters.map((character, i) => {
    return <CharacterListItem name={characters[i].name} birth_year={characters[i].birth_year} height={characters[i].height} mass={characters[i].mass} />
  })

  return (
    <div>
      <h1>Character List</h1>
      {characterArray}
    </div>
  );
}

export default CharacterList;
