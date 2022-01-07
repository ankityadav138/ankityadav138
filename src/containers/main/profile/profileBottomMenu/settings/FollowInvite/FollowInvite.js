import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'
import emailIcon from '../../../../../../res/images/envelope.png';
import messageIcon from '../../../../../../res/images/messenger.png';
import shareIcon from '../../../../../../res/images/share.png'

const data = [
    {
        id: 1,
        text: "Invite friends by email",
        icon: emailIcon
    },
    {
        id: 2,
        text: "Invite friends via SMS",
        icon: messageIcon
    },
    {
        id: 3,
        text: "Invite friends via...",
        icon: shareIcon
    }
]

function FollowInvite() {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) =>
                    <TouchableOpacity style={styles.invite}>
                        <Image source={item.icon} style={styles.icon} />
                        <Text style={styles.text}>{item.text}</Text>

                    </TouchableOpacity>
                }
            />
        </View>
    )
}

export default FollowInvite;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "black"
    },
    invite: {
        top: 10,
        marginVertical: 10,
        flexDirection: "row",
        marginHorizontal: 25
    },
    icon: {
        top: 2,
        right: 10,
        width: 22,
        height: 22,
        tintColor: "white"
    },
    text: {
        fontSize: 17,
        color:"white"
    }
})
