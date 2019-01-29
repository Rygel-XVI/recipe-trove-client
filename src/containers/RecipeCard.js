import React, { Component } from 'react';

class RecipeCard extends Component {

  render() {
    return (
      <div className="RecipeCard">
      <li key={this.props.keys}>
        <p>Recipe Card</p>
        <h3>{this.props.name}</h3>
        </li>
      </div>
    );
  }
}

export default RecipeCard;
