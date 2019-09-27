import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
    Image
} from 'react-native-elements';
import ImageViewer from '../../components/ImageViewer/ImageViewer';

export default class Index extends Component {

    state = {
        data: [
            {
              props:{
                  source:require('../../assets/logo.jpg'),
              }
            },
            {
                props:{
                    source:require('../../assets/login.jpg'),
                }
            },
        ],
        isVisible:false,
        currentIndex:0,
    };

    openImageViewer = (CurrentIndex) =>{
        this.setState({isVisible:true,CurrentIndex});
    };

    closeImageViewer = () =>{
        this.setState({isVisible:false});
    };

    render() {
        const { data,isVisible,currentIndex } = this.state;
        return (
            <View>
                <View>

                    {
                        data.map((v, i) => {
                            return (
                                <TouchableOpacity onPress={()=>this.openImageViewer(i)}>
                                <Image
                                    key={i}
                                    source={v.props.source}
                                    style={{ width: 200, height: 200 }}
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
