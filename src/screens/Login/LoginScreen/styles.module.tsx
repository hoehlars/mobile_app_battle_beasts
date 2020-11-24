import {StyleSheet} from 'react-native';
import theme from '../../../assets/styles/theme.style';

const styles = StyleSheet.create({
  Forms: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.DARK_GRAY_COLOR,
  },
  Button: {
    height: '10%',
    width: '45%',
    margin: '5%',
  },
  ErrorBox: {
    flex: 0.5,
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: '1%',
  },
  HeaderBox: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.DARK_GRAY_COLOR,
  },
});

export default styles;
