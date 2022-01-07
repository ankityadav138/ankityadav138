import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Links from './Links';
import Time from './Time';


const Tab = createMaterialTopTabNavigator();

function YourActivity() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="LINKS" component={Links} />
            <Tab.Screen name="TIME" component={Time} />
        </Tab.Navigator>
    )
}

export default YourActivity

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
