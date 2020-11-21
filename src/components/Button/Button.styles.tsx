import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import theme from '../../assets/styles/theme.style';

const styles = StyleSheet.create({
  Button: {
    backgroundColor: theme.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  ButtonText: {
    color: theme.GRAY_COLOR,
    fontSize: RFPercentage(3),
    fontFamily: 'Nunito-Bold',
  },
});

export default styles;
