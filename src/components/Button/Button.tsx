import React from 'react';
import {StyleProp, Text, TouchableOpacity, ViewStyle} from 'react-native';
import styles from './Button.styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  styleWrapper?: StyleProp<ViewStyle>;
  testID?: string;
  disabled?: boolean;
}

class Button extends React.Component<ButtonProps, {}> {
  render(): JSX.Element {
    return (
      <TouchableOpacity
        disabled={this.props.disabled}
        style={[styles.Button, this.props.styleWrapper]}
        onPress={() => this.props.onPress()}
        testID={this.props.testID}>
        <Text style={styles.ButtonText}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
