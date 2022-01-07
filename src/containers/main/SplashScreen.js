import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import images from '../../res/images';


export default function SplashScreen({ navigation }) {

    useEffect(() => {
        async function SplashHere() {
            const Demo_token = await AsyncStorage.getItem('TOKEN')

            if (Demo_token) {
                navigation.navigate('root')
            } else {
                navigation.navigate('Auth')
            }
        }
        SplashHere()
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: "black", justifyContent: "center", alignItems: "center" }}>
            <Image source={images.logo} style={{ height: 70, width: 200 }} />
            <ActivityIndicator size="small" color="white" />
        </View>
    )
}