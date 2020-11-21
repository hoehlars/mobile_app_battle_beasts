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
  }
});

export default styles;
