import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import user from '../../../../../res/images/user.png'
import images from '../../../../../res/images';
import colors from '../../../../../res/colors';

export default function ViewReply(props) {
    console.log("replies in components", props.data)

    const [likeIcon, setLikeIcon] = React.useState(1);
    const [count, setCount] = useState(props.data.likes)

    const changeInLike = () => {
        if (likeIcon % 2 === 1) {
            return setCount(count + 1)
        } else if (likeIcon % 2 === 0) {
            return setCount(count - 1)
        }
    }

    function tapToLike(likeIcon) {
        if (likeIcon % 2 === 0) {
            return images.redHeart;
        } else {
            return images.like;
        }
    }

    return (
        <SafeAreaView style={styles.container2}>

            <View style={styles.subContainer}>
                <View style={{ paddingLeft: 8 }}>
                    <Image source={user}
                        style={styles.compImage} />
                </View>

                <View style={styles.commentSection}>
                    <Text style={{ color: "white" }}>
                        <Text style={styles.userName}>
                            {props.data.username} {' '}
                        </Text>{props.data.reply}
                    </Text>
                </View>

                <TouchableOpacity style={{ top: 30, right: 10, }} onPress={() => { setLikeIcon(likeIcon + 1); changeInLike() }}>
                    <Image source={tapToLike(likeIcon)} style={styles.actionIcons} />
                </TouchableOpacity>
            </View>

            <View style={styles.footerSection}>
                <Text style={styles.greyText}>{count} likes</Text>
                <Text style={styles.greyText}>Reply</Text>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container2: {
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginVertical: 20
    },
    subContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start"
    },
    compImage: {
        width: 25,
        height: 25,
        borderRadius: 30,
        tintColor: colors.text
    },
    commentSection: {
        width: 290,
        alignSelf: "center",
        marginLeft: 10,
        // backgroundColor: ""
    },
    userName: {
        color: colors.text,
        // color: "black",
        fontWeight: "bold",
        fontSize: 15
    },
    actionIcons: {
        width: 17,
        height: 17,
    },
    footerSection: {
        flexDirection: "row",
        width: "50%",
        justifyContent: "space-around",
        marginLeft: 40,
        marginTop: 5,
    },
    greyText: {
        color: "grey", fontSize: 12
    },
})
