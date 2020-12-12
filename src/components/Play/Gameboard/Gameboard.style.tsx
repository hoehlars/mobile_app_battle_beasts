import {StyleSheet} from 'react-native';
import theme from '../../../assets/styles/theme.style';

const styles = StyleSheet.create({
  Background: {
      flex: 1,
      backgroundColor: theme.GRAY_COLOR,
      flexDirection: 'row',
  },
  PlayerAvatar: {
    flex: 1,
    backgroundColor: 'red',
  },
  Opponentfield:{
    flex: 1,
    backgroundColor: 'green',
  },
  Playerfield:{
    flex: 1,
    backgroundColor: 'yellow',
  },
  Gameboard: {
    flex: 5,
    backgroundColor: 'pink',
  }
});

export default styles;
