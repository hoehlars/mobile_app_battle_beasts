import {StyleSheet} from 'react-native';
import theme from './../../assets/styles/theme.style';

const styles = StyleSheet.create({
    HeaderText: {
        color: theme.LIGHT_COLOR,
        fontSize: 18,
        fontFamily: 'Nunito-Bold',
        marginLeft: 10,
        marginTop: 10
      },
      Background: {
        backgroundColor: theme.DARK_GRAY_COLOR,
        height: 50,
        flex: 1,
        flexDirection: 'column',

      },
      Header: {
          flex: 1,
          flexDirection: 'row',
          height: 50
      },
});

export default styles;
