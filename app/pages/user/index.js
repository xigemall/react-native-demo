import React, {Component} from 'react';
import {View, Text,Alert} from 'react-native';
import {Button} from 'react-native-elements';
import {WingBlank} from '@ant-design/react-native';
import {Actions} from 'react-native-router-flux';

import UserInfo from '../../components/User/UserInfo';

export default class Index extends Component {
    showLogin = () =>{
      Actions.login()
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <WingBlank size="sm">
                    <UserInfo />
                    <Button title="登录" onPress={this.showLogin} />
                </WingBlank>
            </View>
        );
    }
}
