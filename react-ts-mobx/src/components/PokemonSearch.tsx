import React, { Component } from 'react'



export default class PokemonSearch extends Component<{name: string, numberOfPokemons: number}> {
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
