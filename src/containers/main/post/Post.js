import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostActions from './PostActions';
import PostLikes from './PostLikes';
import PostText from './PostText';
import PostComments from './PostComments';
import PostPublishDate from './PostPublishDate';

export default function Post({ data }) {

  // if (data === undefined) {
  //   return (
  //     <View style={{
  //       backgroundColor: "black", justifyContent: 'center',
  //       alignItems: "center", flex: 1
  //     }}>
  //       <ActivityIndicator size="small" color="white" />
  //     </View>
  //   )
  // } else {
  return (
    <React.Fragment>
      <PostHeader />
      <PostImage post={data} />
      <PostActions post={data} />
      {/* <PostLikes post={data} /> */}
      <PostText post={data} />
      <PostComments post={data} />
      <PostPublishDate post={data} />
    </React.Fragment>
  );
};
// };
