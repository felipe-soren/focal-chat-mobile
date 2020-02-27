import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import colors from '../../styles/color';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';

function Welcome(props) {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(false);

  async function saveUser() {
    await AsyncStorage.setItem('@Focalchat:username', username);
  }

  async function signIn() {
    if (username === '') {
      setError(true);
      return;
    }
    const {navigation} = props;

    saveUser();
    navigation.navigate('Rooms');
  }

  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor={colors.primary} />
      <Text style={styles.title}>Bem-vindo</Text>
      <Text style={styles.text}>
        Para continuar digite o nome que deseja utilizar ao entrar em uma sala
        de chat
      </Text>
      {error && <Text style={styles.error}>Digite um nome válido!</Text>}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu nome"
          underlineColorAndroid="transparent"
          value={username}
          onChangeText={text => setUsername(text)}
        />

        <TouchableOpacity style={styles.button} onPress={() => signIn()}>
          <Text style={styles.buttonText}>Prosseguir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Welcome;
