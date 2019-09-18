import React, { Component } from 'react';
import { BackHandler, ToastAndroid, Platform, Alert, Text, View } from 'react-native';
import { Router, Stack, Scene, Tabs, Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';

import Index from '../pages';
import My from '../pages/user';
import NavBar from '../layouts/NavBar';

import Login from '../pages/login';
import Register from "../pages/register";

class Routes extends Component {

    /**
     * android 返回与退出app操作
     * @returns {boolean}
     */
    backAndroidHandler = () => {
        const currentScene = Actions.currentScene;
        // 菜单栏Scene
        const tabScene = ['_index', '_user'];

        if (tabScene.includes(currentScene)) {
            // 退出app
            return this.onExitApp();
        } else {
            // 返回操作
            Actions.pop();
            return true;
        }
    };
    /**
     * 退出app
     * @returns {boolean}
     */
    onExitApp = () => {
        if (this.outTime && this.outTime + 2000 > Date.now()) {
            BackHandler.exitApp();
            return false;
        }
        this.outTime = Date.now();
        ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
        return true;
    };

    render() {
        const tabsAttr = Platform.OS === 'ios' ?
            { back: true, onBack: this.onExitApp }
            :
            {};

        const routerAttr = {
            // 允许在Android中自定义控制返回按钮
            backAndroidHandler: this.backAndroidHandler,
        };
        const TabBarItemIcon = ({ tintColor, path, title, focused }) => {
            if (path === '/index') {
                return <Icon name="home" color={tintColor}/>
            } else if (path === '/user') {
                return <Icon name="android" color={tintColor}/>
            }
        };

        return (
            <Router
                {...routerAttr}
            >
                <Stack key="root">
                    <Tabs
                        hideNavBar={true}
                        {...tabsAttr}
                        navBar={() => <NavBar/>}
                    >
                        <Scene path="/index" key="index" component={Index} title="首页" icon={TabBarItemIcon}
                               initial={true}/>
                        <Scene path="/user" key="user" component={My} title="我的" icon={TabBarItemIcon}/>
                    </Tabs>
                    <Scene key="login" component={Login} title="登录"/>
                    <Scene key="register" component={Register} title="注册"/>
                </Stack>
            </Router>
        );
    }
}

export default Routes;
