import {StyleSheet} from 'react-native';
import theme from './../../assets/styles/theme.style';
import {RFPercentage} from 'react-native-responsive-fontsize';

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
    fontSize: RFPercentage(5),
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
    height: 'auto',
    backgroundColor: theme.GRAY_COLOR,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 2,
    marginTop: '5%',
    padding: '5%',
  },
  AboutText: {
    flex: 1,
    fontFamily: 'Nunito-Regular',
    color: 'white',
    textAlign: 'justify',
    fontSize: RFPercentage(2),
  },
  PlayerImage: {
    aspectRatio: 0.65,
    width: '40%',
    resizeMode: 'contain',
    marginRight: '5%',
  },
  AnimalImage: {
    aspectRatio: 0.65,
    width: '40%',
    resizeMode: 'contain',
    marginLeft: '5%',
  },
  EquipmentImage: {
    aspectRatio: 0.65,
    width: '40%',
    resizeMode: 'contain',
    marginRight: '5%',
  },
  IconImage: {
    aspectRatio: 0.5,
    width: '10%',
    resizeMode: 'contain',
    marginRight: '5%',
  },
});

export default styles;
