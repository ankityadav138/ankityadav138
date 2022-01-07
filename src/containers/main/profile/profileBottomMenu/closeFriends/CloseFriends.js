import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, TextInput, CheckBox } from 'react-native';
import searchIcon from '../../../../../res/images/search.png';
import blueCheck from '../../../../../res/images/blueCheck.png';
import circle from '../../../../../res/images/dry-clean.png'

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
    }
]

function CloseFriends() {

    const [isSelected, setSelection] = useState(false);

    const check = () => {
        setisCheck(true)
    }

    const cheking = () => {
        setisCheck(false)
    }

    return (
        <View style={styles.container}>

            {/* header Section */}
            <View style={styles.header}>
                <Text style={styles.headerText}>We don't send notifications when you edit</Text>
                <Text style={styles.headerText}>your Close Friends list</Text>

                <View style={styles.searchBox}>
                    <Image source={searchIcon} style={styles.icon} />
                    <TextInput
                        style={{ left: 30, top: 3 }}
                        placeholder='Search'
                    />
                </View>
                <View style={styles.border} />
            </View>

            <Text style={styles.suggested}>Suggested</Text>

            <FlatList
                style={{ top: 60 }}
                data={data}
                keyExtractor={data.id}
                renderItem={({ item }) =>
                    <View style={styles.flatlist}>

                        <View style={styles.box}>
                        </View>

                        <View style={{ flexDirection: "column", right: 80 }}>
                            <Text style={{ fontSize: 15 }}>user_1</Text>
                            <Text style={{ color: "grey", fontSize: 15 }}>name</Text>
                        </View>


                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                        />
                    </View>
                }
            />
            <TouchableOpacity style={styles.button}>
                <Text style={{ color: "white", fontSize: 18, alignSelf: "center", }}>Done</Text>
            </TouchableOpacity>

        </View>
    )
}

export default CloseFriends

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white",
        alignItems: "center"
    },

    suggested: {
        fontSize: 16,
        fontWeight: "bold",
        right: 120,
        top: 50
    },
    border: {
        borderWidth: 0.3,
        borderColor: "#D3D3D3",
        top: 20,
        width: "100%"
    },

    header: {
        width: "100%",
        alignItems: "center",
        top: 10,
        flexDirection: "column"
    },

    headerText: {
        color: "grey"
    },

    icon: {
        height: 18,
        width: 18,
        top: 10,
        left: 13,
        tintColor: "black"
    },

    searchBox: {
        width: "90%",
        height: 35,
        borderRadius: 10,
        backgroundColor: "#D3D3D3",
        flexDirection: "row",
        alignSelf: "center",
        top: 10
    },

    flatlist: {
        width: 350,
        flex: 1,
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        top: 10
    },
    userText: {

    },
    nameText: {

    },

    box: {
        width: 45,
        height: 45,
        backgroundColor: "grey",
        borderRadius: 400 / 2,
        left: 15
    },

    button: {
        width: "95%",
        height: "8%",
        bottom: 10,
        backgroundColor: "#3EA1EC",
        borderRadius: 10,
        justifyContent: "center"
    }



})
