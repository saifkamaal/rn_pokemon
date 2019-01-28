import React, { Component } from "react";
import { List, ListItem } from "react-native-elements";

export interface Props {
  pokemons: Object;
  onPress: Function;
}
export interface State {}
class PokemonList extends Component<Props, State> {
  constructor() {
    super();
  }

  render() {
    return (
      <List>
        {this.props.pokemons.map((pokemon, i) => (
          <ListItem
            button
            onPress={() => this.props.onPress(pokemon.url)}
            key={i}
            title={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          />
        ))}
      </List>
    );
  }
}

export default PokemonList;
