function CharacterDetailItem(props) {
    return (
        <div className="flex justify-between">
          <p>{props.item}:</p>
          <p>{props.data}</p>
        </div>
    );
  }
  
  export default CharacterDetailItem;