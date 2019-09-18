import React, { Component } from 'react';
import { View, Text, Alert, StatusBar, CameraRoll, PermissionsAndroid } from 'react-native';
import {Icon} from 'react-native-elements';
import NavBar from '../components/NavBar/Index';

export default class Index extends Component {

    render() {
        return (
                <NavBar
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: '首页', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                    {...this.props}
                />
        );
    }
}
