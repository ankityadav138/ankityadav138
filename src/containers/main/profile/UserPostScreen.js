import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native';


const UserPostScreen = () => {
    const [Data, setData] = useState([]);

    const Tested = ({ data }) => {
        return (
            <View style={{ flex: 1, paddingTop: 10, margin: 2 }}>
                <TouchableOpacity
                    onPress={() => console.log('Pressed Profile Grid Image')}>
                    <Image
                        source={{ uri: data }}
                        style={{
                            height: 150,
                            flex: 1,
                            marginEnd: 2,
                            marginBottom: 2,
                            alignItems: 'center',
                        }}
                    />
                </TouchableOpacity>
            </View>
        );
    }

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

    if (Data === [] || undefined) {
        return (
            <View style={{ backgroundColor: "black" }}>
                <ActivityIndicator size="small" color="white" />
            </View>
        )
    } else {
        return (
            <FlatList
                data={Data.posts}
                keyExtractor={item => item.profilePhotoId}
                style={{ backgroundColor: "black" }}
                renderItem={({ item }) => (
                    <Tested data={item} />
                )}
                numColumns={3}
                indicatorStyle={'white'}
                showsVerticalScrollIndicator={true}
            />
        )
    };
}

export default UserPostScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    }
});
