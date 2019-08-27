import React, {Component} from 'react';
import {View, Text,Alert} from 'react-native';
import {Header} from 'react-native-elements';

export default class Index extends Component {

    render() {
        return (
            <View>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff',onPress:()=>{Alert.alert('eee')} }}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                    containerStyle={{background:'green'}}
                />
                {this.props.children}
            </View>
        );
    }
}
