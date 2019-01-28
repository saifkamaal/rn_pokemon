// @flow
import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { View, ScrollView } from "react-native";
import Header from "../../components/Header";
import PokemonList from "../../components/PokemonList/pokemonList";
import Button from "../../components/Button/Button";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../actions";

import * as config from "../../constants/config";

export interface Props {
  navigation: any;
  pokemons: Object;
  getPokemons: Function;
}
export interface State {
  params: Object;
  nextUrl: string;
}
class HomeContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      nextUrl: "",
      params: {
        offset: config.offset,
        limit: config.limit
      }
    };
  }

  componentWillMount() {
    this.props.getPokemons(this.state.nextUrl, this.state.params);
  }

  getPokemons() {
    this.props.getPokemons(this.props.pokemons.nextUrl, this.state.params);
  }

  getPokemonListComponent() {
    const pokemons = this.props.pokemons.pokemonResults || [];
    return (
      <PokemonList
        pokemons={pokemons}
        onPress={this.getPokemonDetails.bind(this)}
      />
    );
  }

  getPokemonDetails(url) {
    const { navigation } = this.props;
    navigation.push("DetailContainer", { url: url });
  }

  render() {
    const pokemonListComponent = this.getPokemonListComponent();
    return (
      <View style={{ flex: 1 }}>
        <Header title={"Listing Pokemons.."} />
        <ScrollView style={{ flex: 1 }}>{pokemonListComponent}</ScrollView>
        <View style={{ marginBottom: 10 }}>
          <Button text="More Pokemons" onPress={this.getPokemons.bind(this)} />
        </View>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    pokemons: state.pokemons
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
