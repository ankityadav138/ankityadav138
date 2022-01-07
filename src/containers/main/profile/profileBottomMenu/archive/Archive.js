import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import StoryArchive from './StoryArchive';
import Calender from './Calender';
import Location from './Location';
import story from '../../../../../res/images/story.png'
import calendar from '../../../../../res/images/calendar.png'
import map from '../../../../../res/images/map.png'

const Tab = createMaterialTopTabNavigator();

function Archive() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                options={{
                    title: () => <View>
                        <Image source={story} style={{ width: 25, height: 25 }} />
                    </View>
                }}
                name="Stories" component={StoryArchive} />
            <Tab.Screen
                options={{
                    title: () => <View>
                        <Image source={calendar} style={{ width: 25, height: 25 }} />
                    </View>
                }}
                name="Calendar" component={Calender} />
            <Tab.Screen

                options={{
                    title: () => <View>
                        <Image source={map} style={{ width: 25, height: 25 }} />
                    </View>
                }}
                name="Location" component={Location} />
        </Tab.Navigator>
    )
}

export default Archive

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
