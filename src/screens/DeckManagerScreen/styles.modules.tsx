import {StyleSheet} from 'react-native';
import theme from './../../assets/styles/theme.style';

const styles = StyleSheet.create({
  Line: {
    borderBottomColor: theme.LIGHT_COLOR,
    borderBottomWidth: 1,
  },
  SwipeableList: {
    backgroundColor: theme.DARK_GRAY_COLOR,
    flex: 1,
},
DeleteText: {
    color: theme.LIGHT_COLOR,
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
  backgroundColor: 'red',
  left: 0,
}, 
ListItem: {
color: theme.LIGHT_COLOR,
fontWeight: 'bold',
fontSize: 36
}

});

export default styles;
