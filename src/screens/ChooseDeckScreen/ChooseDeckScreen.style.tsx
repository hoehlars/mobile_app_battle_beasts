import {StyleSheet} from 'react-native';
import theme from '../../assets/styles/theme.style';

const styles = StyleSheet.create({
  Line: {
    borderBottomColor: theme.LIGHT_COLOR,
    borderBottomWidth: 1,
  },
  SwipeableList: {
    backgroundColor: theme.DARK_GRAY_COLOR,
    flex: 10,
    marginBottom: 0,
  },
  Header: {
    flex: 2,
    alignItems: 'center',
    paddingTop: '10%',
    backgroundColor: theme.DARK_GRAY_COLOR,
  },
});

export default styles;
