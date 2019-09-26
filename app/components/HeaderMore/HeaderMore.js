import React, { Component } from 'react';
import { View,ToastAndroid } from 'react-native';
import { Overlay, ListItem } from 'react-native-elements';


export default class HeaderMore extends Component {

    render() {
        const { isVisible, onBackdropPress,onPress } = this.props;

        return (
            <View>
                <Overlay
                    isVisible={isVisible || false}
                    onBackdropPress={onBackdropPress}
                    overlayStyle={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        height: 100,
                        width: 100,
                        position: 'absolute',
                        right: 20,
                        top: 70
                    }}
                >
                    <View>
                        <ListItem
                            key={1}
                            leftIcon= {{ name: 'android', size: 16 }}
                            title="扫一扫"
                            titleStyle={{ fontSize: 10 }}
                            bottomDivider
                            containerStyle={{ width: 100 }}
                            onPress={()=>{
                                // 关闭overlay
                                onPress();
                                ToastAndroid.show('扫一扫',ToastAndroid.SHORT)
                            }}
                        />
                        <ListItem
                            key={2}
                            leftIcon= {{ name: 'android', size: 16 }}
                            title="更多"
                            titleStyle={{ fontSize: 10 }}
                            bottomDivider
                            containerStyle={{ width: 100 }}
                            onPress={()=>{
                                onPress();
                                ToastAndroid.show('more',ToastAndroid.SHORT);
                            }}
                        />

                    </View>
                </Overlay>
            </View>
        );
    }
}
