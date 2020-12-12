import {StyleSheet} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import theme from '../../../assets/styles/theme.style';

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    backgroundColor: theme.DARK_GRAY_COLOR,
  },
  SearchingBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  SearchingBoxText: {
    color: theme.PRIMARY_COLOR,
    textAlign: 'center',
    fontSize: RFPercentage(5),
    fontFamily: 'Nunito-Bold',
  },
});

export default styles;
