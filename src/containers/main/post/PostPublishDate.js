import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import colors from '../../../res/colors';

export default function PostPublishDate({ post }) {

  if (post === undefined) {
    return (
      <View>
        <Text>
          {" "}
        </Text>
      </View>
    )
  } else {
    return (
      <TouchableOpacity onPress={() => console.log('Pressed Post Publish Date')}>
        <Text
          style={{
            color: colors.textFaded2,
            marginTop: 5,
            marginStart: 15,
            fontSize: 12,
          }}>
          {post.postedAt}
        </Text>
      </TouchableOpacity>
    )
  };
};
