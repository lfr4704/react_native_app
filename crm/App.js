/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';
import Test from './Test';
import Login from './Login';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    componentDidMount() {
      firebase.initializeApp({
        apiKey: "AIzaSyCntrqWZw7bnK4p5S5GYzxh93v1jtBFLx8",
        authDomain: "crmclients-515a2.firebaseapp.com",
        databaseURL: "https://crmclients-515a2.firebaseio.com",
        projectId: "crmclients-515a2",
        storageBucket: "crmclients-515a2.appspot.com",
        messagingSenderId: "889254679488"
      });
    }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome my crm app!</Text>
        <Test />
        <Login />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
