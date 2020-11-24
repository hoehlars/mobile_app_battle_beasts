import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import theme from '../../assets/styles/theme.style';

const styles = StyleSheet.create({
  TextError: {
    color: theme.ERROR_COLOR,
    fontFamily: 'Nunito-Bold',
    fontSize: RFPercentage(2.5),
  },
});

export default styles;
