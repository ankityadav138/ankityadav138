import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, SafeAreaView, TextInput } from 'react-native';
import colors from '../../../../res/colors';
import images from '../../../../res/images';
import user from '../../../../res/images/user.png'
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomActivityIndicator from '../../../../components/CustomActivityIndicator'
import AddComments from './components/AddComments';
import CommentView from './components/CommentView';

function PostCommentsScreen(props) {

    let postId = props.route.params.post.postId

    const [loading, setLoading] = useState(false)
    const [viewComments, setViewComments] = useState()
    const [emptyComments, setEmptyComments] = useState(false)

    const getComments = async () => {
        setLoading(true)
        const id = props.route.params.post.postId
        const token = await AsyncStorage.getItem('TOKEN')
        await fetch(`http://188.166.189.237:3001/api/v1/comment/viewComments/${id}`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then(res => res.json())
            .then((response) => {
                console.log(response)
                try {
                    if (response.message === "Successful") {
                        setLoading(false)
                        let commentInarray = response.data
                        console.log(response.data)
                        setViewComments(commentInarray)
                    } else if (response.message === "No comments") {
                        setLoading(false)
                        setEmptyComments(true)
                    }
                } catch (err) {
                    console.log(err)
                    alert("someting went wrong from server side, Please try after sometime")
                }
            })
    }

    useEffect(() => {
        getComments()
    }, [])

    if (loading) {
        return (
            <CustomActivityIndicator />
        )
    } else {
        return (
            <View style={styles.container}>
                {
                    emptyComments ? <View style={{ flex: 1 }}><Text style={{ color: "white" }}>No comments</Text></View> : <FlatList
                        data={viewComments}
                        renderItem={({ item, index }) =>
                            <CommentView YourComments={item} postId={postId} />
                        }
                    />
                }
                <AddComments getComments={getComments} postId={postId} />
            </View>
        )
    }


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
        paddingLeft: 10
    },
    image: {
        width: "95%",
        height: "40%"
    },

});