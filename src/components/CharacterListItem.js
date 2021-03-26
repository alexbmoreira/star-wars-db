import { Component } from "react";

class CharacterList extends Component {
    render() {
        return (
            <div className="flex my-2 justify-between">
                <div className="flex flex-col">
                    <p className="text-xl font-bold">{this.props.name}</p>
                    <p className="text-sm">Born: {this.props.birth_year}</p>
                </div>
                <div className="flex flex-col text-right">
                    <p className="text-gray-300 text-sm">Height: {this.props.height}cm</p>
                    <p className="text-gray-300 text-sm">Mass: {this.props.mass}kg</p>
                </div>
            </div>
        );
    }
}
  
export default CharacterList;
  