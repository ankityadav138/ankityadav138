import React from 'react';
import { View, FlatList, Image } from 'react-native';
import images from '../../../res/images';

data = [
    { key: '1', image: 'https://picsum.photos/600' },
    { key: '2', image: 'https://picsum.photos/600' },
    { key: '3', image: 'https://picsum.photos/600' },
    { key: '4', image: 'https://picsum.photos/600' },
    { key: '5', image: 'https://picsum.photos/600' },
    { key: '6', image: 'https://picsum.photos/600' },
    { key: '7', image: 'https://picsum.photos/600' },
]

const AddPostUpdated = () => {
    return (
        <View style={{ flexDirection: "row", backgroundColor:"black" }}>
            <Image source={images.add} style={{ width: 70, height: 70, borderRadius: 3 }} />
            <FlatList
                horizontal={true}
                data={data}
                renderItem={({ item, index }) => <Image source={{ uri: item.image }}
                    style={{ width: 70, height: 70, borderRadius: 3, flexDirection: "row" }}
                />}
            />
        </View>
    )
}

export default AddPostUpdated;