import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {
  Card,
  Icon,
  Text,
} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import ImageModal from '../../../components/ImageModal/index';
import CameraRoll from '@react-native-community/cameraroll';
import {requestCameraPermission} from '../../../utils/permissions';

const { width, height } = Dimensions.get('window');
// 每行宫格数量
const CardItemNumber = 4;

export default class HomeCard extends Component {
  state = {
    isVisible:false,
    images:[],
  }

  hideModal = () => {
    this.setState({isVisible:false})
  }

  openCameraRoll = () =>{
    CameraRoll.getPhotos({
      first:10,
      assetType: 'All',
    }).then(r=>{
      const {edges} = r;
      this.setState({images:edges});
      this.setState({isVisible:true})
    })
  }

  render() {
    const {isVisible,images} = this.state;
    return (
      <View style={style.container}>
        <TouchableOpacity onPress={() => {
          Actions.images()
        }}>
          <Card containerStyle={style.cardStyle}>
            <View>
              <Icon name="android" color="#00aced" size={30}/>
              <Text>图片</Text>
            </View>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.openCameraRoll}>
          <Card containerStyle={style.cardStyle}>
            <View>
              <Icon name="android" color="#00aced" size={30}/>
              <Text>相册</Text>
            </View>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity>
          <Card containerStyle={style.cardStyle}>
            <View>
              <Icon name="android" color="#00aced" size={30}/>
              <Text>home</Text>
            </View>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity>
          <Card containerStyle={style.cardStyle}>
            <View>
              <Icon name="android" color="#00aced" size={30}/>
              <Text>home</Text>
            </View>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity>
          <Card containerStyle={style.cardStyle}>
            <View>
              <Icon name="android" color="#00aced" size={30}/>
              <Text>home</Text>
            </View>
          </Card>
        </TouchableOpacity>
        <ImageModal isVisible={isVisible} onBackdropPress={this.hideModal} source={images} />
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardStyle: {
    margin: 0,
    width: width / CardItemNumber,
    alignItems: 'center',
  }
});


