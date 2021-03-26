import CharacterListItem from '../components/CharacterListItem'

import characters from '../api/characters'

function CharacterList() {
  return (
    <div>
      <h1>Character List</h1>
      <CharacterListItem name={characters[0].name} birth_year={characters[0].birth_year} height={characters[0].height} mass={characters[0].mass} />
      <CharacterListItem name={characters[1].name} birth_year={characters[1].birth_year} height={characters[1].height} mass={characters[1].mass} />
      <CharacterListItem name={characters[2].name} birth_year={characters[2].birth_year} height={characters[2].height} mass={characters[2].mass} />
      <CharacterListItem name={characters[3].name} birth_year={characters[3].birth_year} height={characters[3].height} mass={characters[3].mass} />
      <CharacterListItem name={characters[4].name} birth_year={characters[4].birth_year} height={characters[4].height} mass={characters[4].mass} />
    </div>
  );
}

export default CharacterList;
