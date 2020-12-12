import * as React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import styles from './SearchingBox.style';

class SearchingBox extends React.Component<{}, {}> {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  componentDidMount() {
    Orientation.lockToPortrait();
  }

  render() {
    return (
      <View style={styles.Background}>
        <View style={styles.SearchingBox}>
          <Text style={styles.SearchingBoxText}>Searching opponent...</Text>
        </View>
      </View>
    );
  }
}

export default SearchingBox;
