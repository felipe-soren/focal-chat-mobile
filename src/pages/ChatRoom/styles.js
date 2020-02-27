import {StyleSheet} from 'react-native';
import colors from '../../styles/color';
import {metrics} from '../../styles';
import color from '../../styles/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ligther,
  },
  chatContainer: {
    padding: metrics.basePadding,
    flex: 1,
    backgroundColor: colors.ligther,
    borderRadius: metrics.baseRadius,
  },
  messages: {
    width: '100%',
    backgroundColor: colors.white,
  },
  messageItemRigth: {
    width: 'auto',
    alignItems: 'flex-end',
    padding: 8,
  },
  messageItemLeft: {
    alignItems: 'flex-start',
    width: 'auto',
    padding: 8,
  },
  messageContainerRigth: {
    padding: 10,
    backgroundColor: colors.lightGrey,
    borderRadius: 7,
    maxWidth: '80%',
  },
  messageContainerLeft: {
    padding: 10,
    backgroundColor: colors.lightGreen,
    borderRadius: 7,
    maxWidth: '80%',
  },
  message: {
    height: 50,
    marginTop: metrics.baseMargin,
    flexDirection: 'row',
  },
  messageInput: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 44,
    paddingHorizontal: metrics.basePadding,
  },
  messageButton: {
    marginTop: 3,
    backgroundColor: color.success,
    width: 40,
    height: 40,
    borderRadius: 150 / 2,
    marginHorizontal: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    height: 44,
    marginTop: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginRight: 2,
    color: '#ffffff',
  },
});

export default styles;
