import React from 'react';
import Header from '../../../components/Header/Header';
import Button from '../../../components/Button/Button';
import {View} from 'react-native';
import {UserService} from '../../../services/userService';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import jwtDecode from 'jwt-decode';
import {User} from '../../../models/user';
import {AsyncStorageService} from '../../../services/asyncStorage';
import LoginBox from './Login_RegisterBox/LoginBox';
import RegisterBox from './Login_RegisterBox/RegisterBox';
import styles from './styles.module';
import ErrorBox from '../../../components/ErrorBox/ErrorBox';

interface RegisterData {
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
}

interface LoginData {
  username: string;
  password: string;
}

interface HomeScreenLoginState {
  showLoginBox: boolean;
  showRegisterBox: boolean;
  showLoginButton: boolean;
  showRegisterButton: boolean;
  registerError: string;
  loginError: string;
}

interface HomeScreenLoginProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class HomeScreenLogin extends React.Component<
  HomeScreenLoginProps,
  HomeScreenLoginState
> {
  constructor(props: Readonly<HomeScreenLoginProps>) {
    super(props);

    this.state = {
      showLoginBox: false,
      showRegisterBox: false,
      showLoginButton: true,
      showRegisterButton: true,
      loginError: '',
      registerError: '',
    };
  }

  async componentDidMount() {
    const user: User | null = await AsyncStorageService.readUser();
    if (user) {
      this.props.navigation.navigate('TabNavigator');
    }
  }

  private async submitLoginData(loginData: LoginData) {
    // login
    const loginRes = await UserService.postLogin({
      username: loginData.username,
      password: loginData.password,
    });

    const loginResJson = await loginRes.json();

    if (loginResJson.error) {
      this.setState({
        loginError: loginResJson.error,
      });
    } else {
      const token: string = loginResJson.token;
      await this.saveUserAndNavigateToTabNav(token);
    }
  }

  private async submitRegisterData(registerData: RegisterData) {
    // register
    const registerRes = await UserService.postRegister({
      username: registerData.username,
      email: registerData.email,
      password: registerData.password,
      password_confirmation: registerData.password_confirmation,
    });

    const registerResJson = await registerRes.json();

    if (registerResJson.error) {
      this.setState({
        registerError: registerResJson.error,
      });
    } else {
      const token: string = registerResJson.token;
      await this.saveUserAndNavigateToTabNav(token);
    }
  }

  private async saveUserAndNavigateToTabNav(token: string): Promise<void> {
    const user = this.getUserFromToken(token);

    const isUserSaved: boolean = await AsyncStorageService.storeUser(user);
    if (isUserSaved) {
      this.props.navigation.navigate('TabNavigator');
    } else {
      this.setState({registerError: 'Database error'});
    }
  }

  private getUserFromToken(token: string): User {
    const parsed: {exp: number; username: string; email: string} = jwtDecode(
      token,
    ) as {exp: number; username: string; email: string};
    const user: User = {
      username: parsed.username,
      email: parsed.email,
      token: token,
    };
    return user;
  }

  private dropDownTextInputsOfLogin(): void {
    this.setState({
      showLoginBox: !this.state.showLoginBox,
      loginError: '',
      showRegisterButton: !this.state.showRegisterButton,
    });
  }

  private dropDownTextInputsOfRegistering(): void {
    this.setState({
      showRegisterBox: !this.state.showRegisterBox,
      registerError: '',
      showLoginButton: !this.state.showLoginButton,
    });
  }

  render(): JSX.Element {
    return (
      <>
        <Header title="BattleBeasts" />
        <View style={styles.Forms}>
          {this.state.showLoginButton ? (
            <Button
              title="Show Login"
              styleWrapper={styles.Button}
              onPress={this.dropDownTextInputsOfLogin.bind(this)}
            />
          ) : null}
          {this.state.showLoginBox ? (
            <LoginBox onSubmit={this.submitLoginData.bind(this)} />
          ) : null}

          {this.state.loginError ? (
            <ErrorBox text={this.state.loginError} />
          ) : null}

          {this.state.showRegisterButton ? (
            <Button
              title="Show Register"
              styleWrapper={styles.Button}
              onPress={this.dropDownTextInputsOfRegistering.bind(this)}
            />
          ) : null}

          {this.state.showRegisterBox ? (
            <RegisterBox onSubmit={this.submitRegisterData.bind(this)} />
          ) : null}
          {this.state.registerError ? (
            <ErrorBox 
            text={this.state.registerError} 
            styleWrapper={styles.ErrorBox}/>
          ) : null}
        </View>
      </>
    );
  }
}

export default HomeScreenLogin;
