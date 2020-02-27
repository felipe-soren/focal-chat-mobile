import {StyleSheet} from 'react-native';
import colors from '../../styles/color';
import {metrics} from '../../styles';

export const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.ligther,
  },
  loading: {
    marginTop: metrics.baseMargin * 2,
  },
  list: {
    marginBottom: metrics.baseMargin,
  },
});

export default Styles;
