import React, { Component } from "react";
import "./FriendCard.css";
// import score from "./../score";

class FriendCard extends Component {
state = {
  clicked: false, 
}

clickedHandler =()=>{
if (this.state.clicked===false){
  this.setState({clicked:true});
  console.log(this.state);
}

if (this.state.clicked===true){
  alert("already clicked");
}
 
}
  
render() {
  return (
    <div>
      <div onClick={this.clickedHandler} className="card">
        <div className="img-container">
      <img alt={this.props.name} src={this.props.image} />
    </div>   
  </div>
</div>
)}
}
  


export default FriendCard;
