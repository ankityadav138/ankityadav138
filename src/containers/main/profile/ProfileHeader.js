import React from 'react';
import { View, Image, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function ProfileHeader({ data }) {

  const navigation = useNavigation();
  if (data === [] || undefined) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="small" color="white" />
      </View>
    )
  } else {
    return (
      <View style={Styles.container}>
        <TouchableOpacity>
          <Image
            source={{ uri: data.profilePhotoUrl }}
            style={Styles.prfilePicture}
          />
        </TouchableOpacity>

        <View style={Styles.container2}>
          <View style={Styles.container3}>
            <TouchableOpacity onPress={() => navigation.navigate("UserPostScreen")}>
              <Text style={Styles.numberContainer}>{data.posts}</Text>
              <Text style={Styles.text}>Posts</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.container3}>
            <TouchableOpacity onPress={() => navigation.navigate("FolllowerScreen")}>
              <Text style={Styles.numberContainer}>{data.followers}</Text>
              <Text style={Styles.text}>Followers</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.container3}>
            <TouchableOpacity onPress={() => navigation.navigate("ProfileFollowingScreen")}>
              <Text style={Styles.numberContainer}>{data.following}</Text>
              <Text style={Styles.text}>Following</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  prfilePicture: {
    height: 80,
    width: 80,
    borderRadius: 100,
    marginLeft: 20,
  },
  numberContainer: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 15,
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    marginEnd: 20,
  },
  text: {
    color: 'white',
    //fontWeight: 'bold',
    alignSelf: 'center',
  },
  container3: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  },
});
