import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import colors from '../../res/colors'
import images from '../../res/images'
// import { BASE_API_URL } from '@env'

export default function ForgotPassword({ navigation }) {

    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)

    const ForgotPasswordHandler = async () => {
        setLoading(true)
        await fetch('http://188.166.189.237:3001/api/v1/users/forgotPassword', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        }).then(res => res.json())
            .then((response) => {
                try {
                    if (response.status === "OK") {
                        setLoading(false)
                        navigation.navigate("ResetPassword")
                    } else {
                        setLoading(false)
                        alert("please enter valid address")
                    }
                } catch (err) {
                    console.log(err)
                    alert("Someting went wrong, Please try after sometime")
                }
            })
    }

    if (loading) {
        <ActivityIndicator size="large" color="white" />
    }


    return (
        <View style={Styles.container}>
            <View>
                <Text style={Styles.headerText}>Find your account</Text>
            </View>

            <View style={Styles.paragraphContainer}>
                <Text>Enter your username or the email</Text>
                <Text>address or phone number linked to</Text>
                <Text>your accounts</Text>
            </View>

            <View style={Styles.userNameContainer}>
                <TextInput
                    style={Styles.userNameInput}
                    onChangeText={(text) => setEmail(text)}
                    placeholder="Phone number, username or email"
                    placeholderTextColor={colors.textFaded2}
                />
            </View>

            <TouchableOpacity style={Styles.loginContainer} onPress={() => ForgotPasswordHandler()}>
                <Text style={Styles.loginText}>Next</Text>
            </TouchableOpacity>

            <View
                style={{
                    //flex: 0.1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 30,
                }}>
                <View style={{ flex: 1, height: 1, backgroundColor: '#262626' }}></View>
                <Text style={{ marginLeft: 40, marginRight: 40, color: '#969696' }}>
                    OR
                </Text>
                <View
                    style={{
                        flex: 1,
                        height: 1,
                        backgroundColor: '#262626',
                    }}></View>
            </View>

            <View
                style={{
                    marginTop: 40,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Image source={images.facebookLogo} style={{ width: 20, height: 20 }} />
                <TouchableOpacity style={{ alignItems: 'center', marginStart: 10 }}>
                    <Text style={{ color: '#008bef' }}>Log In With Facebook</Text>
                </TouchableOpacity>
            </View>


            <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
                <Text style={{ color: '#008bef', alignSelf: "center" }}>Need more help.</Text>
            </TouchableOpacity>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.background
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.text,
        alignSelf: "center"
    },
    paragraphContainer: {
        justifyContent: "center",
        alignSelf: "center",
        top: 20
    },
    paragraphText: {
        color: colors.textFaded2
    },
    userNameContainer: {
        borderColor: '#262626',
        backgroundColor: colors.loginInputBackground,
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        justifyContent: 'center',
        //alignItems: 'center',
        marginStart: 20,
        marginEnd: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    userNameInput: {
        marginStart: 10,
        color: colors.text
    },
    loginContainer: {
        alignItems: 'center',
        height: 40,
        marginTop: 30,
        backgroundColor: '#0088f8',
        justifyContent: 'center',
        marginStart: 20,
        marginEnd: 20,
        borderRadius: 5,
    },
    loginText: {
        color: colors.text
    },
})