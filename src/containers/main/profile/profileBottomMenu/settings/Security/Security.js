import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

function Security() {
    return (
        <View style={styles.container}>
            <Text>
                Security screen
            </Text>
        </View>
    )
}

export default Security;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        flexDirection: "column"
    }
})
