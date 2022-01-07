import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, Alert, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import colors from '../../../res/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import images from '../../../res/images';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';

function AddingPostDetails({ route }) {
    const [caption, setCaption] = useState("");
    const [location, setLocation] = useState("");
    const [tags, setTags] = useState("");

    const navigation = useNavigation();

    async function posting() {
        var form = new FormData();

        const Demo_token = await AsyncStorage.getItem('TOKEN')

        form.append("image", img);
        form.append("caption", caption);
        form.append("location", location);
        form.append("tags", tags);

        fetch("http://188.166.189.237:3001/api/v1/post/", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${Demo_token}`,
            },
            body: form
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("response", responseJson);
                if (responseJson.status === "Ok") {
                    return (
                        Alert.alert(
                            'Posted',
                            'Your Post has been Posted Successfully',
                            [
                                {
                                    text: 'Ok',
                                    onPress: () => {
                                        navigation.navigate('root', { screen: "MainNavigator" });
                                    },
                                },
                            ],
                        ))
                }
            }).catch((error) => {
                console.log("err", error);
            })
    }

    const img = route.params.clicked
    return (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "black", alignItems: "center" }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingTop: 10 }}>
                <View style={{ paddingLeft: 6, alignItems: "flex-start", flex: 1 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={images.close}
                            style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: "flex-end", flex: 1, paddingRight: 6 }}>
                    <TouchableOpacity onPress={posting}>
                        <Text style={{ color: "white", fontSize: 19 }}>
                            POST
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Image source={{ uri: img }} style={{ width: "60%", height: "60%" }} resizeMode="contain" />
            <ScrollView style={{ width: "90%", paddingVertical: 10 }}>
                <View style={styles.userNameContainer}>
                    <EvilIcons name='pencil' size={25} color="grey" />
                    <TextInput
                        style={styles.userNameInput}
                        onChangeText={(text) => setCaption(text)}
                        placeholder="enter Caption"
                        placeholderTextColor={colors.textFaded2}
                    />
                </View>
                <View style={styles.userNameContainer}>
                    <EvilIcons name='location' size={25} color="grey" />
                    <TextInput
                        style={styles.userNameInput}
                        onChangeText={(text) => setLocation(text)}
                        placeholder="enter Location"
                        placeholderTextColor={colors.textFaded2}
                    />
                </View>
                <View style={styles.userNameContainer}>
                    <EvilIcons name='tag' size={25} color="grey" />
                    <TextInput
                        style={styles.userNameInput}
                        onChangeText={(text) => setTags(text)}
                        placeholder="enter Tags"
                        placeholderTextColor={colors.textFaded2}
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default AddingPostDetails;

const styles = StyleSheet.create({
    userNameContainer: {
        backgroundColor: colors.background,
        borderBottomWidth: 1,
        borderColor: "white",
        // width: "90%",
        flexDirection: "row",
        alignItems: "center",
    },
    userNameInput: {
        marginStart: 5,
        color: 'white',
    },
})