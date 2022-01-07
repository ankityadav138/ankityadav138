import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import lockIcon from '../../../../../../res/images/lock.png'
import comment from '../../../../../../res/images/comment.png'
import eye from '../../../../../../res/images/eye.png'
import add from '../../../../../../res/images/add.png'
import mention from '../../../../../../res/images/mention.png'
import story from '../../../../../../res/images/story.png'
import reels from '../../../../../../res/images/reels.png'
import radio from '../../../../../../res/images/radio.png'
import guid from '../../../../../../res/images/guide-book.png'
import checkuser from '../../../../../../res/images/checkuser.png'
import messanges from '../../../../../../res/images/messenger.png'
import close from '../../../../../../res/images/close.png'
import mute from '../../../../../../res/images/delete-account.png'


const interaction = [
    {
        id: 1,
        text: "Limits",
        icon: comment
    },
    {
        id: 2,
        text: "Hidden words",
        icon: eye
    },
    {
        id: 3,
        text: "Comments",
        icon: comment
    },
    {
        id: 4,
        text: "Posts",
        icon: add
    },
    {
        id: 5,
        text: "Mentions",
        icon: mention
    },
    {
        id: 6,
        text: "Story",
        icon: story
    },
    {
        id: 7,
        text: "Reels and remix",
        icon: reels
    },
    {
        id: 8,
        text: "Live",
        icon: radio
    },
    {
        id: 9,
        text: "Guides",
        icon: guid
    },
    {
        id: 10,
        text: "Activity status",
        icon: checkuser
    },
    {
        id: 11,
        text: "Messages",
        icon: messanges
    },
]

// const connection = [
//     {
//         id: 1,
//         text: "Restricted accounts",
//         icon: mute
//     },
//     {
//         id: 2,
//         text: "Blocked accounts",
//         icon: close
//     },
//     {
//         id: 3,
//         text: "Muted accounts",
//         icon: mute
//     },
//     {
//         id: 4,
//         text: "Accounts you follow",
//         icon: checkuser
//     },
// ]

function Privacy() {
    return (
        <ScrollView style={styles.container}>

            <View style={{ flexDirection: "column", top: "5%", }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", left: 10 }}>Account privacy</Text>

                <TouchableOpacity style={{ flexDirection: "row", top: 23, justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 16, left: 20, }}>Private account</Text>
                    <Text>off</Text>
                </TouchableOpacity>
            </View>

            <View style={{ borderWidth: 0.3, borderColor: "#D3D3D3", top: "13%" }} />


            <Text style={{ fontSize: 16, fontWeight: "bold", left: 10, top: "17%" }}>Interaction</Text>
            <FlatList
                style={{ height: 800, }}
                data={interaction}
                keyExtractor={interaction.id}
                renderItem={({ item }) =>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate(item.text)} style={styles.contents}>
                            <Image source={item.icon} style={styles.iconstyle} />
                            <Text style={styles.fontstyle}>{item.text}</Text>
                        </TouchableOpacity>
                    </View>
                }
            />
        </ScrollView>
    )
}

export default Privacy;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
        backgroundColor: "white"
    },
    contents: {
        flexDirection: "row",
        marginVertical: 13,
        marginHorizontal: 20,
        top: 100,
        backgroundColor: "green"

    },
    iconstyle: {
        height: 24,
        width: 24,
        tintColor: "black"
    },
    fontstyle: {
        fontSize: 16,
        left: 10
    },
    textstyle: {
        fontSize: 14,
        color: "grey",
        top: 10,

    }
})
