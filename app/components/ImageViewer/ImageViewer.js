import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import {
    Overlay,
} from 'react-native-elements';
import ImageViewer from 'react-native-image-zoom-viewer';

// 初始
const { height, width } = Dimensions.get('window');
const windowHeight = height;
const windowWidth = width;

export default class MyImageViewer extends Component {
    render() {
        const { isVisible, onBackdropPress, width, height } = this.props;
        return (
            <Overlay
                isVisible={isVisible || false}
                onBackdropPress={onBackdropPress}
                width={width || windowWidth}
                height={height || windowHeight}
            >
                <ImageViewer
                    {...this.props}
                />
            </Overlay>

        )
    }
}