import {StyleSheet} from 'react-native';
import theme from './../../assets/styles/theme.style';

const styles = StyleSheet.create({
  Background: {
    backgroundColor: theme.DARK_GRAY_COLOR,
    flex: 1,
  },
  HeaderBox: {
    flex: 1.2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.DARK_GRAY_COLOR,
    marginLeft: '3%',
  },
  Header: {
    flex: 1,
    alignItems: 'center',
  },
  LogoutButton: {
    backgroundColor: theme.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flex: 0.3,
    marginRight: '5%',
  },
  LogoutText: {
    fontFamily: 'Nunito-Bold',
    color: theme.GRAY_COLOR,
  },
  ImageBox: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeaderImage: {
    marginTop: '10%',
    width: 177,
    height: 177,
  },
  ButtonBox: {
    flex: 4,
    alignItems: 'center',
  },
  Button: {
    backgroundColor: theme.PRIMARY_COLOR,
    minHeight: '10%',
    minWidth: '45%',
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  BotAndDifficultyButton: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: '14%',
  },
  BotButton: {
    backgroundColor: theme.PRIMARY_COLOR,
    height: '40%',
    width: '70%',
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  DifficultyButtons: {
    flex: 1,
    marginLeft: '2%',
    marginBottom: '12%',
  },
  DifficultyButton: {
    flex: 1,
    marginTop: '4%',
    width: '60%',
  },
});

export default styles;
