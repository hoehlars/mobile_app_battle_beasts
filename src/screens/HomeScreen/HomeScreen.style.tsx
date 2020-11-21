import {StyleSheet} from 'react-native';
import theme from './../../assets/styles/theme.style';

const styles = StyleSheet.create({
  Background: {
    backgroundColor: theme.DARK_GRAY_COLOR,
    flex: 1,
  },
  HeaderBox: {
    flex: 1,
    alignItems: 'center',
  },
  HeaderTextBox: {
    flex: 1,
    flexDirection: 'row',
  },
  HeaderText: {
    marginTop: '5%',
    color: theme.LIGHT_COLOR,
    fontSize: 25,
    fontFamily: 'Nunito-Bold',
    flex: 1,
  },
  LogoutButton: {
    backgroundColor: theme.PRIMARY_COLOR,
    justifyContent: 'center',
    marginTop: '5%',
    alignItems: 'center',
    borderRadius: 10,
    flex: 0.2,
    marginRight: '2%',
  },
  LogoutText: {
    fontFamily: 'Nunito-Bold',
    color: theme.GRAY_COLOR,
  },
  ImageBox: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeaderImage: {
    marginTop: '10%',
    width: 177,
    height: 135,
  },
  ButtonBox: {
    flex: 2,
    alignItems: 'center',
  },
  Button: {
    backgroundColor: theme.PRIMARY_COLOR,
    minHeight: '20%',
    minWidth: '80%',
    flexShrink: 0,
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  ButtonText: {
    color: theme.GRAY_COLOR,
    fontSize: 23,
    fontFamily: 'Nunito-Bold',
  },
});

export default styles;
