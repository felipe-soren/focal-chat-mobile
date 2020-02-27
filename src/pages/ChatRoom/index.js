import React, {Component} from 'react';
import socketIOClient from 'socket.io-client';
import {withNavigation} from 'react-navigation';
import Header from '../../components/Header';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  BackHandler,
  Keyboard,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

class ChatRoom extends Component {
  _isMounted = false;
  state = {
    messages: [],
    messageInput: '',
    keyboardOpened: false,
  };

  constructor(props) {
    super();
    this.socket = socketIOClient('https://focalchatsocket.herokuapp.com/');
    this.socket.emit('room-created', props.navigation.getParam('id'));
    this.socket.emit(
      'new-user',
      props.navigation.getParam('id'),
      props.navigation.getParam('username'),
    );
  }

  sendMessage = () => {
    if (this.state.messageInput === '') {
      return;
    }
    this.setState({messageInput: ''});
    this.socket.emit(
      'send-chat-message',
      this.props.navigation.getParam('id'),
      this.state.messageInput,
    );
    this.setState({
      messages: this.state.messages.concat([
        {
          local: true,
          name: 'Você',
          message: this.state.messageInput,
          time: moment().format('HH:mm'),
        },
      ]),
    });
  };

  componentWillUnmount() {
    // Prevent development Warning
    this._isMounted = false;
    this.socket.disconnect();
  }

  // This way to manipule keyboard events prevent some errors
  componentDidUpdate(prevState) {
    if (prevState.keyboardOpened !== this.state.keyboardOpened) {
      this.scrollView.scrollToEnd({animated: true});
    }
  }

  async componentDidMount() {
    // Prevent development Warning
    this._isMounted = true;

    //Add Listeners
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () =>
      this.setState({keyboardOpened: false}),
    );
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () =>
      this.setState({keyboardOpened: true}),
    );
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.navigate('Rooms');
      return true;
    });

    //WebSocket Events
    this.socket.on('chat-message', data => {
      this.setState({
        messages: this.state.messages.concat([
          {
            local: false,
            name: data.name,
            message: data.message,
            time: moment().format('HH:mm'),
          },
        ]),
      });
    });

    this.socket.on('user-connected', name => {
      this.setState({
        messages: this.state.messages.concat({
          local: false,
          name: name,
          time: moment().format('HH:mm'),
          message: 'Entrou na sala',
        }),
      });
    });

    this.socket.on('user-disconnected', name => {
      this.setState({
        messages: this.state.messages.concat({
          local: false,
          name: name,
          time: moment().format('HH:mm'),
          message: 'Saiu da sala',
        }),
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title={this.props.navigation.getParam('name')} />
        <View style={styles.chatContainer}>
          <ScrollView
            onContentSizeChange={() => {
              this.scrollView.scrollToEnd();
            }}
            style={styles.messages}
            ref={view => {
              this.scrollView = view;
            }}>
            {this.state.messages.map((message, index) => (
              <View
                style={
                  message.local
                    ? styles.messageItemRigth
                    : styles.messageItemLeft
                }
                key={index}>
                <View
                  style={
                    message.local
                      ? styles.messageContainerRigth
                      : styles.messageContainerLeft
                  }>
                  <Text>{`${message.name}: ${message.message}`}</Text>
                  <Text>{message.time}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
          <View style={styles.message}>
            <TextInput
              onClick={() => this.scrollView.scrollToEnd({animated: true})}
              style={styles.messageInput}
              autoCapitalize="sentences"
              autoCorrect={true}
              placeholder="Digite sua mensagem"
              underlineColorAndroid="transparent"
              value={this.state.messageInput}
              onChangeText={text => this.setState({messageInput: text})}
            />
            <TouchableOpacity
              style={styles.messageButton}
              onPress={() => this.sendMessage()}>
              <Icon name="paper-plane" size={16} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default withNavigation(ChatRoom);
