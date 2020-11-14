import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from './Button.styles'

interface ButtonProps {
    title: string;
    onPress: () => void;
}

class Button extends React.Component<ButtonProps,{}> {
    render(): JSX.Element {
        return (
            <TouchableOpacity
              style={styles.Button}
              onPress={() => this.props.onPress()}>
              <Text style={styles.ButtonText}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

export default Button;