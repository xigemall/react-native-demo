import React from 'react';
import {BackHandler, ToastAndroid, Platform, Alert} from 'react-native';
import {Router, Scene, Tabs, Actions} from 'react-native-router-flux';

import Index from '../pages/Index';
import User from '../pages/User';
import My from '../pages/user/Index';

class Routes extends React.Component {
    componentDidMount() {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.androidBackHandler);
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', this.androidBackHandler);
        }
    }

    androidBackHandler = () => {
        console.log(Platform)
        Actions.pop();
        // this.onExitApp();
        return true;
    };
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
        return (
            <Router>
                <Scene key="root">
                    <Tabs
                        hideNavBar={true}
                        back
                        onBack={this.onExitApp}
                    >
                        <Scene path="/index" key="index" component={Index} title="首页" initial={true}/>
                        <Scene path="/user" key="user" component={User} title="我的" />
                    </Tabs>

                    <Scene path="/my" key="my" component={My} title="my" />
                </Scene>
            </Router>
        );
    }
}

export default Routes;
