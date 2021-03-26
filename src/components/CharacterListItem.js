import './style/CharacterListItem.css'

function CharacterList(props) {
    return (
        <div className="list-item">
            <div className="name-year">
                <h3 className="name">{props.name}</h3>
                <p>Born: {props.birth_year}</p>
            </div>
            <div className="height-weight">
                <p>Height: {props.height}cm</p>
                <p>Mass: {props.mass}kg</p>
            </div>
        </div>
    );
}
  
export default CharacterList;
  