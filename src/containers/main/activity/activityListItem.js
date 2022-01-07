import React from 'react';
import { View, Image, Text } from 'react-native';
import colors from 'res/colors';
import images from 'res/images';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ActivityListItem({ data }) {
    return (
        <TouchableOpacity>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginStart: 7,
                    marginEnd: 5,
                    marginTop: 15,
                }}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <Image
                        source={{ uri: 'https://picsum.photos/600' }}
                        style={{ width: 50, height: 50, borderRadius: 70 }}
                    />
                    <View style={{
                        flexDirection: 'row',
                        alignItems: "center", marginStart:5
                    }}>
                        <Text style={{ color: "white", marginHorizontal: 5 }}
                        >{data.message}</Text>
                        <Image
                            source={images.dot}
                            style={{ width: 3, height: 3, marginStart: 2 }}
                        />
                        <Text style={{ color: colors.textFaded2, marginStart: 2 }}>2h</Text>
                    </View>
                </View>
                <View>
                    <Image
                        source={{ uri: 'https://picsum.photos/600' }}
                        style={{ width: 30, height: 30 }}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
}