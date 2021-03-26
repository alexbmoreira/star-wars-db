function CharacterList(props) {
    return (
        <div className="flex my-2 justify-between">
            <div className="flex flex-col">
                <p className="name">{props.name}</p>
                <p>Born: {props.birth_year}</p>
            </div>
            <div className="flex flex-col text-right">
                <p>Height: {props.height}cm</p>
                <p>Mass: {props.mass}kg</p>
            </div>
        </div>
    );
}
  
export default CharacterList;
  