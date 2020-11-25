import {StyleSheet} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import theme from '../../../assets/styles/theme.style';

const styles = StyleSheet.create({
  Line: {
    borderBottomColor: theme.LIGHT_COLOR,
    borderBottomWidth: 1,
  },
  SwipeableList: {
    backgroundColor: theme.DARK_GRAY_COLOR,
    flex: 10,
    marginBottom: 0,
  },
  FloatingAction: {
    flex: 1,
    backgroundColor: theme.DARK_GRAY_COLOR,
    marginBottom: '10%s'
  },
  TextInput: {
    height: '8%',
    borderColor: theme.GRAY_COLOR,
    borderWidth: 1,
  },
  DeckError: {
    flex: 0.5,
    alignItems: 'center',
  },
  Header: {
    flex: 2,
    alignItems: 'center',
    paddingTop: '10%',
    backgroundColor: theme.DARK_GRAY_COLOR,
  },
  DeckSpace: {
    flex: 0.5,
    alignItems: 'center',
  },
  TextDeckSpace: {
    color: theme.PRIMARY_COLOR,
    fontFamily: 'Nunito-Bold',
    fontSize: RFPercentage(2.5),
  },
  BuyButton: {
    backgroundColor: theme.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flex: 0.,
    marginRight: '5%',
    marginBottom: '4%'
  },
  ButtonFloatingActionBox: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: theme.DARK_GRAY_COLOR
  }
});

export default styles;
