function DisplayCharacter(props) {
  return (
    <div>
      <h1>{props.data.name}</h1>
      <ul>
        <li>Gender: {props.data.gender}</li>
        <li>Species: {props.data.species}</li>
        <li>Born: {props.data.birth_year}</li>
        <li>Homeworld: {props.data.homeworld}</li>
      </ul>
    </div>
  )
}
export default DisplayCharacter