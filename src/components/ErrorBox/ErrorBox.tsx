import * as React from 'react';
import {Text, View} from 'react-native';
import styles from './ErrorBox.styles';

interface ErrorBoxProps {
  text: string;
}

class ErrorBox extends React.Component<ErrorBoxProps, {}> {
  constructor(props: Readonly<ErrorBoxProps>) {
    super(props);
  }

  render() {
    return (
      <View>
        <View style={[styles.ErrorBox]}>
          <Text style={[styles.TextError]}>{this.props.text}</Text>
        </View>
      </View>
    );
  }
}

export default ErrorBox;
