
import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import Header from '../components/Header'


interface AboutTheGameProps {
    navigation: DrawerNavigationProp<{}>
};

class AboutTheGameScreen extends React.Component<AboutTheGameProps, {}> {

    constructor(props: Readonly<AboutTheGameProps>) {
        super(props);
    }

    render() {
        return (
            <>
                <Header toggleDrawer={this.props.navigation.toggleDrawer} />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Here you learn everything about BattleBeasts!</Text>
                </View>
            </>
        );
    }
}


  export default AboutTheGameScreen;