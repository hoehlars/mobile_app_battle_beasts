import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import theme from '../../../assets/styles/theme.style';

const styles = StyleSheet.create({
  HeaderText: {
    color: theme.LIGHT_COLOR,
    fontSize: RFPercentage(2.5),
    fontFamily: 'Nunito-Bold',
    marginLeft: '5%',
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
  Error: {
    flex: 0.5,
    alignItems: 'center',
  },
  TextError: {
    color: theme.ERROR_COLOR,
    fontFamily: 'Nunito-Bold',
    fontSize: RFPercentage(2.5),
  },
  UpdateSuccess: {
    flex: 0.5,
    alignItems: 'center',
  },
  TextSuccess: {
    color: theme.SUCCESS_COLOR,
    fontFamily: 'Nunito-Bold',
    fontSize: RFPercentage(2.5),
  },
  CardListItem: {
    backgroundColor: theme.LIGHT_COLOR,
    padding: '4%',
    marginVertical: '4%',
    marginHorizontal: '10%',
    borderRadius: 10,
  }
});

export default styles;
