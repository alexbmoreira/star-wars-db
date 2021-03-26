import CharacterListItem from '../components/CharacterListItem'

import { Component } from 'react';

class CharacterList extends Component {
  constructor() {
    super()
    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    fetch('https://swapi.dev/api/people/?page=1')
      .then(res => {
        return res.json()
      })
      .then(characters => {
        this.setState({
          characters: characters.results
        })
      })
  }

  render() {
    const characterArray = this.state.characters.map((character, i) => {
      return <CharacterListItem key={i} character={this.state.characters[i]} />
    })
    return (
      <div className="mx-auto w-2/3">
        <h1>Character List</h1>
        {characterArray}
      </div>
    );
  }
}

export default CharacterList;
