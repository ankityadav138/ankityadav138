import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Notification from './Notification';
import PCS from './PSC';
import FollowingFollowers from './FollowingFollowers';
import DirectmessageCalls from './DirectmessageCalls';
import LiveandVideo from './LiveandVideo';
import Fundraisers from './Fundraisers';
import FromInstagram from './FromInstagram';
import EmailandSms from './EmailandSms';
import Shopping from './Shopping';



function NotificationsNavigator() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name='Notifications' component={Notification} />
            <Stack.Screen name='Post, stories and comments' component={PCS} />
            <Stack.Screen name='FollowingFollowers' component={FollowingFollowers} />
            <Stack.Screen name='DirectmessageCalls' component={DirectmessageCalls} />
            <Stack.Screen name='Live and video' component={LiveandVideo} />
            <Stack.Screen name='Fundraisers' component={Fundraisers} />
            <Stack.Screen name='From Instagram' component={FromInstagram} />
            <Stack.Screen name='Email and SMS notifications' component={EmailandSms} />
            <Stack.Screen name='Shopping' component={Shopping} />
        </Stack.Navigator>
    )
}

export default NotificationsNavigator
