import React from 'react';
import {withNavigation} from 'react-navigation';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

function Header({navigation, title, room}) {
  async function signOut() {
    await AsyncStorage.clear();

    navigation.navigate('Welcome');
  }

  function backToRooms() {
    navigation.navigate('Rooms');
  }

  return room === 'Rooms' ? (
    <View style={styles.container}>
      <View />
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={() => signOut()}>
        <Icon name="exchange" size={16} style={styles.icon} />
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => backToRooms()}>
        <Icon name="arrow-left" size={16} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View />
    </View>
  );
}

export default withNavigation(Header);
