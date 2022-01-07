import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
    ActivityIndicator,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import images from '../../res/images';
import colors from '../../res/colors'
import AsyncStorage from '@react-native-async-storage/async-storage';

function LogScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)

    async function LogIn() {
        console.log(email, password)
        let item = { email, password }
        setLoading(true)
        let result = await fetch('http://188.166.189.237:3001/api/v1/users/login', {
            method: 'POST',
            headers: {
                "Authorization": "Basic Og==",
                "Content-Type": "application/json",
                "Accept": "applicaton/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        console.log("result", result)
        setLoading(false)
        if (result.message == 'Please enter valid email address') {
            alert("Pleae enter valid Email and Password")
        }
        if (result.message == 'Password should be minimum of 8 characters') {
            alert("Please Enter a Valid Password")
        }
        if (result.message == 'Invalid email or password') {
            alert("Invalid email or password")
        }
        if (result.status == "OK") {
            navigation.navigate("root")
        }
        AsyncStorage.setItem("TOKEN", result.data.accessToken);
    }

    if (loading) {
        return (
            <View style={{ flex: 1, backgroundColor: "black", justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="small" color="white" />
            </View>
        )
    }
    else {
        return (
            <View style={Styles.container}>
                <View style={Styles.logoContainer}>
                    <Image source={images.logo} style={{ height: 70, width: 200 }} />
                </View>
                <View style={Styles.userNameContainer}>
                    <TextInput
                        style={Styles.userNameInput}
                        onChangeText={(text) => setEmail(text)}
                        placeholder="Phone number, username or email"
                        placeholderTextColor={colors.textFaded2}
                    />
                </View>
                <View style={Styles.passwordContainer}>
                    <TextInput
                        secureTextEntry={true}
                        style={Styles.passwordInput}
                        onChangeText={(text) => setPassword(text)}
                        placeholder="Password"
                        placeholderTextColor={colors.textFaded2}
                    />
                </View>
                <View style={Styles.forgotPasswordContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
                        <Text style={Styles.forgotPasswordText}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={Styles.loginContainer} onPress={LogIn}>
                    <Text style={Styles.loginText}>Log In</Text>
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
                <View style={{ flexDirection: 'row', marginTop: 50 }}>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: '#262626',
                            height: 1,
                        }}></View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: 20,
                    }}>
                    <Text style={{ color: '#969696' }}>Don't have an account ?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
                        <Text style={{ color: '#008bef' }}> Sign Up.</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default LogScreen;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
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
    passwordContainer: {
        borderColor: '#262626',
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        justifyContent: 'center',
        //alignItems: 'center',
        marginStart: 20,
        marginEnd: 20,
        backgroundColor: colors.loginInputBackground,
        marginBottom: 20,
    },
    passwordInput: { marginStart: 10, color: 'white' },
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
