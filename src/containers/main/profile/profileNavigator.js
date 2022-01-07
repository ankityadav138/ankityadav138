import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import profileScreen from './profileScreen';
import { Text, View, Image, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../../res/colors';
import images from '../../../res/images';
// import SettingScreen from './profileBottomMenu/settings/SettingScreen';
import Archive from './profileBottomMenu/archive/Archive';
import Insight from './profileBottomMenu/insight/Insight';
import YourActivity from './profileBottomMenu/youractivity/YourActivity';
import QrCode from './profileBottomMenu/qrcode/QrCode';
import Saved from './profileBottomMenu/saved/Saved';
import CloseFriends from './profileBottomMenu/closeFriends/CloseFriends';
import DiscoverPeople from './profileBottomMenu/discoverPeople/DiscoverPeople';
import Covid from './profileBottomMenu/covid/Covid';
import SettingNavigator from './profileBottomMenu/settings/SettingNavigator';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function profileNavigator() {
  const Stack = createStackNavigator();
  const navigation = useNavigation()
  const [Data, setData] = useState([]);

  const API = 'http://188.166.189.237:3001/api/v1/users/me';
  useEffect(() => {
    async function getData() {

      const Demo_token = await AsyncStorage.getItem('TOKEN')

      const request = fetch(API, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${Demo_token}`
        }
      });
      const response = await request;
      const parsed = await response.json();
      setData(parsed.data);
    }
    getData();
  }, []);

  if (Data === [] || undefined) {
    return (
      <View style={{
        backgroundColor: "black", justifyContent: 'center',
        alignItems: "center", flex: 1
      }}>
        <ActivityIndicator size="small" color="white" />
      </View>
    )
  } else {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={profileScreen}
          options={{
            headerShown: false,
            headerTitle: (
              <TouchableOpacity
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                  {Data.username}
                </Text>
              </TouchableOpacity>
            ),
            headerTitleStyle: { alignSelf: 'center' },
            headerStyle: {
              backgroundColor: colors.bottomBackGround,
              shadowColor: colors.seperatorLineColor,
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Bottom")}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 10,
                  }}>
                  <Image
                    source={images.list3}
                    style={{ resizeMode: 'contain', width: 25, height: 25 }}
                  />
                </View>
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginStart: 10,
                  }}>
                  <Image
                    source={images.addIcon}
                    style={{ resizeMode: 'contain', width: 20, height: 20 }}
                  />
                </View>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          options={{
            headerTransparent: true,
            title: null,
            headerLeft: () => <Image source={images.close} style={{ width: 25, height: 25, tintColor: "white", }} />,
            headerRight: () =>
              <Image source={images.share} style={{ width: 25, height: 25, tintColor: "white", right: 10 }} />
          }}
          name='qrcode' component={QrCode} />
        <Stack.Screen name='SettingNavigator' component={SettingNavigator}
          options={{ title: '', headerShown: false }} />
        <Stack.Screen name='archive' component={Archive}
          options={{ title: '', headerShown: false }} />
        <Stack.Screen name='insight' component={Insight}
          options={{ title: '', headerShown: false }} />
        <Stack.Screen name='youractivity' component={YourActivity}
          options={{ title: '', headerShown: false }} />
        <Stack.Screen name='saved' component={Saved}
          options={{ title: '', headerShown: false }} />
        <Stack.Screen name='closefriends' component={CloseFriends}
          options={{ title: '', headerShown: false }} />
        <Stack.Screen name='discoverpeople' component={DiscoverPeople}
          options={{ title: '', headerShown: false }} />
        <Stack.Screen name='covid' component={Covid}
          options={{ title: '', headerShown: false }} />
      </Stack.Navigator>
    );
  }
}
