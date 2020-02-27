import React from 'react';
import {withNavigation} from 'react-navigation';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

function RoomItem(props) {
  async function touchHandler() {
    const username = await AsyncStorage.getItem('@Focalchat:username');
    props.navigation.navigate('ChatRoom', {
      name: props.room.name,
      id: props.room.id,
      username: username,
    });
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => touchHandler()}>
      <Image
        style={styles.avatar}
        source={{
          uri: props.room.imageUrl,
        }}
      />
      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>{props.room.name}</Text>
        <Text style={styles.description}>{props.room.description}</Text>
      </View>
      <Icon name="angle-right" size={16} />
    </TouchableOpacity>
  );
}

export default withNavigation(RoomItem);
