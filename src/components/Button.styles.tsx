import {StyleSheet} from 'react-native';
import theme from './../assets/styles/theme.style';

const styles = StyleSheet.create({
      Button: {
        backgroundColor: theme.PRIMARY_COLOR,
        minHeight: '20%',
        minWidth: '80%',
        flexShrink: 0,
        marginTop: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      },
      ButtonText: {
        color: theme.GRAY_COLOR,
        fontSize: 23,
        fontFamily: 'Nunito-Bold',
      },
});

export default styles;
