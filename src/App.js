import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
// import Score from "./components/score";

var shuffle = require('shuffle-array'),
    collection = (friends);
 
shuffle(collection);
 
console.log(collection);

class App extends Component {

state = {
  score:0
}


 handleClick = (event) => {
    const current = this.state.score;
    const add = (current + 1)
    this.setState({score: add});
    
  }
 
 render() { 
    return (
      <Wrapper>
        <h1>Score: {this.state.score}</h1>
        <Title>Friends List</Title>
        
        {shuffle(friends).map(friend => (
          <FriendCard
            pleaseWork={this.handleClick}
            clicked={this.clicked}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
