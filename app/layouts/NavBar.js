import React, {Component} from 'react';
import {View, Text,Alert,StatusBar} from 'react-native';
import {Header} from 'react-native-elements';

export default class Index extends Component {

    render() {
        return (
            <View>
                <StatusBar backgroundColor="blue" barStyle="light-content" />
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff',onPress:()=>{Alert.alert('eee')} }}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                {this.props.children}
            </View>
        );
    }
}
