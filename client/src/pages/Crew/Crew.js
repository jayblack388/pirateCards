import React from "react";
import { Link } from "react-router-dom";
import PirateCard from "../../components/PirateCard";
import { Row, Container } from "../../components/Grid";
import API from "../../utils/API"
import {imageSwitch} from "../../utils/utils"


class Crew extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      crews: [],
    }
  }

  componentDidMount() {
    this.setCards()
  }

  setCards = () => {
    const crews = [];
    API.getCrews()
      .then(res=>{
        res.data.forEach(crewName => {
            const newCrew = {
                name: crewName,
                image: imageSwitch(crewName)
            }
            crews.push(newCrew)
        })
        this.setState({crews})
    })
  }

  render() {
    return (
        <Container>
          <h1 className="title">Pick a Pirate Crew</h1>
          <Row>
              {this.state.crews.map((crew)=>(
                <Link style={{textDecoration: 'none'}} key={crew.name} to={"/crews/" + crew.name}>
                    <PirateCard
                        id={crew.name}
                        name={crew.name}
                        image={crew.image}
                    />
                </Link>
              ))}
          </Row>          
        </Container>
    );
  }
};

export default Crew;
