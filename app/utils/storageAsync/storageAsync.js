import { AsyncStorage } from 'react-native';

class StorageAsync {
    /**
     * getItem
     * @param key
     * @param callback
     */
    static get(key, callback) {
        AsyncStorage.getItem(key, (error, result) => {
            callback(JSON.parse(result), error);
        })
    }

    /**
     * setItem
     * @param key
     * @param value
     * @param callback
     */
    static set(key, value, callback) {
        AsyncStorage.setItem(key, JSON.stringify(value), error => {
            if (callback) callback(error);
        });
    }

    /**
     * 移除
     * @param key
     * @param callback
     */
    static remove(key, callback) {
        AsyncStorage.removeItem(key, error => {
            if (callback) callback(error);
        });
    }


    /**
     * 清空全部的AsyncStorage数据
     * @param callback
     */
    static clear(callback) {
        AsyncStorage.clear(error => {
            if (callback) callback(error);
        });
    }

    /**
     * 获取全部keys
     * @param callback
     */
    static getAllKeys(callback) {
        AsyncStorage.getAllKeys((error, keys) => {
            callback(keys, error);
        })
    }

    /**
     * 获取 keys 所包含的所有字段的值
     * @param keys
     * @param callback
     */
    static multiGet(keys, callback) {
        AsyncStorage.multiGet(keys, (errors, result) => {
            callback(result, errors);
        })
    }

    /**
     * 移除多个
     * @param keys
     * @param callback
     */
    static multiRemove(keys, callback) {
        AsyncStorage.multiRemove(keys, errors => {
            if (callback) callback(errors);
        });
    }

}

export default StorageAsync;