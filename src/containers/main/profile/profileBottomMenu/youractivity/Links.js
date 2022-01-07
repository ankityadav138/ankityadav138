import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';

const data = [
    {
        id: 1,
        name: "Webb flies Ariane 5:watch t...",
        site: "www.esa.int",
        time: "6 days ago",
        image: ""
    },
    {
        id: 2,
        name: "National Aeronautics and Sp...",
        site: "www.nasa.gov",
        time: "7 days ago",
        image: ""
    },
    {
        id: 3,
        name: "Study in Canada for Indian S...",
        site: "leapscholar.com",
        time: "27 November",
        image: ""
    },
    {
        id: 4,
        name: "Relevant_Little_Facts(RLFs)",
        site: "ilearnwritenow.wordpress.com",
        time: "25 November ",
        image: ""
    },
    {
        id: 5,
        name: "Home-Titor Udaan",
        site: "www.udaanhometuition.com",
        time: "13 November",
        image: ""
    },
    {
        id: 6,
        name: "toyota",
        site: "www.instagram.com",
        time: "11 November",
        image: ""
    },
    {
        id: 7,
        name: "ABHAVYA'S LEISURE WORL...",
        site: "m.youtube.com",
        time: "8 November",
        image: ""
    },
    {
        id: 8,
        name: "ABHAVYA'S LEISURE WORL...",
        site: "m.youtube.com",
        time: "8 November",
        image: ""
    }
]


function Links() {
    return (
        <View style={styles.container}>

            <View style={{ flexDirection: "row", justifyContent: "space-around", top: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold", right: 10 }}>Links you've visited</Text>
                <Text style={{ left: 10 }}>Hide History</Text>
            </View>


            <FlatList
                data={data}
                keyExtractor={data.id}
                renderItem={({ item }) =>
                    <TouchableOpacity style={styles.linksContainer}>

                        <Image source={item.image} style={styles.linksImage} />
                        <View style={styles.textContents}>
                            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                            <Text style={styles.linksText}>{item.site}</Text>
                            <Text style={styles.linksText}>{item.time}</Text>
                        </View>

                    </TouchableOpacity>
                }
            />


        </View>
    )
}

export default Links;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white"
    },
    linksContainer: {
        flexDirection: "row",
        marginVertical: 10,


    },
    textContents: {
        flexDirection: "column",
        left: 30
    },
    linksText: {
        color: "grey"
    },
    linksImage: {
        width: 60,
        height: 60,
        borderWidth: 0.5,
        borderColor: "grey",
        left: 20,
        borderRadius: 5
    }

})
