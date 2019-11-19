import {
  Alert,
  PermissionsAndroid
} from 'react-native';

export async function requestCameraPermission(){
  try{
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title:'申请摄像头权限',
        message:'一个很牛逼的应用要征用你的摄像头',
        buttonPositive:'同意了',
        buttonNegative:'老子不干',
        buttonNeutral:'不想理你',
      },
    )
    if(granted === PermissionsAndroid.RESULTS.GRANTED){
        Alert.alert('获取成功了')
    }else{
      Alert.alert('用户不屌你')
    }
  }catch (e) {
    Alert.alert('获取权限失败',JSON.stringify(e))
  }
  
}