import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TextInput,
    SafeAreaView,
    FlatList,
    CheckBox
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Data = [
    {
        name: 'Bitcoin',
        caption: 'BTC',
        type: 'EOS',
        icon: 'bitcoin',
        id: '1',
    },
    {
        name: 'Ethereum',
        caption: 'ETH',
        type: 'Currency',
        icon: 'ethereum',
        id: '2'
    },
    {
        name: 'Bitcoin',
        caption: 'BTC',
        type: 'EOS',
        icon: 'bitcoin',
        id: '3'
    },
    {
        name: 'Ethereum',
        caption: 'ETH',
        type: 'Currency',
        icon: 'ethereum',
        id: '4'
    },
    {
        name: 'Bitcoin',
        caption: 'BTC',
        type: 'EOS',
        icon: 'bitcoin',
        id: '5'
    },
    {
        name: 'Ethereum',
        caption: 'ETH',
        type: 'Currency',
        icon: 'ethereum',
        id: '6'
    },
    {
        name: 'Bitcoin',
        caption: 'BTC',
        type: 'EOS',
        icon: 'bitcoin',
        id: '7'
    },
    {
        name: 'Ethereum',
        caption: 'ETH',
        type: 'Currency',
        icon: 'ethereum',
        id: '8'
    },
    {
        name: 'Bitcoin',
        caption: 'BTC',
        type: 'EOS',
        icon: 'bitcoin',
        id: '9'
    },
    {
        name: 'Ethereum',
        caption: 'ETH',
        type: 'Currency',
        icon: 'ethereum',
        id: '10'
    }
]

export default function ManagedCurrencies({ navigation }) {
    const [selected, setSelected] = useState(false);

    const RenderItem = (item) => {
        return (
            <SafeAreaView style={styles.flatdata}>
                <View style={{ backgroundColor: "maroon", justifyContent: "center", alignItems: "center", margin: 5 }}>
                    {Data.icon == 'bitcoin' ?
                        <Icon name={item.Data.icon} size={35} color="white" /> :
                        <MaterialCommunityIcons name={item.Data.icon} size={35} color="white" />}
                </View>
                <View style={{
                    justifyContent: "center", flexDirection: "row",
                    paddingLeft: 10
                }}>
                    <Text>
                        <Text style={styles.flattext}>{item.Data.name}</Text>
                        {"\n"}
                        <Text>{item.Data.caption}</Text>
                    </Text>
                </View>
                <View style={{
                    flex: 1, flexDirection: "row", alignSelf: "center", alignItems: "center",
                    justifyContent: "flex-end"
                }}>
                    <TouchableHighlight style={{
                        backgroundColor: "#FAD6E8", width: "30%",
                        borderRadius: 3, justifyContent: "center", alignItems: "center"
                    }}>
                        <Text style={{ color: "maroon" }}>
                            {item.Data.type}
                        </Text>
                    </TouchableHighlight>
                    <CheckBox
                        value={selected}
                        onValueChange={setSelected}
                        style={{ justifyContent: "center", alignItems: "center" }} />
                </View>
            </SafeAreaView>
        )
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "MANAGED CURRENCIES",
            headerTintColor: "maroon",
        })
    })


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={styles.container}>
                <View style={styles.section}>
                    <Ionicons name='md-search-outline' size={30} />
                    <TextInput style={styles.textinput}
                        underlineColorAndroid="transparent"
                        placeholder="Add Cryptocurrencies or tokens.." />
                </View>
            </View>
            <View style={styles.container2}>
                <TouchableHighlight style={styles.touch}>
                    <Text style={styles.textcolor}>
                        Currency
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.touch}>
                    <Text style={styles.textcolor}>
                        Token
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.touch}>
                    <Text style={styles.textcolor}>
                        EOS
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.touch}>
                    <Text style={styles.textcolor}>
                        Masaic
                    </Text>
                </TouchableHighlight>
            </View>
            <View style={styles.container3}>
                <FlatList
                    data={Data}
                    // keyExtractor={item => item.id}
                    renderItem={({ item, index }) => <RenderItem Data={item} />}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: "#FAD6E8",
    },
    textinput: {
        flex: 1,
        paddingLeft: 10
    },
    section: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: 'white',
        height: 40,
        borderRadius: 5,
        margin: 10
    },
    container2: {
        flexDirection: 'row',
        justifyContent: "space-around",
        margin: 10,
    },
    touch: {
        borderWidth: 0.5,
        backgroundColor: "#FAD6E8",
        justifyContent: "center",
        alignItems: "center",
        height: 30,
        width: "20%",
        borderRadius: 3,
        borderColor: '#fff'
    },
    textcolor: {
        color: "maroon"
    },
    container3: {
        flex: 1,
        backgroundColor: "#fff",
    },
    flatdata: {
        flex: 1,
        backgroundColor: "#F4F2F2",
        margin: 5,
        marginBottom: 8,
        borderRadius: 8,
        paddingLeft: 10,
        alignItems: "flex-start",
        flexDirection: "row",
        height: "50%"
    },
    flattext: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 15
    }
})