import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Header } from 'react-native-elements';

export default class BackNavBar extends Component {

    render() {
        let props = this.props;
        if (props.leftComponent) {
            props.leftComponent.onPress = () => Actions.pop()
        }
        const { currentParams: { title } } = Actions;
        return (
            <Header
                leftComponent={{ icon: 'chevron-left', color: '#fff', onPress: () => Actions.pop() }}
                centerComponent={{ text: title, style: { color: '#fff' } }}
                {...props}
            />
        );
    }
}

