import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import colors from '../../res/colors';

export default function ResetPassword({ navigation }) {

    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const resetPasswordHandler = async () => {
        setLoading(true)
        await fetch('http://188.166.189.237:3001/api/v1/users/forgotPassword', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, otp, newPassword })
        }).then(res => res.json())
            .then((response) => {
                try {
                    if (response.status === "OK") {
                        setLoading(false)
                        alert("Your password succesfully changed, Please login again to continue")
                        navigation.navigate("Login")
                    } else {
                        setLoading(false)
                        alert("Please enter correct OTP")
                    }
                } catch (err) {
                    console.log(err)
                }
            })
    }

    if (loading) {
        <ActivityIndicator size="small" color="white" />
    }


    return (
        <View style={Styles.container}>
            <Text style={Styles.headerText}></Text>
            <View style={Styles.paragraphContainer}>
                <Text style={Styles.text}>Enter the 6-digit confirmation code that</Text>
                <Text style={Styles.text}>we sent to</Text>
                <Text style={Styles.text}>Provided Email</Text>
            </View>

            <View style={Styles.userNameContainer}>
                <TextInput
                    style={Styles.userNameInput}
                    onChangeText={(text) => setEmail(text)}
                    placeholder="Enter your email"
                    placeholderTextColor={colors.textFaded2}
                />
            </View>

            <View style={Styles.userNameContainer}>
                <TextInput
                    style={Styles.userNameInput}
                    onChangeText={(text) => setOtp(text)}
                    placeholder="Confirmation code"
                    placeholderTextColor={colors.textFaded2}
                />
            </View>

            <View style={Styles.userNameContainer}>
                <TextInput
                    style={Styles.userNameInput}
                    onChangeText={(text) => setNewPassword(text)}
                    placeholder="Enter new password"
                    placeholderTextColor={colors.textFaded2}
                />
            </View>


            <TouchableOpacity style={Styles.loginContainer} onPress={() => resetPasswordHandler()}>
                <Text style={Styles.loginText}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: colors.background
    },
    headerText: {
        color: colors.text,
        fontSize: 17,
        alignSelf: "center"
    },
    paragraphContainer: {
        alignItems: "center",
        alignSelf: "center",
        marginTop: 20,
    },
    text: {
        color: colors.text
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
        color: 'white',
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