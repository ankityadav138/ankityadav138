import React from 'react';
import { Image, StyleSheet, Dimensions, View, Text } from 'react-native';

export default function PostImage({ post }) {

  if (post == undefined) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "white" }}>
          No image Found!
        </Text>
      </View>
    )
  } else {
    return (
      <Image source={{ uri: post.image }} style={Styles.postImg} />
    )
  }
};

const Styles = StyleSheet.create({
  postImg: {
    height: Dimensions.get('screen').height / 3,
    width: Dimensions.get('screen').width,
    resizeMode: 'contain',
  },
});
