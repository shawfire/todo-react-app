import React, { Component } from 'react'
import User from '../interfaces/User.interface';


export default class PokemonSearch extends Component<User> {
  render() {
    const { name, numberOfPokemons } = this.props;
    return (
      <div>
        <p style={{textAlign: "center"}}>
          User: {name} has {numberOfPokemons} pokemons
        </p>
      </div>
    )
  }
}
