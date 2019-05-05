import React, { Component } from 'react'
import { OK } from 'http-status-codes';
import User from '../interfaces/User.interface';

interface SearchState {
  error: boolean,
  pokemon: Pokemon
}

interface Pokemon {
  name: string,
  numberOfAbilities: number,
  baseExperience: number,
  imageUrl: string
}

export default class PokemonSearch extends Component<User, SearchState> {
  pokemonRef: React.RefObject<HTMLInputElement>;

  constructor(props: User) {
    super(props);
    this.state = {
      error: false,
      pokemon: null
    }
    this.pokemonRef = React.createRef();
  }

  onSearchClick = (): void => {
    const inputValue = this.pokemonRef.current.value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
      .then( res => {
        if (res.status !== OK) {
          this.setState({ error: true })
        } else {
          res.json().then((data: any) => {
            this.setState({
              error: false,
              pokemon: {
                name: data.name,
                numberOfAbilities: data.abilities.length,
                baseExperience: data.base_experience,
                imageUrl: data.sprites.front_default
              }
            });
          });
        }
      });
  }

  render() {
    const { name: userName, numberOfPokemons } = this.props;
    const { error, pokemon } = this.state;
    
    let resultMarkup;

    if (error) {
      resultMarkup = <p>Pokemon not found, please try again</p>
    } else if (this.state.pokemon) {
      const { name, numberOfAbilities, baseExperience, imageUrl } = pokemon;

      resultMarkup = <div>
        <img src={imageUrl} alt="pokemon" className="pokemon-image" />
        <p>
          {name} has {numberOfAbilities} abilities and {baseExperience} base experience points
        </p>
      </div>
    }

    return (
      <div style={{textAlign: "center"}}>
        <p style={{textAlign: "center"}}>
          User: {userName} {numberOfPokemons && <span>has {numberOfPokemons} pokemons</span>}
        </p>
        <input type="text" ref={this.pokemonRef} />
        <button onClick={this.onSearchClick} className="my-button" >
          Search
        </button>
        {resultMarkup}
      </div>
    )
  }
}
