import React, { Component } from 'react';
import {
  Overlay,
  Text,
  Image,
} from 'react-native-elements';
import {
  Dimensions,
  View,
  StyleSheet,
} from "react-native";

const { height, width } = Dimensions.get('window');
const windowHeight = height;
const windowWidth = width;

// 每行数量
const imageRowNum = 4;

export default class ImageModal extends Component {

  getRenderImages = () => {
    const {source} = this.props;
    return (
      <View style={style.imageContainer}>
        {
          source.length ?
          source.map((i,index)=>(
            <View style={style.imageItem} key={index}>
              <Image
                source={{uri:i.node.image.uri}}
                style={{ width: '100%', height: '100%' }}/>
            </View>
          )) :
            <Text h1>相册无图</Text>
        }


      </View>
    )
  };

  render() {
    const { isVisible, onBackdropPress,width,height } = this.props;
    return (
      <Overlay
        isVisible={isVisible || false}
        onBackdropPress={onBackdropPress}
        width={ width || windowWidth }
        height={height || windowHeight}
      >
        {this.getRenderImages()}
      </Overlay>
    )
  }
}

const style = StyleSheet.create({
  imageContainer:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // borderColor:'green',
    // borderStyle:'solid',
    // borderWidth:1,
  },
  imageItem:{
    width:windowWidth/4,
    height:100,
    padding:5,
  },
})