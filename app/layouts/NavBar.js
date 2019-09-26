import React, { Component } from 'react';
import { View, ToastAndroid } from 'react-native';
import { Actions } from 'react-native-router-flux';
import NavBar from '../components/NavBar/Index';
import HeaderMore from '../components/HeaderMore/HeaderMore';


export default class Index extends Component {
    state = {
        isVisible: false,
    };

    overlayClose= ()=>{
        this.setState({ isVisible: false })
    };


    render() {
        const { currentParams: { title } } = Actions;
        const { isVisible } = this.state;

        return (
            <View>
                <NavBar
                    leftComponent={{ icon: 'home', color: '#fff' }}
                    centerComponent={{ text: title, style: { color: '#fff' } }}
                    rightComponent={{
                        icon: 'menu', color: '#fff', onPress: () => {
                            this.setState({ isVisible: true })
                        }
                    }}
                    statusBarProps={{ backgroundColor: '#181818' }}
                    {...this.props}
                />
                <HeaderMore isVisible={isVisible} onBackdropPress={this.overlayClose} onPress={this.overlayClose}/>
            </View>
        );
    }
}
