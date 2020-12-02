import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  TitleText: {
    fontWeight: 'bold',
    fontSize: RFPercentage(3),
    flex: 1,
    fontFamily: 'Nunito-Regular',
    color: 'white',
    textAlign: 'justify',
  },
  AboutText: {
    flex: 1,
    fontFamily: 'Nunito-Regular',
    color: 'white',
    textAlign: 'justify',
    fontSize: RFPercentage(2),
  },
});

export default styles;
