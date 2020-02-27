import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Welcome from './pages/Welcome';
import Rooms from './pages/Rooms';
import ChatRoom from './pages/ChatRoom';

const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Welcome,
        Rooms,
        ChatRoom,
      },
      {
        initialRouteName: userLogged ? 'Rooms' : 'Welcome',
      },
    ),
  );

export default Routes;
