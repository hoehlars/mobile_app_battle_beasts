import React from 'react';
import {StyleProp, Text, TouchableOpacity, ViewStyle} from 'react-native';
import styles from './Button.styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  styleWrapper?: StyleProp<ViewStyle>;
  testID?: string
}

class Button extends React.Component<ButtonProps, {}> {
  render(): JSX.Element {
    return (
      <TouchableOpacity
        style={[styles.Button, this.props.styleWrapper]}
        onPress={() => this.props.onPress()}
        testID={this.props.testID}>
        <Text style={styles.ButtonText}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
