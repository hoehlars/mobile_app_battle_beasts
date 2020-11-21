import {StyleSheet} from 'react-native';
import theme from '../../assets/styles/theme.style'

const styles = StyleSheet.create({
    RowBack: {
        alignItems: 'center',
        backgroundColor: theme.DARK_GRAY_COLOR,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '5%',
      },
      DeleteButton: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        backgroundColor: theme.ERROR_COLOR,
        left: 0,
      },
      DeleteIcon: {
        width: 41,
        height: 50,
      },
});

export default styles;
