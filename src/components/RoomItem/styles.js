import {StyleSheet} from 'react-native';
import colors from '../../styles/color';
import {metrics} from '../../styles';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: metrics.basePadding,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,
    flexDirection: 'row',
    alignItems: 'center',
  },

  descriptionContainer: {
    flex: 1,
    height: 80,
    justifyContent: 'center',
    marginLeft: metrics.baseMargin,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 150 / 2,
    overflow: 'hidden',
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.darker,
    marginTop: metrics.baseMargin,
    marginBottom: metrics.baseMargin,
  },

  description: {
    color: colors.regular,
    marginBottom: metrics.baseMargin,
  },
});

export default Styles;
