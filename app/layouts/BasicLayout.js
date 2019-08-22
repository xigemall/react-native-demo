import React, {Component} from 'react';
import {View,Text} from 'react-native';

class BasicLayout extends Component {
    render() {
        return (
            <View>
                <Text>layout</Text>
                {/*{this.props.children}*/}
            </View>
        );
    }
}

export default BasicLayout;
