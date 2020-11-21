import * as React from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import styles from './ErrorBox.styles';

interface ErrorBoxProps {
  text: string;
  styleWrapper?: StyleProp<ViewStyle>;
}

class ErrorBox extends React.Component<ErrorBoxProps, {}> {
  constructor(props: Readonly<ErrorBoxProps>) {
    super(props);
  }

  render() {
    return (
      <View style={this.props.styleWrapper}>
        <Text style={[styles.TextError]}>{this.props.text}</Text>
      </View>
    );
  }
}

export default ErrorBox;
