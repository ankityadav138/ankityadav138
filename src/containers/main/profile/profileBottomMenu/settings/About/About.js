import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'

const data = [
    {
        id: 1,
        text: "App updates"
    },
    {
        id: 2,
        text: "Data Policy"
    },
    {
        id: 3,
        text: "Terms of Use"
    },
    {
        id: 4,
        text: "Open-source libraries"
    },
]

function About() {
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

export default About;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
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
        marginHorizontal: 10,

    },
})
