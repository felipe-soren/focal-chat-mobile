import React, {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';

import Header from '../../components/Header';
import Api from '../../services/api';
import styles from './styles';
import RoomItem from '../../components/RoomItem';

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  function renderListItem({item}) {
    return <RoomItem room={item} />;
  }

  function renderList() {
    return (
      <FlatList
        style={styles.list}
        data={rooms}
        keyExtractor={item => String(item.id)}
        renderItem={renderListItem}
      />
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await Api.get('/room');
      setRooms(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <View style={styles.Container}>
        <Header title="Salas" room="Rooms" />
        {loading ? <ActivityIndicator style={styles.loading} /> : renderList()}
      </View>
    </>
  );
}

export default Rooms;
