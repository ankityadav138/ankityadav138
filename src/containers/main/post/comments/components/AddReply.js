import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import user from '../../../../../res/images/user.png'
import CustomActivityIndicator from '../../../../../components/CustomActivityIndicator'


export default function AddReply(props) {
    console.log("commentId in addrply", props)
    let commentId = props.commentId


    const [reply, setReply] = useState("")
    const [loading, setLoading] = useState(false)
    const [postButton, setPostButton] = useState(true)

    const replyOnComment = async () => {
        setLoading(true)
        const token = await AsyncStorage.getItem('TOKEN')
        if (!reply.trim()) {
            alert("Please e")
            setLoading(false)
        } else {

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
                    try {
                        if (response.message === "success") {
                            setLoading(false)
                            alert("replied successfully")
                        } else if (response.message === "") {
                            setLoading(false)
                            alert("please enter some text to reply")
                        }
                    } catch (err) {
                        console.log(err)
                    }
                })
        }
    }



    if (loading) {
        return (
            <CustomActivityIndicator />
        )
    } else {
        return (
            <View style={{ width: "100%", flexDirection: "row", backgroundColor: "transparent", borderWidth: 0.3, borderColor: "grey", height: 50 }}>
                <View style={{ paddingLeft: 8, alignSelf: "center" }}>
                    <Image source={user}
                        style={styles.commmentUserImage} />
                </View>

                <TextInput
                    style={{ marginLeft: 20, color: "white" }}
                    placeholder='Reply as ankit'
                    placeholderTextColor={"grey"}
                    onChangeText={(text) => setReply(text)}
                />

                {
                    postButton ? <TouchableOpacity style={styles.postButton} onPress={() => replyOnComment()}>
                        <Text style={{ color: "skyblue" }}>Post</Text>
                    </TouchableOpacity> :

                        <View style={styles.postButton} >
                            <Text style={{ color: "#9FD2E8" }}>Post</Text>
                        </View>
                }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    commmentUserImage: {
        width: 25,
        height: 25,
        alignSelf: "center",
        tintColor: "white"
    },
    postButton: {
        marginStart: 140,
        top: 13
    }
})
