import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import instaqr from '../../../../../res/images/instaqr.png'


function QrCode() {
    return (
        <LinearGradient style={styles.container} colors={['#FF1493', '#FFFF00']}>
            <View style={styles.qrbox}>

                <Image source={instaqr} style={{ height: "70%", width: "70%", tintColor: "#FF1493" }} />
                <Text style={{ fontSize: 25, fontWeight: "bold", top: 10, color: "#FF1493" }}>USER_NAME</Text>

            </View>
        </LinearGradient>
    )
}

export default QrCode

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },

    qrbox: {
        alignSelf: "center",
        width: "80%",
        height: "45%",
        backgroundColor: "white",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    }
})
