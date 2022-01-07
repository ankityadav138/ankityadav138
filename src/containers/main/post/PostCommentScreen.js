import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native';
import images from '../../../res/images';

const YourComments = [
    {
        key: '1',
        name: 'micheal',
        comments: '@micheal liked your Photo',
    },
    { key: '2', name: 'lara', comments: '@lara commented on your post' },
    { key: '3', name: 'jack', comments: '@jack shared a post to you' },
    {
        key: '4',
        name: 'barack',
        comments: '@barack commented- Is that you??',
    },
    { key: '5', name: 'carla', comments: '@carla and 88 others liked your photo' },
    { key: '6', name: 'juan', comments: '@juan commented on your post' },
    { key: '7', name: 'donna', comments: '@donna commented: Awesome' },
    { key: '8', name: 'marta', comments: '@marta liked and commented on your photo' },
    { key: '9', name: 'paula', comments: '@paula shared your post' },
    { key: '10', name: 'cardi', comments: '@bejong @cardi and 87 others liked your photo' },
    { key: '11', name: 'lana', comments: '@lana liked your comment: all voices needed.' },
    { key: '12', name: 'robert', comments: '@robert magna fermentum iaculis eu non' },
    { key: '13', name: 'george', comments: '@george fermentum posuere urna' },
    { key: '14', name: 'lara', comments: '@lara facilisis leo vel fringilla est' },
    { key: '15', name: 'lara', comments: '@lara cquam viverra orci sagittis eu' },
];

const CommentView = (item) => {
    return (
        <SafeAreaView style = {styles.container2}>
            <View style = {{paddingLeft:8}}>
                <Image source={images.redHeart}
                style = {styles.compImage} />
            </View>
            <View>
            <Text style={styles.textColor}>
                {item.YourComments.name}
                {"\n"}
                {item.YourComments.comments}
            </Text>
            </View>
        </SafeAreaView>
    )
}

function PostCommentsScreen() {
    return (
        <View style={styles.container}>
            <Image source={images.facebookLogo}
            resizeMode="contain"
                style={styles.image}
            />
            <FlatList
                data={YourComments}
                renderItem={({ item, index }) => <CommentView YourComments={item} />}
            />
        </View>
    )
};

export default PostCommentsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
    },
    textColor: {
        color: "#fff",
        fontSize: 15,
        paddingLeft:10
    },
    image: {
        width: "95%",
        height: "40%"
    },
    compImage:{
        width:40,
        height:40,
        borderRadius:30
    },
    container2:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"flex-start"
    }
});