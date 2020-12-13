import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import theme from '../../assets/styles/theme.style';

const styles = StyleSheet.create({
  ImageBackground: {
    width: '100%',
    height: 100,
    flex: 1,
    flexDirection: 'row',
  },
  Rotate90Degrees: {
    transform: [{ rotate: '270deg' }]
  },
  Image: {
    borderRadius: 10,
  },
  IconView: {
    backgroundColor: theme.LIGHT_COLOR,
    width: 25,
    height: 25,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10
  },
  IconImage: {
    width: 20,
    height: 20,
  },
  CardName: {
    fontSize: RFPercentage(1),
    fontFamily: 'Nunito-Bold',
    color: theme.LIGHT_COLOR,
    textTransform: 'uppercase',
    marginLeft: '5%',
    paddingTop: '5%',
  },
  CardDescription: {
    position: 'absolute',
    backgroundColor: theme.LIGHT_COLOR,
    height: '20%',
    width: '60%',
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    flex: 1,
    flexDirection: 'row',
    
  },
  CardDescriptionPoints: {
    fontFamily: 'Nunito-Bold',
    color: theme.DARK_GRAY_COLOR,
    fontSize: RFPercentage(2.2),
    marginLeft: '3%',
  },
  CardDescriptionPointsSmall: {
    fontSize: RFPercentage(1.5),
  },
  CardDescriptionIcon: {
    height: '100%',
    width: '15%',
    marginTop: '3%',
    marginLeft: '3%',
  },
  CardDescriptionIconSmall: {
    height: '90%',
    width: '10%',
    marginLeft: '8%'
  }
});

export default styles;
