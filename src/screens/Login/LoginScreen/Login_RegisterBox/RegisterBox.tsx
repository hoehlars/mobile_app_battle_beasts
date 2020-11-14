import React from "react";
import { TextInput, View } from "react-native";
import styles from './styles.module'


interface RegisterData {
    username: string;
    email: string;
    password: string;
    password_confirmation: string;
}



interface RegisterBoxState {
    registerData: RegisterData;
}




interface RegisterBoxProps {
    onSubmit: (registerData: RegisterData) => void;
}

class RegisterBox extends React.Component<RegisterBoxProps,RegisterBoxState> {

    constructor(props: Readonly<RegisterBoxProps>) {
        super(props)

        this.state = {
            registerData: {
                username: '',
                email: '',
                password: '',
                password_confirmation: ''
            }
        }
    }

    render(): JSX.Element {
        return (
            <View style={styles.RegisterForm}>
                <TextInput
                style={styles.TextInput}
                keyboardType="visible-password"
                onSubmitEditing={() => this.props.onSubmit(this.state.registerData)}
                value={this.state.registerData.username}
                onChangeText={(newUsername) => this.setState({registerData: {
                    ...this.state.registerData,
                    username: newUsername
                }})}
                placeholder="Enter your desired username here."></TextInput>
                <TextInput
                style={styles.TextInput}
                keyboardType="visible-password"
                onSubmitEditing={() => this.props.onSubmit(this.state.registerData)}
                value={this.state.registerData.email}
                onChangeText={(newEmail) => this.setState({registerData: {
                    ...this.state.registerData,
                    email: newEmail
                }})}
                placeholder="Enter your e-mail here."></TextInput>
                <TextInput
                style={styles.TextInput}
                keyboardType="default"
                secureTextEntry={true}
                onSubmitEditing={() => this.props.onSubmit(this.state.registerData)}
                value={this.state.registerData.password}
                onChangeText={(newPassword) => this.setState({registerData: {
                    ...this.state.registerData,
                    password: newPassword
                }})}
                placeholder="Enter your desired password here."></TextInput>
                <TextInput
                style={styles.TextInput}
                keyboardType="default"
                secureTextEntry={true}
                onSubmitEditing={() => this.props.onSubmit(this.state.registerData)}
                value={this.state.registerData.password_confirmation}
                onChangeText={(newPasswordConfirm) => this.setState({registerData: {
                    ...this.state.registerData,
                    password_confirmation: newPasswordConfirm
                }})}
                placeholder="Enter your password again for confirmation."></TextInput>
            </View> 
        );
    }
}

export default RegisterBox;