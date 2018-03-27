import React from "react";
import PirateCard from "./components/PirateCard";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import pirateArray from "./pirates.json";
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
    score: {
      current: 0,
      best: 0
    },
    pirates: shuffle(pirateArray)
  }

  handleLose = () => {
    alert("YOU LOSE")
    this.setState({
      score: {
        current: 0,
        best: this.state.score.best
      },
      pirates: shuffle(pirateArray)
    })
  }

  handleClick = event => {
    const target = event.currentTarget
    let selectPirate = this.state.pirates.find(x => x.id === parseInt(target.id, 10));
    if (selectPirate.selected) {
      this.handleLose();
      this.state.pirates.forEach(pirate => {
        pirate.selected = false;
      })
    } else {
      selectPirate.selected = !selectPirate.selected;
      this.setState({
        pirates: shuffle(pirateArray),
        score: {
          current: this.state.score.current + 1,
          best : this.state.score.best > this.state.score.current ? this.state.score.best : this.state.score.best + 1
        }
      })
    }
  }

  render() {
    return (
      <div>
        <Score 
        best={this.state.score.best}
        current={this.state.score.current}
        />
        <Wrapper>
          <h1 className="title">Wanted List</h1>
          {this.state.pirates.map((pirate)=>(
            <PirateCard
              id={pirate.id}
              key={pirate.id}
              selected={pirate.selected}
              name={pirate.name}
              image={pirate.image}
              position={pirate.position}
              crew={pirate.crew}
              onClick={this.handleClick}
            />
          ))}
          
        </Wrapper>
      </div>  
    );
  }
};

export default App;
