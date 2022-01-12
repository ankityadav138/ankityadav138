import React from 'react'
import { View, ActivityIndicator } from 'react-native'

export default function CustomActivityIndicator() {
    return (
        <View style={{ flex: 1, backgroundColor: "black", justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size="small" color="white" />
        </View>
    )
}
