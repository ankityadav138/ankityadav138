import React, { useState, useEffect } from 'react'
import { TextInput, TouchableOpacity, View, Text, FlatList, StyleSheet, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import colors from '../../../../res/colors'
import CustomActivityIndicator from '../../../../components/CustomActivityIndicator'
import ViewReply from './components/ViewReply'
import user from '../../../../res/images/user.png'
import AddReply from './components/AddReply'

export default function ReplyCommentScreen(props) {
    let comment = props.route.params.item.YourComments
    let commentId = props.route.params.item.YourComments.id

    const [reply, setReply] = useState("")
    const [allReply, setAllReply] = useState()
    const [loading, setLoading] = useState(false)
    const [emptyReplies, setEmptyReplies] = useState(false)
    const [postButton, setPostButton] = useState(true)

    const replyOnComment = async () => {

        const token = await AsyncStorage.getItem('TOKEN')
        await fetch(`http://188.166.189.237:3001/api/v1/comment/reply/${commentId}`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                reply
            })
        }).then(res => res.json())
            .then((response) => {
                console.log(response)
            })
    }

    const viewReplies = async () => {
        setLoading(true)
        const token = await AsyncStorage.getItem('TOKEN')
        await fetch(`http://188.166.189.237:3001/api/v1/comment/viewReplies/${commentId}`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then(res => res.json())
            .then((response) => {
                console.log("Replies", response)
                try {
                    if (response.message === "Successful") {
                        setLoading(false)
                        setAllReply(response.data)
                    } else if (response.message === "Comment not found") {
                        setLoading(false)
                        setEmptyReplies(true)
                    }
                } catch (err) {
                    console.log(err)
                }
            })
    }

    useEffect(() => {
        viewReplies()
    }, [])

    if (loading) {
        return <CustomActivityIndicator />
    } else {
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.subContainer}>
                        <View style={{ paddingLeft: 8 }}>
                            <Image source={user}
                                style={styles.compImage} />
                        </View>

                        <View style={styles.commentSection}>
                            <Text style={{ color: "white", }}>
                                <Text style={styles.userName}>
                                    {comment.username} {' '}
                                </Text>{comment.comment}
                            </Text>
                        </View>


                    </View>
                </View>

                {
                    emptyReplies ? <View>
                        <Text>No Replies</Text>
                    </View> :
                        <FlatList
                            data={allReply}
                            renderItem={({ item, index }) =>
                                <View>
                                    <ViewReply data={item} />
                                </View>
                            }
                        />

                }
                <AddReply commentId={commentId} />
            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background
    },
    commmentUserImage: {
        width: 25,
        height: 25,
        alignSelf: "center",
        tintColor: "white"
    },
    userName: {
        color: colors.text,
        fontWeight: "bold",
        fontSize: 15,
        padding: 10
    },
    postButton: {
        marginStart: 140,
        top: 13
    },
    subContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginVertical: 20,
        right: 8
    },
    compImage: {
        width: 25,
        height: 25,
        borderRadius: 30,
        tintColor: "white"
    },
    commentSection: {
        width: 290,
        alignSelf: "center",
        marginLeft: 10
    },
})
