import {StyleSheet} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import theme from '../../assets/styles/theme.style';

const styles = StyleSheet.create({
  HandWrapper: {
    flex: 1,
    backgroundColor: theme.DARK_GRAY_COLOR
  },
  HandCard: {
    flex: 1,
    backgroundColor: theme.LIGHT_COLOR,
    padding: '1%',
    marginVertical: '2%',
    marginHorizontal: 5,
    borderRadius: 10,
    width: 150,
    height: '100%'
  },
  SilencedCard: {
    backgroundColor: theme.ERROR_COLOR
  },
  SelectMode: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  SelectButton: {
    flex: 1,
    borderRadius: 10,
  }
});

export default styles;
