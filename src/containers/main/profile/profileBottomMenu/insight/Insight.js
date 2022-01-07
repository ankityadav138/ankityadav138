import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

function Insight() {
    return (
        <View style={styles.container}>
            <Text>
                Insight Screen
            </Text>
        </View>
    )
}

export default Insight

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
