import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div>
        This is the bear details page {this.props.match.params.id}.
        <button onClick={this.goHome}>Take me home</button>
      </div>
    );
  }
  goHome = () => {
    this.props.history.push("/bears");
  };
}

export default NavBar;
