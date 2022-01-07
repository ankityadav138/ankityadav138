import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ScrollView } from 'react-native'
import facebookLogo from '../../../../../res/images/facebookLogo.png'


const data = [
    {
        id: 1,
        userName: "user_1",
        name: "User",
        image: ""
    },
    {
        id: 2,
        userName: "user_2",
        name: "User2",
        image: ""
    },
    {
        id: 3,
        userName: "user_3",
        name: "User3",
        image: ""
    },
    {
        id: 4,
        userName: "user_4",
        name: "User4",
        image: ""
    },
    {
        id: 5,
        userName: "user_5",
        name: "User5",
        image: ""
    },
    {
        id: 6,
        userName: "user_6",
        name: "User6",
        image: ""
    },
    {
        id: 7,
        userName: "user_1",
        name: "User",
        image: ""
    },
    {
        id: 8,
        userName: "user_2",
        name: "User2",
        image: ""
    },
    {
        id: 9,
        userName: "user_3",
        name: "User3",
        image: ""
    },
    {
        id: 10,
        userName: "user_4",
        name: "User4",
        image: ""
    },
    {
        id: 11,
        userName: "user_5",
        name: "User5",
        image: ""
    },
    {
        id: 12,
        userName: "user_6",
        name: "User6",
        image: ""
    },
    {
        id: 13,
        userName: "user_5",
        name: "User5",
        image: ""
    },
    {
        id: 14,
        userName: "user_6",
        name: "User6",
        image: ""
    }
]

const newSuggestion = [
    {
        id: 1,
        userName: "user_1",
        name: "User",
        image: ""
    },
    {
        id: 2,
        userName: "user_2",
        name: "User2",
        image: ""
    },
]

function DiscoverPeople() {
    return (
        <ScrollView style={styles.container}>

            <View style={styles.header}>
                <Image source={facebookLogo} style={styles.facebook} />

                <View style={styles.headerText}>
                    <Text style={{ fontWeight: "bold" }}>Connect to Facebook</Text>
                    <Text style={{ color: "grey" }}>Follow your fiends</Text>
                </View>

                <TouchableOpacity style={styles.connectButton}>
                    <Text style={{ fontSize: 14, color: "white", alignSelf: "center", fontWeight: "bold" }}>Connect</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.border} />

            <View style={{ top: 50 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", left: 15 }}>New suggestions</Text>
                {
                    newSuggestion.map(({ item }) => {
                        return (
                            <View style={{ marginVertical: 8, justifyContent: "space-between", top: 20, flexDirection: "row" }}>
                                <View style={styles.box}>
                                </View>

                                <View style={{ flexDirection: "column", right: 40 }}>
                                    <Text style={{ fontSize: 15 }}>user_1</Text>
                                    <Text style={{ color: "grey", fontSize: 15 }}>name</Text>
                                    <Text style={{ color: "grey", fontSize: 13 }}>New to Instagram</Text>

                                </View>

                                <TouchableOpacity style={{ width: 70, top: 17, right: 10, justifyContent: "center", borderRadius: 5, height: 28, backgroundColor: "#3EA1EC" }}>
                                    <Text style={{ alignSelf: "center", fontWeight: "bold", color: "white" }}>Follow</Text>
                                </TouchableOpacity>


                            </View>
                        )
                    })
                }
            </View>

            <View style={{ top: 100 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", left: 15 }}>All suggestions</Text>

                {
                    data.map(({ item }) => {
                        return (
                            <View style={{ marginVertical: 8, justifyContent: "space-between", top: 20, flexDirection: "row" }}>
                                <View style={styles.box}>
                                </View>

                                <View style={{ flexDirection: "column", right: 40 }}>
                                    <Text style={{ fontSize: 15 }}>user_1</Text>
                                    <Text style={{ color: "grey", fontSize: 15 }}>name</Text>
                                    <Text style={{ color: "grey", fontSize: 13 }}>New to Instagram</Text>

                                </View>

                                <TouchableOpacity style={{ width: 70, top: 17, right: 10, justifyContent: "center", borderRadius: 5, height: 28, backgroundColor: "#3EA1EC" }}>
                                    <Text style={{ alignSelf: "center", fontWeight: "bold", color: "white" }}>Follow</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </View>

        </ScrollView>
    )
}

export default DiscoverPeople

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        flexDirection: "column"
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        top: 10
    },
    facebook: {
        height: 30,
        width: 30,
        top: 5

    },
    headerText: {
        flexDirection: "column"
    },
    connectButton: {
        width: 70,
        height: 30,
        backgroundColor: "#3EA1EC",
        justifyContent: "center",
        borderRadius: 5,
        left: 20,
        top: 10
    },
    border: {
        borderWidth: 0.3,
        borderColor: "#D3D3D3",
        top: 20,
        width: "100%"
    },

    box: {
        width: 60,
        height: 60,
        backgroundColor: "grey",
        borderRadius: 400 / 2,
        left: 15
    },
})
