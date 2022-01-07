import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    ActivityIndicator
} from 'react-native';
import React, { useState } from 'react';
import images from 'res/images';
import colors from '../../res/colors';

export default function SignUp({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUserName] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState("");

    async function signUp() {
        let item = { email, password, username, name }
        console.log(item);

        let result = await fetch('http://188.166.189.237:3001/api/v1/users/signup', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic Og==",
                "Accept": "application/json"
            }
        })
        setLoading(true)
        result = await result.json()
        console.log("result", result);
        setLoading(false)
        if (result.message == 'Please enter valid email address') {
            alert("Please enter valid email address")
        }
        if (result.message == "Email already taken") {
            alert("Email already exist")
        }
        if (result.status == "Error") {
            alert("Username already exist")
        }
        if (result.status == "OK") {
            navigation.navigate("Auth", { screen: 'Login' })
        }
        if (result.message == "Password should be minimum of 8 characters") {
            return (
                alert("Password lenght should be Minimum 8 letters")
            )
        }
    }

    if (loading) {
        return (
            <View style={{ flex: 1, backgroundColor: "black", justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="small" color="white" />
            </View>
        )
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.logoContainer}>
                <Image
                    source={images.logo}
                    style={{ height: 70, resizeMode: 'contain' }}
                />
            </View>
            <View style={Styles.userNameContainer}>
                <TextInput
                    style={Styles.userNameInput}
                    placeholder="email"
                    placeholderTextColor={colors.textFaded2}
                    onChangeText={(text) => setEmail(text)}
                />
            </View>
            <View style={Styles.passwordContainer}>
                <TextInput
                    secureTextEntry={true}
                    style={Styles.passwordInput}
                    placeholder="Password"
                    placeholderTextColor={colors.textFaded2}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            <View style={Styles.userNameContainer}>
                <TextInput
                    style={Styles.userNameInput}
                    placeholder="username"
                    placeholderTextColor={colors.textFaded2}
                    onChangeText={(text) => setUserName(text)}
                />
            </View>
            <View style={Styles.userNameContainer}>
                <TextInput
                    style={Styles.userNameInput}
                    placeholder="fullname"
                    placeholderTextColor={colors.textFaded2}
                    onChangeText={(text) => setName(text)}
                />
            </View>
            <View style={Styles.forgotPasswordContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={Styles.forgotPasswordText}> Already have account? </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={signUp}
                style={Styles.loginContainer}>
                <Text style={Styles.loginText}>SignUp</Text>
            </TouchableOpacity>
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: "center",
        alignContent: "center"
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
        marginTop: 10,
        marginBottom: 10,
    },
    userNameInput: {
        marginStart: 10,
        color: "white"
    },
    passwordContainer: {
        borderColor: '#262626',
        backgroundColor: colors.loginInputBackground,
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        justifyContent: 'center',
        //alignItems: 'center',
        marginStart: 20,
        marginEnd: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    passwordInput: { marginStart: 10, color: "white" },
    forgotPasswordContainer: {
        alignItems: 'flex-end',
        marginEnd: 20,
    },
    forgotPasswordText: {
        color: '#0088f8',
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
        color: '#fff',
    },
});
