import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import BackNavBar from './BackNavBar';

export default class Index extends Component {

    render() {
        return (
            <Header
                {...this.props}
            />
        );
    }
}

export { BackNavBar };
