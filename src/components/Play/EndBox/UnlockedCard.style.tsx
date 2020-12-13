import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import theme from '../../../assets/styles/theme.style';

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: theme.DARK_GRAY_COLOR,
    justifyContent: 'center',
  },
  TitleBox: {
    flex: 1,
  },
  TitleBoxText: {
    color: theme.PRIMARY_COLOR,
    fontSize: RFPercentage(3),
    textAlign: 'left',
    fontFamily: 'Nunito-Bold',
    marginLeft: '30%',
    marginTop: '10%',
    flex: 1,
  },
  CardBox: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  CardItem: {
    backgroundColor: theme.LIGHT_COLOR,
    padding: '2%',
    marginVertical: '10%',
    marginHorizontal: 5,
    borderRadius: 10,
    width: 200,
    height: 200,
  },
});

export default styles;
