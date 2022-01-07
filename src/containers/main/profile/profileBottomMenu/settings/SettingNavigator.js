import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import SettingScreen from './SettingScreen';
import FollowInvite from './FollowInvite/FollowInvite';
import Notification from './NotificationScreens/Notification';
import Creator from './Creator/Creator';
import Privacy from './Privacy/Privacy';
import Security from './Security/Security';
import Ads from './Ads/Ads';
import Account from './Account/Account';
import Help from './Help/Help';
import About from './About/About';
import Theme from './Theme';
import NotificationsNavigator from './NotificationScreens/NotificationsNavigator';
import PCS from './NotificationScreens/PSC';
import FollowingFollowers from './NotificationScreens/FollowingFollowers';
import DirectmessageCalls from './NotificationScreens/DirectmessageCalls';
import LiveandVideo from './NotificationScreens/LiveandVideo';
import Fundraisers from './NotificationScreens/Fundraisers';
import FromInstagram from './NotificationScreens/FromInstagram';
import EmailandSms from './NotificationScreens/EmailandSms';
import Shopping from './NotificationScreens/Shopping';
import colors from '../../../../../res/colors';

function SettingNavigator() {

    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitle: "",
                headerStyle: {
                    backgroundColor: colors.background,
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            <Stack.Screen name='Settings' component={SettingScreen} />
            <Stack.Screen name='Follow and invite friends' component={FollowInvite} />
            <Stack.Screen name='NotificationsNavigator' component={NotificationsNavigator} />
            <Stack.Screen name='Notifications' component={Notification} />
            <Stack.Screen name='Creator' component={Creator} />
            <Stack.Screen name='Privacy' component={Privacy} />
            <Stack.Screen name='Security' component={Security} />
            <Stack.Screen name='Ads' component={Ads} />
            <Stack.Screen name='Account' component={Account} />
            <Stack.Screen name='Help' component={Help} />
            <Stack.Screen name='About' component={About} />
            <Stack.Screen name='Theme' component={Theme} />
            <Stack.Screen name='Post, stories and comments' component={PCS} />
            <Stack.Screen name='Following and followers' component={FollowingFollowers} />
            <Stack.Screen name='Direct messages and calls' component={DirectmessageCalls} />
            <Stack.Screen name='Live and video' component={LiveandVideo} />
            <Stack.Screen name='Fundraisers' component={Fundraisers} />
            <Stack.Screen name='From Instagram' component={FromInstagram} />
            <Stack.Screen name='Email and SMS notifications' component={EmailandSms} />
            <Stack.Screen name='Shopping' component={Shopping} />

        </Stack.Navigator>
    )
}

export default SettingNavigator
