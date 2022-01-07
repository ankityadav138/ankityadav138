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
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function LogInPress() {
    setLoading(true)
    await fetch('http://188.166.189.237:3001/api/v1/users/login', {
      method: "POST",
      headers: {
        "Authorization": "Basic Og==",
        "Content-Type": "application/json",
        "Accept": "applicaton/json"
      },
      body: JSON.stringify({

        email: email,
        password: password,

      })
    }).then((response) => response.json())
      .then((responseJson) => {
        setLoading(false)
        AsyncStorage.setItem("TOKEN", responseJson.data.accessToken);
        if (responseJson.message == 'Please enter valid email address') {
          alert("Pleae enter valid Email and Password")
        }
        if (responseJson.message == 'Password should be minimum of 8 characters') {
          alert("Please Enter a Valid Password")
        }
        if (responseJson.message == 'Invalid email or password') {
          alert("Invalid email or password")
        }
        if (responseJson.status == "OK") {
          navigation.navigate("MainNavigator")
        }
      })
  }


  if (loading) {
    return (
      <View style={{ flex: 1, backgroundColor: "black", justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="small" color="white" />
      </View>
    )
  } else {
    return (
      <View style={Styles.container}>
        <View style={Styles.logoContainer}>
          <Image
            source={images.logoBlack}
            style={{ height: 70, resizeMode: 'contain' }}
          />
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
          <TouchableOpacity>
            <Text style={Styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={Styles.loginContainer}
          onPress={LogInPress}>
          <Text style={Styles.loginText}>LogIn</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
  },
  userNameContainer: {
    borderColor: '#ececec',
    backgroundColor: '#fafafa',
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
  },
  passwordContainer: {
    borderColor: '#ececec',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    //alignItems: 'center',
    marginStart: 20,
    marginEnd: 20,
    backgroundColor: '#fafafa',
    marginBottom: 20,
  },
  passwordInput: { marginStart: 10 },
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
