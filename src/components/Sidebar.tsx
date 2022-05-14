import { Component } from "react";
import { fetchDogs } from "../helpers/fetchDogs";

const styles = {
  sideBar: {
    flex: 1,
    borderRight: '0.5px solid rgb(230, 227, 227)',
    minHeight: '100vh',
    justifyContent: 'center',

  },
  top: {
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    paddingLeft: '10px',
  },
  bottom: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px',
  },
  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    cursor: 'pointer',
  },
  li: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px',
    cursor: 'pointer',
  },
};

class Sidebar extends Component {

  state = {
    dogs: [{breed: '', subbreeds: ''}],
  } 
  
  async componentDidMount() {
    const dogs = await fetchDogs()
    .then((data) => {
      let dogsArr = [];
      for (let breed in data) {
        dogsArr.push({
          breed: breed,
          subBreeds: data[breed]
        })
      }
      return dogsArr
    })
    this.setState({ dogs: dogs })
    //console.log(dogs);
  }

  render() {
    const dog = this.state.dogs
    return (
      <div style={styles.sideBar}>
        <div style={styles.top}>
          <span>Paggos Dog App</span>
        </div>
        <hr />
        <div style={styles.center}>
          <ul style={styles.ul}>
          {
            dog.map((breed) => {
              return (breed.subbreeds && breed.subbreeds.length>0)  ? 
              <ul key={breed.breed}>{breed.breed}
                <li>Hay Sub Aca.!</li>
              </ul> : 
              <li key={breed.breed}>{breed.breed}</li>
              })
            }
          </ul>
        </div>
        <hr />
        <div style={styles.bottom}>
          <span>Realizado Por Moises Romero</span>
        </div>
      </div>
    );
  }
}

export default Sidebar;