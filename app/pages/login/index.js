import React, { Component } from 'react';
import { View, ImageBackground, Alert } from 'react-native';
import { Text, Input, Avatar, Button } from 'react-native-elements';
import { createForm } from 'rc-form';
import request from '../../utils/request';

import style from './style';
import { Actions } from "react-native-router-flux";


class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: '',
            // 登录按钮
            loading: false,
        }
    }

    onSubmit = () => {
        const { validateFields } = this.props.form;
        validateFields((err, value) => {
            if (!err) {
                Alert.alert(JSON.stringify(value));
                this.setState({ loading: true });

                setTimeout(()=>{
                    this.setState({ loading: false });
                },2000)
                // const result = request('http://192.168.0.25:3000/api/login',{
                //     method:'POST',
                //     body:value
                // },(result)=>{
                //     Alert.alert('call',JSON.stringify(result))
                // });
            }
        })

        // Alert.alert(JSON.stringify(this.state))
        // fetch('http://192.168.0.25:3000/api/login?user=12',{
        //     method:'POST',
        //     body:JSON.stringify({
        //         user:'liu',
        //         password:'123456'
        //     })
        // }).then((response)=>response.json())
        //     .then(response=>{
        //         Alert.alert(JSON.stringify(response))
        //     })
    };

    render() {
        const backgroundImageUri = require('../../assets/login.jpg');
        const logo = require('../../assets/logo.jpg');
        const { user, password, loading } = this.state;
        const { getFieldProps, getFieldError, setFieldsValue } = this.props.form;
        const loginButtonProps = loading ? { loading: true, disabled: true } : {};
        return (
            <ImageBackground source={backgroundImageUri} style={style.container}>
                <View style={style.main}>
                    <Text h4 style={style.title}>实现梦想</Text>
                    <Avatar source={logo} rounded size="large"/>
                </View>
                <View style={style.form}>
                    <Input
                        placeholder="请输入手机"
                        inputStyle={{ color: '#fff' }}
                        containerStyle={{ height: 70 }}
                        placeholderTextColor="#DDE9FF"
                        maxLength={20}
                        errorMessage={getFieldError('user')}
                        onChangeText={(text) => {
                            setFieldsValue({ user: text })
                        }}
                        {
                            ...getFieldProps('user', {
                                initialValue: user,
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空',
                                    }
                                ]
                            })
                        }
                    />
                    <Input
                        placeholder="请输入密码"
                        inputStyle={{ color: '#fff' }}
                        containerStyle={{ height: 70 }}
                        placeholderTextColor="#DDE9FF"
                        maxLength={50}
                        onChangeText={(text) => {
                            setFieldsValue({ password: text })
                        }}
                        errorMessage={getFieldError('password')}
                        secureTextEntry
                        onSubmitEditing={this.onSubmit}
                        {
                            ...getFieldProps('password', {
                                initialValue: password,
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空',
                                    }
                                ]
                            })
                        }
                    />
                    <Button title="登录" {...loginButtonProps} onPress={this.onSubmit}/>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
                        <Button title="忘记密码" type="clear" titleStyle={{ color: '#FFF' }}/>
                        <Button title="注册" type="clear" titleStyle={{ color: '#FFF' }}
                                onPress={() => Actions.register()}/>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default createForm()(UserInfo);