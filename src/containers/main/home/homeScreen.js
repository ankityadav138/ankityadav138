import React, { useEffect, useState } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import Post from '../post/Post'
import colors from '../../../res/colors';
import StoryContainer from '../story/StoryContainer';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function homeScreen({ navigation }) {
  const [Data, setData] = useState([])
  const [stories, setStories] = useState([])
  console.log("datass", Data);

  const API = 'http://188.166.189.237:3001/api/v1/users/feed';
  useEffect(() => {
    async function getData() {

      const Demo_token = await AsyncStorage.getItem('TOKEN')
      console.log("demo Toekn", Demo_token);

      const request = fetch(API, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${Demo_token}`,
        }
      });
      const response = await request;
      const parsed = await response.json();
      setData(parsed.data);
    }
    getData();
  }, []);


  const storyOnPress = () => navigation.navigate('StoryScreen');

  const APIs = 'http://188.166.189.237:3001/api/v1/story/getStory';
  useEffect(() => {
    async function getData1() {

      const Demo_token1 = await AsyncStorage.getItem('TOKEN')

      const request = fetch(APIs, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${Demo_token1}`,
        }
      });
      const response1 = await request;
      const parsed1 = await response1.json();
      setStories(parsed1.data);
      console.log("story", stories);
    }
    getData1();
  }, []);


  if (Data === undefined) {
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
      <FlatList
        style={{ backgroundColor: colors.background }}
        data={Object.values(Data)}
        ListHeaderComponent={() => (
          <StoryContainer stories={stories} storyOnPress={storyOnPress} />
        )}
        keyExtractor={item => item.postId}
        renderItem={({ item, index }) => (
          <Post data={item} />
        )}
      />
    );
  }
}
