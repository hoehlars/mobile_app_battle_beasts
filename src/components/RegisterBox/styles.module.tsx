import {StyleSheet} from 'react-native';
import theme from '../../assets/styles/theme.style';

const styles = StyleSheet.create({
    RegisterForm: {
        alignItems: 'stretch',
        margin: '2%',
    },
  TextInput: {
    borderWidth: 1,
    margin: '1%',
    padding: '2%',
    backgroundColor: theme.LIGHT_COLOR,
    borderRadius: 10,
  },
});

export default styles;
