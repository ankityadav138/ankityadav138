import React from 'react';
import { TouchableOpacity, Image, View, StyleSheet, Text } from 'react-native';
import images from '../../../res/images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PostLikes from './PostLikes';




// function tapToLike(likeIcon) {

//   // const [count, setCount] = React.useState(0)
//   if (likeIcon % 2 === 0) {
//     return images.redHeart;

//   } else {
//     return images.like;
//   }
// }
// function tapToBookmark(bookmarkIcon) {
//   if (bookmarkIcon % 2 === 0) {
//     return images.bookmarkWhite;
//   } else {
//     return images.bookmark;
//   }
// }




export default function PostActions({ post }) {
  console.log(post.postId)
  const ID = post.postId
  const Api = `http://188.166.189.237:3001/api/v1/post/like/${ID}`;

  const [count, setCount] = React.useState(post.likes)

  const increase = () => {
    if (count <= 0) {
      return setCount(count + 1)
    } else if (count > 0) {
      return setCount(count - 1)
    }
  }

  function tapToLike(likeIcon) {
    if (likeIcon % 2 === 1) {
      return (images.redHeart)
    } else {

      return (images.like);
    }
  }
  function tapToBookmark(bookmarkIcon) {
    if (bookmarkIcon % 2 === 0) {
      return images.bookmarkWhite;
    } else {
      return images.bookmark;
    }
  }

  const likeOnPost = async () => {

    const Demo_token = await AsyncStorage.getItem('TOKEN')
    // console.log("like Toekn", Demo_token);

    await fetch(Api, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Demo_token}`
      },
    }).then(res => res.json())
      .then((response) => {
        console.log(response)
      })
  }

  const [likeIcon, setLikeIcon] = React.useState(1);
  const [bookmarkIcon, setBookmarkIcon] = React.useState(1);

  return (
    <View style={{ flexDirection: "column" }}>
      <View style={Styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <TouchableOpacity onPress={() => { setLikeIcon(likeIcon + 1); likeOnPost(); increase() }}>
            <Image source={tapToLike(likeIcon)} style={Styles.actionIcons} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Pressed Comment')}>
            <Image source={images.comment} style={Styles.actionIcons} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Pressed Direct Message')}>
            <Image source={images.direct_message} style={Styles.actionIcons} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => setBookmarkIcon(bookmarkIcon + 1)}>
          <Image
            source={tapToBookmark(bookmarkIcon)}
            style={Styles.actionIcons}
          />
        </TouchableOpacity>
      </View>
      <PostLikes post={count} />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    //paddingStart: 20,
    marginEnd: 15,
    marginTop: 15,
  },
  actionIcons: {
    width: 23,
    height: 23,
    marginStart: 15,
  },
});
