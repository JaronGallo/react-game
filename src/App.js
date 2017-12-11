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


 handleClick(event) {
    event.preventDefault() 
    var el = event.target
    this.setState({score: 1})
    console.log(el)
  }
 
 render() { 
    return (
      <Wrapper>
        
        <Title>Friends List {this.state.score}</Title>
        
        {shuffle(friends).map(friend => (
          <FriendCard
            onClick={this.handleClick}
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
