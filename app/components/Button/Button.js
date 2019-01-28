// @flow
import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
export interface Props {
  onPress: Function;
  text: string;
}
export interface State {}
class Button extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={styles.buttonStyle} onPress={this.props.onPress}>
        <Text style={styles.textStyle}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
    marginHorizontal: 5
  },
  textStyle: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 10,
    marginHorizontal: 10
  }
});

export default Button;
