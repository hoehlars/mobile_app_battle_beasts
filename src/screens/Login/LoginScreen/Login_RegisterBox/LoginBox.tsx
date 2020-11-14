import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles.module';

interface LoginData {
  username: string;
  password: string;
}

interface LoginBoxState {
  loginData: LoginData;
}

interface LoginBoxProps {
  onSubmit: (loginData: LoginData) => void;
}

class LoginBox extends React.Component<LoginBoxProps, LoginBoxState> {
  constructor(props: Readonly<LoginBoxProps>) {
    super(props);

    this.state = {
      loginData: {
        username: '',
        password: '',
      },
    };
  }

  render(): JSX.Element {
    return (
      <View style={styles.LoginForm}>
        <TextInput
          style={styles.TextInput}
          keyboardType="visible-password"
          onSubmitEditing={() => this.props.onSubmit(this.state.loginData)}
          placeholder="Enter your username here."
          value={this.state.loginData.username}
          onChangeText={(newUsername) =>
            this.setState({
              loginData: {
                username: newUsername,
                password: this.state.loginData.password,
              },
            })
          }
        />
        <TextInput
          style={styles.TextInput}
          keyboardType="default"
          onSubmitEditing={() => this.props.onSubmit(this.state.loginData)}
          secureTextEntry={true}
          placeholder="Enter your password here."
          value={this.state.loginData.password}
          onChangeText={(newPassword) =>
            this.setState({
              loginData: {
                username: this.state.loginData.username,
                password: newPassword,
              },
            })
          }
        />
      </View>
    );
  }
}

export default LoginBox;
