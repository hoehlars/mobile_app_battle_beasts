import {StyleSheet} from 'react-native';
import theme from './../../assets/styles/theme.style';

const styles = StyleSheet.create({
  Background: {
    backgroundColor: theme.DARK_GRAY_COLOR,
    flex: 1,
  },
  HeaderTextBox: {
    flex: 1,
    alignItems: 'center',
  },
  AboutBox: {
    flex: 8,
    alignItems: 'center',
  },
  AboutTextBox: {
    width: '95%',
    height: 'auto',
    backgroundColor: theme.GRAY_COLOR,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 2,
    marginTop: '5%',
    padding: '5%',
  },
});

export default styles;
