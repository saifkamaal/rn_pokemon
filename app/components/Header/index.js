import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

class Header extends Component {
  onBackPress = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  render() {
    const { showBack, title } = this.props;
    return (
      <View style={styles.header}>
        <View style={styles.button}>
          {showBack && (
            <Button color={"#007aff"} onPress={this.onBackPress} title="Back" />
          )}
        </View>
        <Text style={styles.text}>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    height: 60,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  text: {
    textAlign: "center",
    color: "black",
    paddingRight: 10,
    flexGrow: 1,
    fontSize: 16
  },
  button: {
    position: "absolute",
    zIndex: 2
  }
});

export default Header;
