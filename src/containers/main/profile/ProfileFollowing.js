import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions, SafeAreaView, ActivityIndicator, TextInput } from 'react-native';
import colors from '../../../res/colors';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const ProfileFollowingScreen = () => {
    const [Data, setData] = useState([]);
    // console.log("followDATA", Data);

    const API = 'http://188.166.189.237:3001/api/v1/profile/sachin';
    useEffect(() => {
        async function getData() {
            const request = fetch(API, {
                method: "GET",
            });
            const response = await request;
            const parsed = await response.json();
            setData(parsed.data);
        }
        getData();
    }, []);

    const RenderItem = ({ data }) => {
        return (
            <SafeAreaView style={styles.contianer}>
                <View style={{ paddingLeft: 5 }}>
                    <Image source={{ uri: Data.profilePhotoUrl }}
                        style={styles.img} />
                </View>
                <View style={{ flex: 1, justifyContent: "center", paddingLeft: 10 }}>
                    <Text style={styles.text} numberOfLines={1}>
                        {data}
                    </Text>
                </View>
                <TouchableOpacity>
                    <View style={{ marginTop: 10 }}>
                        <View
                            style={{
                                flex: 1,
                                height: 25,
                                width: 80,
                                borderRadius: 5,
                                marginStart: 10,
                                marginEnd: 10,
                                backgroundColor: '#000',
                                justifyContent: 'center',
                                borderColor: 'white',
                                borderWidth: 1,
                            }}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ color: 'white' }}>Following</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }

    if (Data === null || undefined) {
        return (
            <View>
                <ActivityIndicator size="small" color="white" />
            </View>
        )
    }
    else {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
                <View style={{
                    margin: 10,
                    flexDirection: 'row',
                    width: Dimensions.get('screen').width - 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.textInputBackground,
                    borderRadius: 5,
                    marginHorizontal: 5,
                    marginVertical: 10
                }}>
                    <EvilIcons name='search' size={35} color={colors.textFaded2}
                        style={{ padding: 10 }} />
                    <TextInput
                        style={{
                            flex: 1,
                            paddingTop: 10,
                            paddingRight: 10,
                            paddingBottom: 10,
                            paddingLeft: 0,
                            fontWeight: "bold",
                            backgroundColor: colors.textInputBackground,
                            color: colors.textFaded2,
                        }}
                        placeholder="Search"
                        placeholderTextColor={colors.textFaded2}
                    />
                </View>
                <FlatList
                    data={Data.following}
                    keyExtractor={item => item.Id}
                    renderItem={({ item }) => (
                        <RenderItem data={item} />
                    )} />
            </SafeAreaView>
        )
    }
}

export default ProfileFollowingScreen;

const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        backgroundColor: colors.background,
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 7,
        margin: 12,
        marginHorizontal: 15,
        marginVertical: 5
    },
    text: {
        color: colors.text,
        fontSize: 16
    },
    btext: {
        fontSize: 16,
        color: "#3f729b"
    },
    img: {
        width: 40,
        height: 40,
        borderRadius: 30
    },
    button: {
        backgroundColor: "#3f729b",
        width: 80,
        height: "6%",
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 5
    },
    RemoveBtn: {
        width: 70,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    followArea: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 5,
    },
    follow: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    following: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },

});