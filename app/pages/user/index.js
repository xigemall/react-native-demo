import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import UserInfo from '../../components/User/UserInfo';

export default class Index extends Component {
    showLogin = () => {
        Actions.login()
    };

    render() {
        return (
            <View style={{ flex: 1, }}>
                <UserInfo/>
                <Button title="登录" onPress={this.showLogin}/>
            </View>
        );
    }
}
