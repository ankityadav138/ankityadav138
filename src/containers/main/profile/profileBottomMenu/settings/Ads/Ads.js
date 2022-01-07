import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'

const adPreference = [
    {
        id: 1,
        text: "Ad topics"
    },
    {
        id: 2,
        text: "Data about your activity from partners"
    }
]

const genralInfo = [
    {
        id: 1,
        text: "Ad activity"
    },
    {
        id: 2,
        text: "About ads"
    }
]

function Ads() {
    return (
        <View style={styles.container}>

            <Text style={{ fontSize: 16, fontWeight: "bold", left: "6%", top: "5%" }}>Ad prefrences</Text>

            <View style={{ top: "7%" }}>
                <FlatList
                    data={adPreference}
                    keyExtractor={adPreference.id}
                    renderItem={({ item }) =>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate(item.text)} style={styles.contents}>
                                <Text style={styles.fontstyle}>{item.text}</Text>
                            </TouchableOpacity>
                        </View>
                    }
                />
            </View>

            <View style={{ borderWidth: 0.3, borderColor: "#D3D3D3", top: "11%" }} />

            <Text style={{ fontSize: 16, fontWeight: "bold", left: "6%", top: "16%" }}>Ad prefrences</Text>

            <View style={{ top: "18%" }}>
                <FlatList
                    data={genralInfo}
                    keyExtractor={genralInfo.id}
                    renderItem={({ item }) =>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate(item.text)} style={styles.contents}>
                                <Text style={styles.fontstyle}>{item.text}</Text>
                            </TouchableOpacity>
                        </View>
                    }
                />
            </View>

        </View>
    )
}

export default Ads;

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
