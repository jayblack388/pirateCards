import React from "react";
import PirateCard from "../../components/PirateCard";
import Score from "../../components/Score";
import { Row, Container } from "../../components/Grid";
import Modal from "react-modal";
import API from "../../utils/API"
import {shuffle, imageSwitch} from "../../utils/utils"


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    overflow              : "hidden",
    maxWidth              : 280,
    maxHeight             : 280
  }
};

class Pirates extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      modalIsOpen: false,
      score: {
        current: 0,
        best: 0
      },
      pirates: [],
      resultImg: "Loading...",
      selectedCrew: this.props.match.params.id
    }
  }

  componentDidMount() {
    this.setCards(this.state.selectedCrew)
  }

  setCards = (crew) => {
    API.getPirateCrew(crew)
      .then(res=>{
        console.log(res)
        this.setState({pirates: shuffle(res.data)})
    })
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  handleLose = () => {
    this.openModal()
    this.setState({
      score: {
        current: 0,
        best: this.state.score.best
      },
      pirates: shuffle(this.state.pirates),
      resultImg: "/img/gameOver.png"
    })
    this.state.pirates.forEach(pirate => {
      pirate.selected = false;
    })
    this.openModal()
  }

  handleWin = () => {
    this.openModal()
    this.setState({
      score: {
        current: 0,
        best: this.state.score.best + 1
      },
      pirates: shuffle(this.state.pirates),
      resultImg: imageSwitch(this.state.pirates[0].crew)
    })
    this.state.pirates.forEach(pirate => {
      pirate.selected = false;
    })
    
  }

  handleClick = event => {
    const target = event.currentTarget
    console.log(target.id)
    let selectPirate = this.state.pirates.find(x => x._id === target.id);
    console.log(selectPirate)
    if (selectPirate.selected) {
      this.handleLose();
    } else {
      selectPirate.selected = !selectPirate.selected;
      this.setState({
        pirates: shuffle(this.state.pirates),
        score: {
          current: this.state.score.current + 1,
          best : this.state.score.best > this.state.score.current ? this.state.score.best : this.state.score.best + 1
        }
      })
    }
    if (this.state.score.current + 1 === this.state.pirates.length) {
      this.handleWin()
    }
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          ariaHideApp={false}
        >
          <img className="img-fluid" alt="Win/Lose" src={this.state.resultImg} />
          
          <button className="btn btn-primary reset" onClick={this.closeModal}>Reset</button>        
        </Modal>
        <Score 
          crew={this.state.selectedCrew}
          best={this.state.score.best}
          current={this.state.score.current}
        />
        <Container>
          <h1 className="title">Wanted List</h1>
          <Row>
              {this.state.pirates.map((pirate)=>(
                <PirateCard
                  id={pirate._id}
                  key={pirate._id}
                  selected={pirate.selected}
                  name={pirate.name}
                  image={pirate.image}
                  position={pirate.position}
                  crew={pirate.crew}
                  onClick={this.handleClick}
                />
              ))}
          </Row>          
        </Container>
        
      </div>  
    );
  }
};

export default Pirates;
