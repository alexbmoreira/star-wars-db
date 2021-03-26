import { Component } from "react";
import {
    Link
  } from "react-router-dom";

class CharacterList extends Component {
    render() {
        const swReg = /http:\/\/swapi.dev\/api\/people\/([0-9]+)/
        const swUrl = this.props.character.url
        const url = `/character/${swUrl.match(swReg)[1]}`
        return (
            <Link to={url}>
                <div className="flex my-2 justify-between">
                    <div className="flex flex-col">
                        <p className="text-xl font-bold">{this.props.character.name}</p>
                        <p className="text-sm">Born: {this.props.character.birth_year}</p>
                    </div>
                    <div className="flex flex-col text-right">
                        <p className="text-gray-300 text-sm">Height: {this.props.character.height}cm</p>
                        <p className="text-gray-300 text-sm">Mass: {this.props.character.mass}kg</p>
                    </div>
                </div>
            </Link>
        );
    }
}
  
export default CharacterList;
  