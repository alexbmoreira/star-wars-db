import './style/CharacterListItem.css'

function CharacterList() {
    return (
        <div className="list-item">
            <div className="name-year">
                <h3 className="name">Luke Skywalker</h3>
                <p>Born: 19BBY</p>
            </div>
            <div className="height-weight">
                <p>Height: 172cm</p>
                <p>Mass: 77kg</p>
            </div>
        </div>
    );
}
  
export default CharacterList;
  