import React,{Component} from 'react';
import {BackHandler, ToastAndroid, Platform, Alert,Text,View} from 'react-native';
import {Router, Stack, Scene, Tabs, Actions} from 'react-native-router-flux';
import { Icon} from '@ant-design/react-native';

import Index from '../pages/Index';
import User from '../pages/User';
import My from '../pages/user/Index';
import BasicLayout from '../layouts/BasicLayout';
import NavBar from '../layouts/NavBar';

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
            {back: true, onBack: this.onExitApp}
            :
            {};

        const routerAttr = {
            // 允许在Android中自定义控制返回按钮
            backAndroidHandler: this.backAndroidHandler,
        };
        return (
            <Router
                {...routerAttr}
            >
                <Stack key="root">
                    <Tabs
                        hideNavBar={true}
                        {...tabsAttr}
                        navBar={NavBar}
                    >
                        <Scene path="/index" key="index" component={Index} title="首页" initial={true}  />
                        <Scene path="/user" key="user" component={User} title="我的" />
                    </Tabs>

                    <Scene path="/my" key="my" component={My} title="my" />
                </Stack>

                {/*<Stack key="root">*/}
                    {/*<Tabs hideNavBar={true} tabBarComponent={BasicLayout}>*/}
                        {/*<Scene path="/index" key="index"  title="首页" component={Index} initial={true} />*/}
                        {/*<Scene path="/user" key="user" component={User} title="我的" />*/}
                    {/*</Tabs>*/}
                    {/*<Scene path="/my" key="my" component={My} title="my" />*/}
                {/*</Stack>*/}
            </Router>
        );
    }
}

export default Routes;
