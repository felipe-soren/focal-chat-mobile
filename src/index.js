import React, {Component} from 'react';
import createNavigator from './routes';
import AsyncStorage from '@react-native-community/async-storage';
import Routes from './routes';

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false,
  };

  async componentDidMount() {
    const username = await AsyncStorage.getItem('@Focalchat:username');

    this.setState({
      userChecked: true,
      userLogged: !!username,
    });
  }

  render() {
    const {userChecked, userLogged} = this.state;
    if (!userChecked) return null;

    const Routes = createNavigator(userLogged);

    return <Routes />;
  }
}
