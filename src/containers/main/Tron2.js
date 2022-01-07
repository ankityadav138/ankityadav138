import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

function Receive({ navigation }) {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "RECEIVE",
            headerTintColor: "#872218",
        })
    })

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={styles.container}>
                <AntDesign name="qrcode" size={200} color="#872218" />
            </View>
            <View style={styles.container2}>
                <View>
                    <Image style={styles.image}
                        source={{
                            uri: "https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:fef348a3-e1d3-4586-a535-9d890320032d;revision=0?component_id=b5ad3996-306d-4e04-9936-91bd1a31dead&api_key=CometServer1&access_token=1640300229_urn%3Aaaid%3Asc%3AUS%3Afef348a3-e1d3-4586-a535-9d890320032d%3Bpublic_c37be0398eff5130ccaf5156298f9064ce6225b0"
                        }}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.textContiner}>
                        <Text style={styles.text}>POLYGON MAIN ACCOUNT</Text>
                        {'\n'}
                        <Text style={{ color: "white", fontSize: 12 }}>
                            3cGqEbUX...C6XkJ186z
                        </Text>
                    </Text>
                </View>
                <TouchableOpacity style={styles.iconCopy}>
                    <AntDesign name="copy1" size={30} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.container3}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}>SHARE ADDRESS</Text>
                </View>
                <View style={styles.iconCopy}>
                    <Fontisto name="share" size={30} color="white" />
                </View>
            </View>
        </SafeAreaView>
    )
}


export default Receive;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: 15
    },
    container2: {
        alignItems: "center",
        backgroundColor: "#872218",
        height: 70,
        margin: 10,
        borderRadius: 10,
        flexDirection: "row",
        paddingLeft: 10,
    },
    container3: {
        alignItems: "center",
        backgroundColor: "#872218",
        height: 70,
        margin: 10,
        borderRadius: 10,
        flexDirection: "row",
        paddingLeft: 10,
        justifyContent: "space-around"
    },
    text: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        fontFamily:"Montserrat-Black"
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 8
    },
    textContiner: {
        paddingLeft: 10
    },
    iconCopy: {
        alignContent: "flex-end",
        paddingRight: 10
    }
})