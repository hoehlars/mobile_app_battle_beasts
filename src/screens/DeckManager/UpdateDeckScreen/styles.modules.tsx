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
  item: {
    backgroundColor: theme.LIGHT_COLOR,
    padding: '4%',
    marginVertical: '4%',
    marginHorizontal: '10%',
    borderRadius: 10,
  },
  error: {
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
  ImageBackground: {
    width: '100%',
    height: 100,
    flex: 1,
    flexDirection: 'row',
  },
  Image: {
    borderRadius: 10,
  },
  IconView: {
    backgroundColor: theme.LIGHT_COLOR,
    width: 25,
    height: 25,
    borderBottomRightRadius: 10,
  },
  IconImage: {
    width: 20,
    height: 20,
  },
  CardName: {
    fontSize: RFPercentage(1),
    fontFamily: 'Nunito-Bold',
    color: theme.LIGHT_COLOR,
    textTransform: 'uppercase',
    marginLeft: '5%',
    paddingTop: '5%',
  },
  CardDescription: {
    position: 'absolute',
    backgroundColor: theme.LIGHT_COLOR,
    height: '20%',
    width: '60%',
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 10,
    flex: 1,
    flexDirection: 'row',
  },
  CardDescriptionPoints: {
    fontFamily: 'Nunito-Bold',
    color: theme.DARK_GRAY_COLOR,
    fontSize: RFPercentage(2.2),
    marginLeft: '3%',
  },
  CardDescriptionIcon: {
    height: '100%',
    width: '15%',
    marginTop: '3%',
    marginLeft: '3%',
  },
});

export default styles;
