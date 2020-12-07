import {StyleSheet} from 'react-native';
import theme from '../assets/styles/theme.style';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  UserRow: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'black',
  },
  ItemBox: {
    width: '30%',
    height: 'auto',
    backgroundColor: 'green',
    borderColor: 'black',
    borderWidth: 2,
  },
  ItemBoxRank: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: '5%',
    borderRightWidth: 2,
    borderRightColor: 'black',
  },
  ItemBoxUsername: {
    flex: 4,
    paddingRight: '5%',
    borderRightWidth: 2,
    borderRightColor: 'black',
  },
  ItemBoxSkill: {
    flex: 2,
    paddingRight: '5%',
  },
  ItemsText: {
    flex: 1,
    fontFamily: 'Nunito-Regular',
    color: 'white',
    textAlign: 'justify',
    fontSize: RFPercentage(2),
  },
  Background: {
    backgroundColor: theme.GRAY_COLOR,
  },
  HighlightedBackground: {
    backgroundColor: theme.PRIMARY_COLOR,
  },
});

export default styles;
