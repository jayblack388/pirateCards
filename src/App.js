import React from "react";
import PirateCard from "./components/PirateCard";
import Wrapper from "./components/Wrapper";
import pirates from "./pirates.json";
import "./App.css";

const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

class App extends React.Component {

  state = {
    pirates: shuffle(pirates)
  }

  shufflePirates = () => {
    this.setState({pirates: shuffle(pirates)})
  }

  render() {
    return (
      <Wrapper>
        <h1 className="title">Wanted List</h1>
        {console.log(this.state.pirates)}
        {this.state.pirates.map((pirate)=>(
          <PirateCard
            id={pirate.id}
            key={pirate.id}
            name={pirate.name}
            image={pirate.image}
            position={pirate.position}
            crew={pirate.crew}
            onClick={this.shufflePirates}
          />
        ))}
        
      </Wrapper>
    );
  }
};

export default App;
