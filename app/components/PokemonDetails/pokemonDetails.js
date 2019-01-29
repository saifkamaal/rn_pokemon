// @flow
import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export interface Props {
  pokemonDetails: Object;
}
export interface State {
  name: string;
  id: string;
  weight: string;
  abilities: Object;
  moves: Object;
  images: Object;
  stats: Object;
}
class PokemonDetails extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      id: "",
      images: {},
      weight: "",
      name: "",
      abilities: [],
      moves: [],
      stats: []
    };
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.pokemonDetails != nextProps.pokemonDetails) {
      const pokemonDetails = nextProps.pokemonDetails;
      this.setState({
        id: pokemonDetails.id,
        images: pokemonDetails.sprites,
        weight: pokemonDetails.weight,
        name: pokemonDetails.name,
        abilities: pokemonDetails.abilities,
        moves: pokemonDetails.moves,
        stats: pokemonDetails.stats
      });
    }
  }

  render() {
    const id = this.state.id;
    const name = this.state.name;
    const weight = this.state.weight;
    const abilities = this.state.abilities;
    const moves = this.state.moves;
    const image = this.state.images;
    const stats = this.state.stats;
    return (
      <View style={{ backgroundColor: "white" }}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: image.front_default || "https://i.imgur.com/es7sovA.jpg"
            }}
            style={styles.image}
          />
          <Text style={styles.name}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Text>
        </View>
        <View style={{ margin: 20 }}>
          <Text style={{ fontSize: 28 }}>Details</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              margin: 20
            }}
          >
            <View>
              <Text style={{ fontSize: 20 }}>WEIGHT:</Text>
              <Text style={{ paddingLeft: 20 }}>{weight}</Text>
              <Text style={{ fontSize: 20, marginTop: 20 }}>ABILITIES:</Text>
              {abilities.map((a, i) => (
                <View key={i}>
                  <Text style={{ paddingLeft: 20 }}>{a.ability.name}</Text>
                </View>
              ))}
              <Text style={{ fontSize: 20, marginTop: 20 }}>STATS:</Text>
              {stats.map((a, i) => (
                <View key={i}>
                  <Text style={{ paddingLeft: 20 }}> {a.stat.name}</Text>
                </View>
              ))}
            </View>
            <View>
              <Text style={{ fontSize: 20 }}>MOVES:</Text>
              <View style={{ flexDirection: "column" }}>
                {moves.map((a, i) => (
                  <Text key={i} style={{ paddingLeft: 20 }}>
                    {a.move.name}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    flex: 1
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#007aff"
  },
  name: {
    color: "#fff",
    fontSize: 33,
    marginTop: 80,
    flex: 1
  }
});

export default PokemonDetails;
