import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'

const data = [
    {
        id: 1,
        text: "Promotion payments"
    },
    {
        id: 2,
        text: "Branded content"
    },
    {
        id: 3,
        text: "Branded content ads"
    },
    {
        id: 3,
        text: "Saved replies"
    },
    {
        id: 4,
        text: "Frequently asked questions"
    },
    {
        id: 5,
        text: "Minimum age"
    },
    {
        id: 6,
        text: "Monetisation status"
    }
]

function Creator() {
    return (
        <View style={styles.container}>

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

        </View>
    )
}

export default Creator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white"
    },
    fontstyle: {
        fontSize: 16,
        left: 10
    },
    contents: {
        top: 10,
        flexDirection: "row",
        marginVertical: 13,
        marginHorizontal: 10
    },
})
