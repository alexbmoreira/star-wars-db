import { Component } from "react";
import { Link } from "react-router-dom";

class CharacterListItem extends Component {
    render() {
        const swReg = /http:\/\/swapi.dev\/api\/people\/([0-9]+)/
        const swUrl = this.props.character.url
        const url = `/character/${swUrl.match(swReg)[1]}`

        const heightUnits = this.props.character.height === "unknown" ? "" : "cm"
        const massUnits = this.props.character.mass === "unknown" ? "" : "kg"

        return (
            <Link to={url}>
                <div className="flex my-2 justify-between">
                    <div className="flex flex-col">
                        <p className="text-xl font-bold">{this.props.character.name}</p>
                        <p className="text-sm text-gray-400">Born: <span className="italic">{this.props.character.birth_year}</span></p>
                    </div>
                    <div className="flex flex-col text-right">
                        <p className="text-gray-500 text-sm">Height: {this.props.character.height}{heightUnits}</p>
                        <p className="text-gray-500 text-sm">Mass: {this.props.character.mass}{massUnits}</p>
                    </div>
                </div>
            </Link>
        );
    }
}
  
export default CharacterListItem;
  