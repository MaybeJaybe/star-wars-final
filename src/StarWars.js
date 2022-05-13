// numbers 1-16, 18-83 no 17
// text input and button, value is star wars char id
// need character data display character name and any 4 other elements from the data.
// i think i'll choose gender, species, birth year, and homeworld

import { useState } from 'react';
import DisplayCharacter from './DisplayCharacter';
// import MakeList from './MakeList';

function StarWars() {
  // const [number, setNumber] = useState(1)
  // const [character, setCharacter] = useState([])
  const [result, setResult] = useState(null);
  const [info, setInfo] = useState(0);

  async function fetchData(input) {
    const path = `https://swapi.dev/api/people/${input}`;
    const response = await fetch(path);
    const data = await response.json();
    return data;
  }

  const fetchSpecies = async (charRedirect) => {
    const response = await fetch(charRedirect.species);
    const data = await response.json();
    return data;
  }
  const fetchHomeworld = async (charRedirect) => {
    const response = await fetch(charRedirect.homeworld);
    const data = await response.json();
    return data;
  }

  async function displayData() {
    fetchData(info).then((data) => {
      fetchSpecies(data).then((species) => {
        data.species = species.name
      })
      fetchHomeworld(data).then((homeworld) => {
        data.homeworld = homeworld.name
      })
      setResult(data);
    })
  }
// for some reason, sometimes it displays species and homeworld, sometimes it doesnt.
// this is really weird and i'm not sure what's wrong.
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault();
          displayData();
        }}>
          <input
            type={"number"}
            value={info}
            onChange={e => setInfo(e.target.value)}
            min={1}
            max={83}
          />
          <button type="submit">Submit</button>
        </form>
        <h1>{result && <DisplayCharacter data={result} />}</h1>
      </div>
    )
}

export default StarWars
