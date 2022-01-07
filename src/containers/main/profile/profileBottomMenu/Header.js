import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'
import images from '../../../../res/images'


function Header(props) {
    if (props.data === [] || null) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="small" color="white" />
            </View>
        )
    } else {
        return (
            <View style={styles.header}>

                <TouchableOpacity>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginStart: 10,
                        }}>
                        <Image
                            source={images.addIcon}
                            style={{ resizeMode: 'contain', width: 20, height: 20 }}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}>{props.data.username}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.bs.current.snapTo(0)}>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 10,
                        }}>
                        <Image
                            source={images.list3}
                            style={{ resizeMode: 'contain', width: 25, height: 25 }}
                        />
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
}

export default Header
const styles = StyleSheet.create({

    header: {
        flex: 0.1,
        // left: 0,
        // right: 0,
        backgroundColor: 'black',
        flexDirection: 'row',
        height: 55,
        alignItems: 'center',
        justifyContent: "space-between"
    },
    menuButton: {
        left: 50

    }
})