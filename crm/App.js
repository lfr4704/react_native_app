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
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Login from './components/Login';
import Loader from './components/Loader';
import Navigation from './components/Navigation';
import reducers from './reducers/PeopleReducer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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
          return <Navigation />
        case false:
          return <Login />;
        default:
          return <Loader size="large" />;
      }
    }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {this.renderInitialView()}
        </View>
      </Provider>
    );
  }
}
