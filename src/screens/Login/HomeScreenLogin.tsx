import React from "react";
import Header from "../../components/Header";
import Button from '../../components/Button'
import { Keyboard, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { UserService } from "../../services/userService";
import { NavigationParams, NavigationScreenProp, NavigationState } from "react-navigation";
import jwtDecode from 'jwt-decode';
import { User } from "../../models/user";
import AsyncStorage from '@react-native-async-storage/async-storage';


interface LoginData {
    username: string;
    password: string;
}

interface RegisterData {
    username: string;
    email: string;
    password: string;
    password_confirmation: string;
}

interface HomeScreenLoginState {
    showLogin: boolean;
    showRegister: boolean;
    error: String;
    loginData: LoginData;
    registerData: RegisterData;
}

interface HomeScreenLoginProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class HomeScreenLogin extends React.Component<HomeScreenLoginProps,HomeScreenLoginState> {

    constructor(props: Readonly<HomeScreenLoginProps>) {
        super(props);

        this.state = {
            showLogin: false,
            showRegister: false,
            error: '',
            loginData: {
                username: '',
                password: ''
            },
            registerData: {
                username: '',
                email: '',
                password: '',
                password_confirmation: ''
            }
        }
      }



      private async submitLoginData() {

          // login
          const loginRes = await UserService.postLogin({
            username: this.state.loginData.username,
            password: this.state.loginData.password
          });

          const loginResJson = await loginRes.json();


          if(loginResJson.error) {
            this.setState({
                error: loginResJson.error
            })
          } else {
            const token: string = loginResJson.token;
            const parsed: { exp: number; username: string; email: string;} = jwtDecode(token) as { exp: number; username: string; email: string };
            const user: User = {
                username: parsed.username,
                email: parsed.email,
                token: token
            }
            this.props.navigation.navigate('TabNavigator', {
                user: user
            })
            this.storeUser(user);
            this.printUser();
          }
      }

      private async printUser() {
        try {
            const jsonValue = await AsyncStorage.getItem('@user')
            const user: User = jsonValue != null ? JSON.parse(jsonValue) : null;
            console.log(user);
          } catch (error) {
            // Error retrieving data
          }
      }

      private async storeUser(user: User): Promise<void> {
        try {
            const jsonUser = JSON.stringify(user)
            await AsyncStorage.setItem('@user', jsonUser)
        } catch (error) {
          // Error saving data
        }
      };

      private async submitRegisterData() {

          // register 
          const registerRes = await UserService.postRegister({
              username: this.state.registerData.username,
              email: this.state.registerData.email,
              password: this.state.registerData.password,
              password_confirmation: this.state.registerData.password_confirmation
          })

          const registerResJson = await registerRes.json();

          if(registerResJson.error) {
              this.setState({
                  error: registerResJson.error
              })
          } else {
              const token: string = registerResJson.token;
              console.log(token);
          }
      }

    private dropDownTextInputsOfLogin(): void {
        this.setState({
            showLogin: !this.state.showLogin
        })
    }

    private dropDownTextInputsOfRegistering(): void {
        this.setState({
            showRegister: !this.state.showRegister
        })
    }

    render(): JSX.Element {
        return (
            <>
            <Header title="BattleBeasts"></Header>
            <Button
                title="Login"
                onPress={this.dropDownTextInputsOfLogin.bind(this)}>
            </Button>

            {this.state.showLogin ? <View>
                <TextInput
                keyboardType="visible-password"
                onSubmitEditing={Keyboard.dismiss}
                placeholder="Enter your password here."
                value={this.state.loginData.username}
                onChangeText={(newUsername) => this.setState({loginData: {
                    username: newUsername,
                    password: this.state.loginData.password
                }})}></TextInput>
                <TextInput
                keyboardType="visible-password"
                onSubmitEditing={Keyboard.dismiss}
                placeholder="Enter your password here."
                value={this.state.loginData.password}
                onChangeText={(newPassword) => this.setState({loginData: {
                    username: this.state.loginData.username,
                    password: newPassword
                }})}></TextInput>
                <Button
                title="Submit"
                onPress={() => this.submitLoginData()}>
                </Button>
            </View> : null}

            <Button
                    title="Register"
                    onPress={this.dropDownTextInputsOfRegistering.bind(this)}>
            </Button>

            {this.state.showRegister ? <View>
                <TextInput
                onSubmitEditing={Keyboard.dismiss}
                placeholder="Enter your desired username here."></TextInput>
                <TextInput
                onSubmitEditing={Keyboard.dismiss}
                placeholder="Enter your e-mail here."></TextInput>
                <TextInput
                onSubmitEditing={Keyboard.dismiss}
                placeholder="Enter your desired password here."></TextInput>
                <TextInput
                onSubmitEditing={Keyboard.dismiss}
                placeholder="Enter your password again for confirmation."></TextInput>
                <Button
                title="Submit"
                onPress={() => this.submitRegisterData}>

                </Button>
            </View> : null}


            {this.state.error ? <View>
                <Text>{this.state.error}</Text>
            </View> : null}

            </>
        );
    }
}

export default HomeScreenLogin;