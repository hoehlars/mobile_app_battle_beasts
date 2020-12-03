import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  AnimalImage: {
    aspectRatio: 0.65,
    width: '40%',
    resizeMode: 'contain',
    marginLeft: '5%',
  },
  IconImage: {
    aspectRatio: 0.5,
    width: '10%',
    resizeMode: 'contain',
    marginRight: '5%',
  },
  ViewAnimalImage: {
    flexDirection: 'row',
    marginTop: '5%',
    marginBottom: '5%',
  },
  ViewIconImage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
