import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native'

const data = [
    {
        id: 1,
        text: "Personal information"
    },
    {
        id: 2,
        text: "Your activity"
    },
    {
        id: 3,
        text: "Saved"
    },
    {
        id: 4,
        text: "Close friends"
    },
    {
        id: 5,
        text: "Account status"
    },
    {
        id: 6,
        text: "Language"
    },
    {
        id: 7,
        text: "Captions"
    },
    {
        id: 8,
        text: "Browser settings"
    },
    {
        id: 9,
        text: "Sensitive content control"
    },
    {
        id: 10,
        text: "Contacts syncing"
    },
    {
        id: 9,
        text: "Sensitive content control"
    },
    {
        id: 10,
        text: "Sharing to other apps"
    },
    {
        id: 11,
        text: "Mobile data use "
    },
    {
        id: 12,
        text: "Original posts"
    },
    {
        id: 13,
        text: "Request verification"
    },
    {
        id: 14,
        text: "Posts you've liked"
    },
    {
        id: 15,
        text: "Recently deleted"
    },
    {
        id: 16,
        text: "Review activity"
    },

]

function Account() {
    return (
        <ScrollView style={styles.container}>


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

            <TouchableOpacity style={styles.touch}>
                <Text style={styles.text}>Switch account type</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touch}>
                <Text style={styles.text}>Add new professional account</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

export default Account;

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
        marginHorizontal: 10
    },
    text: {
        color: "#0BA8E6",
        fontSize: 16
    },
    touch: {
        marginVertical: 15,
        marginHorizontal: 20
    }
})
