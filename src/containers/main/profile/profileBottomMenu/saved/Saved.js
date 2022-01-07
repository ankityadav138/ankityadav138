import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

function Saved() {
    return (
        <View style={styles.container}>


            <TouchableOpacity >


                <View style={styles.border} />

            </TouchableOpacity>
        </View>
    )
}

export default Saved

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    box: {
        width: 100,
        height: 100,

    },
    border: {
        borderWidth: 1,
        borderColor: "white",
        top: 20,
        width: "100%"
    },
})
