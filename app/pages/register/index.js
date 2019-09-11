import React, {Component} from 'react';
import {View, Text, Alert} from 'react-native';
import style from './style';
import {Input, Button} from "react-native-elements";
import {createForm} from 'rc-form';

class Register extends Component {

    constructor(props) {
        super(props);
        // 表单初始
        this.state = {
            username: '',
            password: '',
            password_confirmation: '',
        }
    }

    onSubmit = () => {
        const {validateFields} = this.props.form;
        validateFields((error, value) => {
            if (!error) {
                Alert.alert('submit', JSON.stringify(value))
            }

        })
    }

    render() {
        const {getFieldProps, setFieldsValue, getFieldError} = this.props.form;
        const {username, password, password_confirmation} = this.state;
        return (
            <View style={style.container}>
                <Input
                    label="用户名"
                    placeholder="请输入用户名"
                    errorMessage={getFieldError('username')}
                    onChangeText={(text) => {
                        setFieldsValue({username: text})
                    }}
                    {
                        ...getFieldProps('username', {
                                initialValue: username,
                                rules: [
                                    {
                                        required: true,
                                        message: '用户名必填'
                                    },
                                    {
                                        pattern: /^\d+$/,
                                        message: '用户名必须是数字类型'
                                    }
                                ]
                            }
                        )
                    }
                />
                <Input
                    label="密码"
                    placeholder="请输入密码"
                    secureTextEntry
                    errorMessage={getFieldError('password')}
                    onChangeText={(text) => {
                        setFieldsValue({password: text})
                    }}
                    {
                        ...getFieldProps('password', {
                                initialValue: password,
                                rules: [
                                    {
                                        required: true,
                                        message: '密码必填',
                                    }
                                ]
                            }
                        )
                    }
                />
                <Input
                    label="确认密码"
                    placeholder="确认密码"
                    secureTextEntry
                    errorMessage={getFieldError('password_confirmation')}
                    onChangeText={(text) => {
                        setFieldsValue({password_confirmation: text})
                    }}
                    {
                        ...getFieldProps('password_confirmation', {
                                initialValue: password_confirmation,
                                rules: [
                                    {
                                        required: true,
                                        message: '确认密码必填',
                                    }
                                ]
                            }
                        )
                    }
                />
                <Text/>
                <Button title="注册" onPress={this.onSubmit}/>
            </View>
        )
    }
}

export default createForm()(Register);