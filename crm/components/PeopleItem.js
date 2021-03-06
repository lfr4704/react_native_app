import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { getTheme } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';

const theme = getTheme();

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
  },
  title: {
    top:40,
    left: 100,
    fontSize: 24,
    position:'absolute',
  },
  image: {
    height: 100,
  },
  action: {
    backgroundColor: 'black',
    color: 'white',
  },
  icon: {
    position: 'absolute',
    top: 15,
    left: 0,
    color: 'white',
    backgroundColor: 'rgba(255,255,255,0)',
  },
});

const PeopleItem = (props) => {
  return(
    <View style={[theme.cardStyle, styles.card]}>
      <Image
        source={{uri: '/Users/computer/projects/react_native_app/crm/images/background.jpg'}}
        style={[theme.cardImageStyle, styles.image]}/>
      <Icon
        name={'user'}
        size={100}
        style={styles.icon}
      />
      <Text style={[theme.cardtTitleStyle, styles.title]}>{props.people.first_name} {props.people.last_name}</Text>
      <Text style={[theme.cardActionStyle, styles.action]}>{props.people.company}</Text>
    </View>
  );
};

export default connect(null, actions)(PeopleItem);
