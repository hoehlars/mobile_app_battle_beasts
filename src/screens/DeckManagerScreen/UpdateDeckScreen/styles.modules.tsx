import {StyleSheet} from 'react-native';
import theme from './../../../assets/styles/theme.style';

const styles = StyleSheet.create({
  HeaderText: {
    color: theme.LIGHT_COLOR,
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
    marginLeft: 10,
  },
  Background: {
    backgroundColor: theme.DARK_GRAY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  Header: {
    flex: 1,
    flexDirection: 'row',
  },
  LineBelowHeader: {
    borderBottomColor: theme.LIGHT_COLOR,
    borderBottomWidth: 1,
  },
  Lists: {
    backgroundColor: theme.DARK_GRAY_COLOR,
    flex: 10,
    flexDirection: 'row',
  },
  LineInTheMiddle: {
    borderLeftColor: theme.LIGHT_COLOR,
    borderLeftWidth: 1,
  },
  LineInTheMiddleHeader: {
    borderLeftColor: theme.LIGHT_COLOR,
    borderLeftWidth: 1,
  },
  AvailableCards: {
    flex: 1,
  },
  YourDeck: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  error: {
    flex: 0.5,
    alignItems: 'center',
  },
  TextError: {
    color: theme.ERROR_COLOR,
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
  },
  UpdateSuccess: {
    flex: 0.5,
    alignItems: 'center',
  },
  TextSuccess: {
    color: theme.SUCCESS_COLOR,
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
  },
});

export default styles;
