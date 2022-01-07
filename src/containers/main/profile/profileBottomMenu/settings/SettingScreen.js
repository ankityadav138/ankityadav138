import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    FlatList,
    Dimensions,
    SafeAreaView,
    Alert
} from 'react-native';
import addfrinds from '../../../../../res/images/addfriends.png'
import bellIcon from '../../../../../res/images/bell.png'
import creator from '../../../../../res/images/favorite.png'
import privacy from '../../../../../res/images/lock.png'
import security from '../../../../../res/images/protection.png'
import ads from '../../../../../res/images/ads.png'
import user from '../../../../../res/images/user.png'
import help from '../../../../../res/images/lifesaver.png'
import about from '../../../../../res/images/info.png'
import theme from '../../../../../res/images/paint.png'
import meta from '../../../../../res/images/meta.png'
import { useNavigation } from '@react-navigation/native';
import colors from '../../../../../res/colors';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const data = [
    {
        id: 1,
        icon: addfrinds,
        text: "Follow and invite friends",
    },
    {
        id: 2,
        icon: bellIcon,
        text: "Notifications",
    },
    {
        id: 3,
        icon: creator,
        text: "Creator",
    },
    {
        id: 4,
        icon: privacy,
        text: "Privacy",
    },
    {
        id: 5,
        icon: security,
        text: "Security",
    },
    {
        id: 6,
        icon: ads,
        text: "Ads",
    },
    {
        id: 7,
        icon: user,
        text: "Account",
    },
    {
        id: 8,
        icon: help,
        text: "Help",
    },
    {
        id: 9,
        icon: about,
        text: "About",
    },
    {
        id: 10,
        icon: theme,
        text: "Theme",
    }
]



function SettingScreen() {

    const navigation = useNavigation()

    const Logout = () => {
        return (
            Alert.alert(
                'Logout',
                'Are you sure? You want to logout?',
                [
                    {
                        text: 'Cancel',
                        onPress: () => {
                            return null;
                        },
                    },
                    {
                        text: 'Confirm',
                        onPress: () => {
                            AsyncStorage.removeItem("TOKEN")
                            // navigation.navigate('Login');
                        },
                    },
                ],
                { cancelable: false },
            ))
    }

    // if (loggedOut) {
    //     return (
    //         navigation.navigate("Login")
    //     )
    // };


    const ContentThatGoesAboveTheFlatList = () => {
        return (
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
        )
    }

    function footerContent() {
        return (
            <SafeAreaView style={{ backgroundColor: "black" }}>
                <View style={{ flexDirection: "row", marginHorizontal: 25, marginVertical: 40 }}>
                    <Image source={meta} style={{ height: 25, width: 25, }} />
                    <Text style={{ color: "white", fontSize: 18, fontWeight: "bold", left: 5 }}>Meta</Text>
                </View>

                <View style={{ marginVertical: 0, marginHorizontal: 23, bottom: 30 }}>
                    <Text style={{ fontSize: 16, color: "skyblue" }}>Accounts Centre</Text>

                    <Text style={styles.textstyle}>Control settings for connected experience across </Text>
                    <Text style={styles.textstyle}>Instagram, the Facebook app and Messenger,</Text>
                    <Text style={styles.textstyle}>including story and post sharing and logging in.</Text>
                </View>


                <View style={{ marginHorizontal: 23 }}>
                    <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>Logins</Text>
                </View>


                <TouchableOpacity style={{ marginHorizontal: 23, marginVertical: 10 }}>
                    <Text style={{ color: "white", fontSize: 17, }}>Multi-account login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginHorizontal: 23, marginVertical: 10 }}>
                    <Text style={{ color: "skyblue", fontSize: 16 }}>Add or switch accounts</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={Logout}
                    style={{ marginHorizontal: 23, marginVertical: 10 }}>
                    <Text style={{ color: "#D22B2B", fontSize: 16 }}>Log out</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }

    return (
        <View style={{ flexDirection: "column", backgroundColor: "black" }}>
            <FlatList
                data={data}
                keyExtractor={item => item.id.toString()}
                ListHeaderComponent={ContentThatGoesAboveTheFlatList}
                ListFooterComponent={footerContent}
                renderItem={({ item }) =>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate(item.text)} style={styles.contents}>
                            <Image source={item.icon} style={styles.iconstyle} />
                            <Text style={styles.fontstyle}>{item.text}</Text>
                        </TouchableOpacity>
                    </View>
                }
            />

        </View>
    )
}

export default SettingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        flexDirection: "column",
        paddingTop: 10
    },
    searchbar: {
        width: "90%",
        height: 30,
        backgroundColor: "grey",
        borderRadius: 20,
        top: 10,
        left: 0.5,
    },
    contents: {
        flexDirection: "row",
        marginVertical: 13,
        marginHorizontal: 20
    },
    iconstyle: {
        height: 24,
        width: 24,
        tintColor: "white"
    },
    fontstyle: {
        fontSize: 16,
        left: 10,
        color: "white"
    },
    textstyle: {
        fontSize: 14,
        color: "grey",
        top: 10,

    }
})


