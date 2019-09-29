import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';
import {
    Image
} from 'react-native-elements';
import ImageViewer from '../../components/ImageViewer/ImageViewer';

const { width } = Dimensions.get('window');

export default class Index extends Component {

    state = {
        data: [
            {
                props: {
                    source: require('../../assets/logo.jpg'),
                }
            },
            {
                props: {
                    source: require('../../assets/login.jpg'),
                }
            },
            {
                props: {
                    source: require('../../assets/logo.jpg'),
                }
            },
            {
                props: {
                    source: require('../../assets/login.jpg'),
                }
            },
        ],
        isVisible: false,
        currentIndex: 1,
    };

    openImageViewer = (currentIndex) => {
        this.setState({ isVisible: true, currentIndex });
    };

    closeImageViewer = () => {
        this.setState({ isVisible: false });
    };

    render() {
        const { data, isVisible, currentIndex } = this.state;
        return (
            <View>
                <View style={style.imageList}>

                    {
                        data.map((v, i) => {
                            return (
                                <TouchableOpacity
                                    key={i}
                                    onPress={() => this.openImageViewer(i)}
                                    style={style.imageItem}
                                >
                                    <Image
                                        source={v.props.source}
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                </TouchableOpacity>
                            );
                        })
                    }

                </View>
                <ImageViewer
                    imageUrls={data}
                    isVisible={isVisible}
                    onBackdropPress={this.closeImageViewer}
                    index={currentIndex}
                />
            </View>
        );
    }
}

const style = StyleSheet.create({
    imageList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    imageItem: {
        width: width / 4,
        height: 100,
        padding: 2,
    }
});
