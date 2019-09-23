import React, { Component } from 'react';
import { View, Text, Alert, StatusBar, CameraRoll, PermissionsAndroid } from 'react-native';
import {Icon} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import NavBar from '../components/NavBar/Index';

export default class Index extends Component {
    componentDidMount() {
        // console.log(Actions)
    }

    render() {
        const {currentParams:{title}} = Actions;
        return (
                <NavBar
                    leftComponent={{ icon: 'home', color: '#fff' }}
                    centerComponent={{ text: title, style: { color: '#fff' } }}
                    rightComponent={{ icon: 'menu', color: '#fff' }}
                    statusBarProps={{backgroundColor:'#181818'}}
                    {...this.props}
                />
        );
    }
}
