import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Icon, TabBar} from '@ant-design/react-native';
import {Actions} from 'react-native-router-flux';

const tabBarItems = [
    {
        key: 'index',
        title: '首页',
        icon: <Icon name="home" />,
    },
    {
        key: 'koubei',
        title: '口碑',
        icon: <Icon name="ordered-list" />,
    },
    {
        key: 'friend',
        title: '朋友',
        icon: <Icon name="like" />,
    },
    {
        key: 'user',
        title: '我的',
        icon: <Icon name="user" />,
    },
];
export default class BasicLayout extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            selectedTab: 'index',
        };
    }

    onChangeTab(tabName) {
        this.setState({
            selectedTab: tabName,
        });
        Actions[tabName].call();
    }

    render() {
        const {selectedTab} = this.state;
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="#f5f5f5"
            >
                {
                    tabBarItems.map((item, index) => {
                        return (
                            <TabBar.Item
                                {...item}
                                selected={selectedTab === item.key}
                                onPress={() => this.onChangeTab(item.key)}
                            >
                                {this.props.children}
                            </TabBar.Item>
                        );
                    })
                }
            </TabBar>
        );
    }
}
