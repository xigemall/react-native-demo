import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Icon}from 'react-native-elements';
import {Button, WingBlank,Icon as AIcon} from '@ant-design/react-native';

export default class Index extends Component {

    render() {
        return (
            <View>
                <WingBlank size="sm">
                    <Text>index</Text>
                    <Button type="primary" onPress={() => Actions.login()}>go to</Button>
                    <Icon name='rowing' />
                </WingBlank>
            </View>
        );
    }
}
