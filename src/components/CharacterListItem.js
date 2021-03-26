function CharacterList(props) {
    return (
        <div className="flex my-2 justify-between">
            <div className="flex flex-col">
                <p className="text-xl font-bold">{props.name}</p>
                <p className="text-sm">Born: {props.birth_year}</p>
            </div>
            <div className="flex flex-col text-right">
                <p className="text-gray-300 text-sm">Height: {props.height}cm</p>
                <p className="text-gray-300 text-sm">Mass: {props.mass}kg</p>
            </div>
        </div>
    );
}
  
export default CharacterList;
  