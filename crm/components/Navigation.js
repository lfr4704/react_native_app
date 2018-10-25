import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import CompanyList from './CompanyList'
import PeopleList from './PeopleList';
import AddPerson from './AddPerson';

const Navigation = createBottomTabNavigator(
{
  PeopleList: { screen: PeopleList },
  AddPerson: { screen: AddPerson },
  CompanyList: { screen: CompanyList },
},
{
    tabBarOptions: {
      tintColor: 'white',
      inactiveTintColor: '#80cbc4',
      swipeEnabled: true,
      showLabel: false,
      style: {
        backgroundColor: '#26a69a',
      },
    },
}
);

export default Navigation;
