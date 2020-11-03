import {StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
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
    color: 'white',
    fontSize: 25,
    fontFamily: 'Nunito-Bold',
    flex: 1,
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
