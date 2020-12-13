import {StyleSheet} from 'react-native';
import theme from '../../../assets/styles/theme.style';

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    backgroundColor: theme.GRAY_COLOR,
    flexDirection: 'row',
  },
  PlayerAvatar: {
    flex: 1,
    backgroundColor: 'red',
  },
  Opponentfield: {
    flex: 1,
    backgroundColor: 'green',
  },
  Playerfield: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  Gameboard: {
    flex: 5,
    backgroundColor: 'pink',
  },
  PlayedPlayerCardsOffense: {
    flex: 1,
    backgroundColor: theme.LIGHT_COLOR,
    padding: '4%',
    marginVertical: '1%',
    marginHorizontal: 5,
    borderRadius: 10,
    width: 150,
    height: '90%',
  }
  Turn: {
    flex: 0.07,
    flexWrap: "wrap",
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'yellow'
  },
  TextTurn: {
    backgroundColor: theme.DARK_GRAY_COLOR,
    color: theme.PRIMARY_COLOR,
    fontFamily: 'Nunito-Bold',
    borderRadius: 10,
    padding: '0.5%',
    marginBottom: '2%'
  },
  PlayedCardsOffense: {
      flex: 1,
      backgroundColor: theme.LIGHT_COLOR,
      padding: '4%',
      marginVertical: '1%',
      marginHorizontal: 5,
      borderRadius: 10,
      width: 150,
      height: '90%'
  },
  PlayedCardsDefense: {
    flex: 1,
    backgroundColor: theme.LIGHT_COLOR,
    padding: '4%',
    marginHorizontal: 5,
    borderRadius: 10,
    width: 150,
    height: '100%',
    marginTop: '-2%'
},
AttackableOpponentCard: {
  backgroundColor: theme.SUCCESS_COLOR
},
SilencedOpponentCard: {
  backgroundColor: theme. ERROR_COLOR
}
});

export default styles;
