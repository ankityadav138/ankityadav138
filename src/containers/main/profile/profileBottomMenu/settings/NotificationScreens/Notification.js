import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';

function Notification() {

    const navigation = useNavigation()

    const data = [
        {
            id: 1,
            text: "Post, stories and comments"
        },
        {
            id: 2,
            text: "Following and followers"
        },
        {
            id: 3,
            text: "Direct messages and calls"
        },
        {
            id: 4,
            text: "Live and video"
        },
        {
            id: 5,
            text: "Fundraisers"
        },
        {
            id: 6,
            text: "From Instagram"
        }

    ]



    return (
        <View style={styles.container}>

            <View style={{ left: 15, top: 20 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>Push notifications</Text>
            </View>

            <TouchableOpacity style={{ flexDirection: "row", top: "10%", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 16, left: 15 }}>Pause all</Text>
                <Text style={{ fontSize: 16, right: 15 }}>off</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: "column", top: 50 }}>
                <FlatList
                    data={data}
                    keyExtractor={data.id}
                    renderItem={({ item }) =>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate(item.text)} style={styles.contents}>
                                <Text style={styles.fontstyle}>{item.text}</Text>
                            </TouchableOpacity>
                        </View>
                    }
                />

                <View style={{ borderWidth: 0.3, borderColor: "#D3D3D3", top: "7%" }} />

                <Text style={{ fontWeight: "bold", fontSize: 16, left: 15, top: "15%" }}>Other notification types</Text>

                <View style={{ left: 15, top: "15%", flexDirection: "column", marginVertical: 15 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Email and SMS notifications")}>
                        <Text style={{ fontSize: 16, marginVertical: 10 }}>Email and SMS</Text>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => navigation.navigate("Shopping")}>
                        <Text style={{ fontSize: 16, marginVertical: 10 }}>Shopping</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default Notification;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        flexDirection: "column"

    },
    fontstyle: {
        fontSize: 16,
        left: 10
    },
    contents: {
        flexDirection: "row",
        marginVertical: 12,
        marginHorizontal: 5
    },
})
