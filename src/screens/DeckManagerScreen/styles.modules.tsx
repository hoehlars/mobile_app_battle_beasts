import {StyleSheet} from 'react-native';
import theme from './../../assets/styles/theme.style';

const styles = StyleSheet.create({
  Container: {
    padding: 10,
    marginTop: 5,
    backgroundColor: theme.GRAY_COLOR,
    alignItems: 'center',
  },
  Text: {
    color: theme.LIGHT_COLOR,
    fontSize: 35,
    fontFamily: theme.FONT,
  },
});

export default styles;
