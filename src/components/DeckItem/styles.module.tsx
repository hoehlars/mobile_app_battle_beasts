import {StyleSheet} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import theme from '../../assets/styles/theme.style'

const styles = StyleSheet.create({
  RowFront: {
    alignItems: 'center',
    backgroundColor: theme.DARK_GRAY_COLOR,
    borderBottomColor: theme.LIGHT_COLOR,
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 80,
  },
  ListItem: {
    color: theme.LIGHT_COLOR,
    fontFamily: 'Nunito-Bold',
    fontSize: RFPercentage(4),
  },
});

export default styles;
