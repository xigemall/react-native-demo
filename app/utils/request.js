import {Alert} from 'react-native';

export default async function request(uri, params, callback) {
    try {
        const response = await fetch(uri, params);
        const responseJson = await response.json();
        if (callback) callback(responseJson);
        return responseJson
    } catch (error) {
        Alert.alert('error', JSON.stringify(error));
    }
}