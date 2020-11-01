import {StyleSheet} from 'react-native';
import theme from './../assets/styles/theme.style';

const styles = StyleSheet.create({
  HeaderText: {
    color: theme.LIGHT_COLOR,
    fontSize: 36,
    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold'
  },
  Background: {
    backgroundColor: theme.DARK_GRAY_COLOR,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
