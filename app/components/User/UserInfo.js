import React, {Component} from 'react';
import {ListItem} from 'react-native-elements';

export default class UserInfo extends Component {
    render() {
        const defaultAvatar = {};
        return (
            <ListItem
                leftAvatar={defaultAvatar}
                title="牛牛"
                subtitle="1032380143@qq.com"
                chevron
            />
        );
    }
}
