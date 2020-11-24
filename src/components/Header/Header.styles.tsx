import {StyleSheet} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import theme from '../../assets/styles/theme.style';

const styles = StyleSheet.create({
  HeaderText: {
    marginTop: '2.5%',
    marginBottom: '2.5%',
    color: theme.PRIMARY_COLOR,
    fontSize: RFPercentage(5),
    fontFamily: 'Nunito-Bold',
    flex: 1,
  },
});

export default styles;
