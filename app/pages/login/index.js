import React, {Component} from 'react';
import {View, ImageBackground,Alert} from 'react-native';
import {Text, Input, Avatar,Button} from 'react-native-elements';

import style from './style';


export default class UserInfo extends Component {
    state = {
      user:'',
      password:'',
    };
    onSubmit = () =>{
          Alert.alert(JSON.stringify(this.state))
    };

    render() {
        const backgroundImageUri = require('../../assets/login.jpg');
        const logo = require('../../assets/logo.jpg');
        const {user,password} = this.state;
        return (
            <ImageBackground source={backgroundImageUri} style={style.container}>
                <View style={style.main}>
                    <Text h4 style={style.title}>实现梦想</Text>
                    <Avatar source={logo} rounded size="large" />
                </View>
                <View style={style.form}>
                    <Input
                        placeholder="请输入手机"
                        inputStyle={{color:'#fff'}}
                        containerStyle={{height:70}}
                        placeholderTextColor="#fff"
                        maxLength={20}
                        defaultValue={user}
                        // value={user}
                    />
                    <Input
                        placeholder="请输入密码"
                        inputStyle={{color:'#fff'}}
                        containerStyle={{height:70}}
                        placeholderTextColor="#fff"
                        maxLength={50}
                        defaultValue={password}
                        // value={password}
                        onSubmitEditing={this.onSubmit}
                    />
                    <Button title="登录" onPress={this.onSubmit}/>
                </View>
            </ImageBackground>
        );
    }
}
