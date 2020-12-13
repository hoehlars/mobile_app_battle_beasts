import {StyleSheet} from 'react-native';
import theme from '../../../assets/styles/theme.style';

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    backgroundColor: theme.DARK_GRAY_COLOR,
    borderWidth: 3,
  },
  HeaderBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '3%',
  },
  Header: {
    flex: 2,
    alignItems: 'center',
  },
  ButtonBox: {
    flex: 1,
    alignItems: 'center',
  },
  Button: {
    backgroundColor: theme.PRIMARY_COLOR,
    minHeight: '10%',
    minWidth: '80%',
    marginTop: '5%',
    justifyContent: 'center',
    borderRadius: 10,
  },
  CardBox: {
    flex: 2,
    backgroundColor: 'white',
  },
});

export default styles;
