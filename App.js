import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useScreens } from "react-native-screens";
import { CalendarList } from "react-native-calendars";
import { createStackNavigator } from "react-navigation";

useScreens();

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Home Screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate("Details")}
          title="Go to detail"
        />
      </View>
    );
  }
}

class DetailScreen extends Component {
  static navigationOptions = {
    title: "Detail"
  };

  render() {
    return (
      <View style={styles.container}>
        <CalendarList pastScrollRange={24} futureScrollRange={1} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

export default createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: DetailScreen
  }
});
