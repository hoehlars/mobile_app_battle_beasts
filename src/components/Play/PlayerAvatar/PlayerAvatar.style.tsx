/*eslint-disable*/
import {StyleSheet} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import theme from '../../../assets/styles/theme.style';

const styles = StyleSheet.create({
    Background: {
        flex: 1,
        backgroundColor: theme.GRAY_COLOR,
      },
      TouchableArea: {
        flex: 1,
      },
      StatBox: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 2,
          borderColor: theme.GRAY_COLOR,
      },
      StatText: {
        color: theme.LIGHT_COLOR,
        fontSize: RFPercentage(2),
        fontFamily: 'Nunito-Bold',
      },
      Health: {
        backgroundColor: 'firebrick',
      },
      ActionPoints: {
        backgroundColor: 'blue',
      },
      PlayerImageBox: {
        flex: 3,
          alignItems: 'center',
          justifyContent: 'center',
      },
      PlayerImage: {
          width: 50,
          height: 50,
      },

});

export default styles;
