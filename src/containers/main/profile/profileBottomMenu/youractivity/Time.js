import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import detailsIcon from '../../../../../res/images/info.png'


function Time() {
    return (
        <View style={styles.container}>

            <View style={{ flexDirection: "row", justifyContent: "space-between", top: 15 }}>
                <Text style={styles.headerText}>Time on Instagram</Text>
                <Image source={detailsIcon} style={styles.image} />
            </View>

            <View style={{ flexDirection: "column", alignItems: "center", top: 30 }}>
                <Text style={{ fontSize: 30, fontWeight: "bold", color: "red" }}>2h26m</Text>
                <Text style={{ fontWeight: "bold" }}>Daily average</Text>
                <Text style={styles.text}>The average time you've spent per day using</Text>
                <Text style={styles.text}>the Instagram app on this device in the last</Text>
                <Text style={styles.text}>week</Text>
            </View>

            <View style={styles.border} />

            <Text style={[styles.headerText, { top: 150 }]}>Manage your time</Text>

            <View style={styles.remainder}>
                <Text style={{ fontSize: 16 }}>Set daily remainder</Text>
                <Text style={styles.text}>We'll send you a reminder once you've reached</Text>
                <Text style={styles.text}>the time you've set for yourself</Text>
            </View>

            <View style={styles.remainder}>
                <Text style={{ fontSize: 16 }}>Notification settings</Text>
                <Text style={styles.text}>Choose which Instagram notifications you</Text>
                <Text style={styles.text}>receive. You can also mute push notifications.</Text>
            </View>




        </View >
    )
}

export default Time;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white"
    },
    image: {
        width: 20,
        height: 20,
        color: "black",
        right: 15
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 16,
        left: 15,

    },
    text: {
        color: "grey"
    },
    border: {
        borderWidth: 0.3,
        borderColor: "#D3D3D3",
        top: 140,
        width: "100%"
    },
    remainder: {
        top: 150,
        flexDirection: "column",
        marginVertical: 13,
        left: 15
    },

})
