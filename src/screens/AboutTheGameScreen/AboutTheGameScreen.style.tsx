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
  HeaderText: {
    marginTop: '5%',
    color: theme.PRIMARY_COLOR,
    fontSize: 25,
    fontFamily: 'Nunito-Bold',
    flex: 1,
    backgroundColor: 'white',
  },
  AboutBox: {
    flex: 7,
    backgroundColor: 'green',
    alignItems: 'center',
  },
  AboutTextBox: {
    width: '95%',
    backgroundColor: theme.GRAY_COLOR,
    borderRadius: 20,
  },
  AboutText: {
    fontFamily: 'Nunito-Regular',
    margin: '5%',
    color: 'white',
    textAlign: 'justify',
  },
});

export default styles;
