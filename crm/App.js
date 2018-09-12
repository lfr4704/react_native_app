/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';
import Test from './Test';
import Login from './Login';
import Loader from './Loader';
import PeopleList from './PeopleList';

type Props = {};
export default class App extends Component<Props> {
  state ={ loggedIn: null };
    componentDidMount() {
      firebase.initializeApp({
        apiKey: "AIzaSyCntrqWZw7bnK4p5S5GYzxh93v1jtBFLx8",
        authDomain: "crmclients-515a2.firebaseapp.com",
        databaseURL: "https://crmclients-515a2.firebaseio.com",
        projectId: "crmclients-515a2",
        storageBucket: "crmclients-515a2.appspot.com",
        messagingSenderId: "889254679488"
      });

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ loggedIn: false });
        }
      });
    }

    renderInitialView() {
      switch (this.state.loggedIn) {
        case true:
          return <PeopleList />
        case false:
          return <Login />;
        default:
          return <Loader size="large" />;
      }
    }

  render() {
    return (
      <View style={styles.container}>
        {this.renderInitialView()}
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
});
