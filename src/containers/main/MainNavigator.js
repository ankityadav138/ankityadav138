import React from 'react';
import { View, Text, Image } from 'react-native';
import images from 'res/images';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import StoryCamera from './StoryCamera/StoryCamera';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DirectMessageScreen from './DirectMessage/DirectMessageScreen';
import StoryScreen from './story/StoryScreen';
import colors from '../../res/colors';
import UserPostScreen from '../main/profile/UserPostScreen';
import PostUserScreen from './post/PostUserScreen';
import AddingPostDetails from './addPost/addingPostDetails';

export default function MainNavigator({ navigation }) {
  const Stack = createStackNavigator();
  const NavigateToStoryCamera = () => navigation.navigate('StoryCamera');
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainScreen"
        component={TabNavigator}
        options={{ title: '', headerShown: false }}
        NavigateToStoryCamera={NavigateToStoryCamera}
      />
      <Stack.Screen
        name="StoryCameraScreen"
        component={StoryCamera}
        options={{
          title: '',
          gestureDirection: 'horizontal-inverted',
          headerBackTitleVisible: false,
          headerTransparent: true,

          headerLeft: () => (
            <View
              style={{ flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="DirectMessageScreen"
        component={DirectMessageScreen}
        options={({ navigation }) => ({
          // headerTransparent: true,
          headerTitle: () => (
            <View>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                johndoe
              </Text>
            </View>
          ),
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: colors.bottomBackGround,
            shadowColor: colors.seperatorLineColor,
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}>
              <Image
                source={images.dmBackButton}
                style={{ width: 20, height: 20, marginStart: 10 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => console.log('Pressed Write in DM')}
                style={{ flexDirection: 'row' }}>
                <Image
                  source={images.write}
                  style={{ width: 25, height: 25, marginEnd: 20 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => console.log('Pressed Video Camera in DM')}
                style={{ flexDirection: 'row' }}>
                <Image
                  source={images.videoCamera}
                  style={{ width: 30, height: 30, marginEnd: 10 }}
                />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="StoryScreen"
        component={StoryScreen}
        navigation={navigation}
        options={{
          headerStyle: { backgroundColor: 'black', shadowColor: 'black' },
          title: '',
          headerLeft: () => <View></View>,
        }}
      />
      <Stack.Screen name='UserPostScreen' component={UserPostScreen}
        options={{ title: '', headerShown: false }} />
      <Stack.Screen name="PostedUserScreen" component={PostUserScreen}
        options={{
          title: "",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: colors.loginInputBackground,
          },
        }} />
      <Stack.Screen
        name="Adding Details"
        component={AddingPostDetails}
        options={{
          title: '',
          headerShown:false
        }}
      />
    </Stack.Navigator>
  );
}
