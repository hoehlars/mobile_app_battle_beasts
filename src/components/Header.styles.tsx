import {StyleSheet} from 'react-native';
import theme from './../assets/styles/theme.style';

const styles = StyleSheet.create({
  HeaderText: {
    color: theme.GRAY_COLOR,
    fontSize: 30,
    fontFamily: 'Nunito-Regular',
  },
  Background: {
    backgroundColor: theme.PRIMARY_COLOR,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
