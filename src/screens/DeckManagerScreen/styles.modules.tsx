import {StyleSheet} from 'react-native';
import theme from './../../assets/styles/theme.style';

const styles = StyleSheet.create({
  Line: {
    borderBottomColor: theme.LIGHT_COLOR,
    borderBottomWidth: 1,
  },
  SwipeableList: {
    backgroundColor: theme.DARK_GRAY_COLOR,
    flex: 10,
    marginBottom: 0,
  },
  RowFront: {
    alignItems: 'center',
    backgroundColor: theme.DARK_GRAY_COLOR,
    borderBottomColor: theme.LIGHT_COLOR,
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 80,
  },
  RowBack: {
    alignItems: 'center',
    backgroundColor: theme.DARK_GRAY_COLOR,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
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
  ListItem: {
    color: theme.LIGHT_COLOR,
    fontFamily: 'Nunito-Bold',
    fontSize: 36,
  },
  FloatingAction: {
    flex: 1,
    backgroundColor: theme.DARK_GRAY_COLOR,
  },
  TextInput: {
    height: 60,
    borderColor: theme.GRAY_COLOR,
    borderWidth: 1,
  },
  DeckError: {
    flex: 0.5,
    alignItems: 'center',
  },
  TextDeckError: {
    color: theme.ERROR_COLOR,
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
  },
});

export default styles;
