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

const { width, height } = Dimensions.get('window');
// 每行宫格数量
const CardItemNumber = 4;

export default class HomeCard extends Component {
    render() {
        return (
            <View style={style.container}>
                <TouchableOpacity onPress={()=>{Actions.images()}}>
                    <Card containerStyle={style.cardStyle}>
                        <View>
                            <Icon name="android" color="#00aced" size={30}/>
                            <Text>图片</Text>
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

                <TouchableOpacity>
                    <Card containerStyle={style.cardStyle}>
                        <View>
                            <Icon name="android" color="#00aced" size={30}/>
                            <Text>home</Text>
                        </View>
                    </Card>
                </TouchableOpacity>
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


