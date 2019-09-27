import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Icon } from 'react-native-elements';

import Card from './index/components/Card';

export default class Index extends Component {

    render() {
        return (
            <View>
                <Text>index</Text>
                <Button title="go to" onPress={() => Actions.login()}/>
                <Icon name='rowing'/>
                <Card/>
            </View>
        );
    }
}
