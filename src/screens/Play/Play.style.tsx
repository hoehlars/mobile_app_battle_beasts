import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  PlayField: {
    flex: 1,
    flexDirection: 'row',
  },
  PlayScreen: {
    flex: 1,
  },
  Gameboard: {
    flex: 10.5,
  },
  Hand: {
    flex: 3,
  },
  NextPhaseButton: {
    flex: 1,
    backgroundColor: theme.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    right: 0,
    bottom: '58%',
  },
});

export default styles;
