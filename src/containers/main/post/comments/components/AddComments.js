import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native'
import colors from '../../../../../res/colors';
import images from '../../../../../res/images';
import user from '../../../../../res/images/user.png'
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomActivityIndicator from '../../../../../components/CustomActivityIndicator';


export default function AddComments(props) {
    console.log("props in addcomment", props.getComments)
    const refreshComment = props.getComments

    const [postButton, setPostButton] = useState(true)
    const [comment, setComment] = useState("")
    const [loading, setLoading] = useState(false)

    const addComments = async () => {
        setLoading(true)
        const token = await AsyncStorage.getItem('TOKEN')
        console.log(token)
        const id = props.postId
        await fetch(`http://188.166.189.237:3001/api/v1/comment/${id}`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                comment: comment
            })
        }).then(res => res.json())
            .then((response) => {
                console.log(response)
                try {
                    if (response.message === "success") {
                        setLoading(false)
                        refreshComment
                        alert("Your comment successfuly posted")
                    } else {
                        setLoading(false)
                        alert("something went wrong")
                    }
                } catch (error) {
                    console.log(error)
                }
            })
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
                    placeholder='comment as ankit'
                    placeholderTextColor={"grey"}
                    onChangeText={(text) => setComment(text)}
                />

                {
                    postButton ? <TouchableOpacity style={styles.postButton} onPress={() => addComments()}>
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
    container: {
        width: "100%",
        backgroundColor: colors.background,
        flexDirection: "row",
        borderWidth: 0.5,
        borderColor: "grey"
    },
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
