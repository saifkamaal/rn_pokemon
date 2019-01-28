// @flow
import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { View, ScrollView } from "react-native";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../actions";
import Header from "../../components/Header";
import PokemonDetails from "../../components/PokemonDetails/pokemonDetails";
import * as config from "../../constants/config";

export interface Props {
  navigation: any;
  getPokemonDetails: Function;
  pokemonDetails: Object;
}
export interface State {
  params: Object;
}

class DetailContainer extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      params: {
        offset: config.offset,
        limit: config.limit
      }
    };
  }

  componentWillMount() {
    const { navigation } = this.props;
    this.props.getPokemonDetails(navigation.getParam("url"));
  }

  getPokemonDetailComponent() {
    const pokemonDetails = this.props.pokemonDetails;
    return <PokemonDetails pokemonDetails={pokemonDetails} />;
  }

  render() {
    const pokemonDetailComponent = this.getPokemonDetailComponent();
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <Header title={"Pokemon Details"} showBack navigation={navigation} />
        <ScrollView style={{ flex: 1 }}>{pokemonDetailComponent}</ScrollView>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    pokemonDetails: state.pokemonDetails
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailContainer);
