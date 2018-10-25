/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    paddingTop: 20,
    backgroundColor: '#e5e5e5',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 10,
  },
  icon: {
    paddingBottom: 2,
  },
});

export default class AddPerson extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text>Add Person</Text>
      </View>
    )
  }
}
