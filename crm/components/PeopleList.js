import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView } from 'react-native';
import { connect } from 'react-redux';
import PeopleItem from './PeopleItem';
import Icon from 'react-native-vector-icons/EvilIcons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 353,
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 20,
  },
});

class PeopleList extends Component {
    constructor() {
      super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state= {
          dataSource: ds.cloneWithRows([this.props.people]),
        };
    }
    static navigationOptions = {
            tabBarLabel: 'People',
            tabBarIcon: ({ tintColor }) => (
              <Icon
              name={'user'}
              size={50}
              style={{ color: tintColor }}
              />
            ),
    };

  render() {
    return (
      <View style={styles.container}>
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <PeopleItem people={rowData} />}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { people: state.people };
};

export default connect(mapStateToProps)(PeopleList);
