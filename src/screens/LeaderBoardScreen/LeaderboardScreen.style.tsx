import {StyleSheet} from 'react-native';
import theme from './../../assets/styles/theme.style';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  Background: {
    backgroundColor: theme.DARK_GRAY_COLOR,
    flex: 1,
  },
  HeaderTextBox: {
    flex: 1,
    alignItems: 'center',
  },
  HeaderText: {
    marginTop: '2.5%',
    marginBottom: '2.5%',
    color: theme.PRIMARY_COLOR,
    fontSize: RFPercentage(5),
    fontFamily: 'Nunito-Bold',
    flex: 1,
  },
  LeaderboardText: {
    marginBottom: '2%',
    color: theme.PRIMARY_COLOR,
    fontSize: RFPercentage(2.5),
    fontFamily: 'Nunito-Bold',
    textAlign: 'center',
  },
  RankBox: {
    flex: 9,
    alignItems: 'center',
  },
  Ranks: {
    width: '95%',
    height: 'auto',
    marginBottom: '5%',
  },
  AboutText: {
    flex: 1,
    fontFamily: 'Nunito-Regular',
    color: 'white',
    textAlign: 'justify',
    fontSize: RFPercentage(2),
  },
});

export default styles;
