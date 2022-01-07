import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, CheckBox, } from 'react-native'

function LiveandVideo() {


    const [isSelected, setIsSelected] = useState(false)

    const setSelection = () => {
        setIsSelected(true)
    }


    return (
        <View style={styles.container}>


            <ScrollView>
                <View style={styles.likesComment}>
                    <Text style={styles.textSize}>Live videos</Text>
                    <View style={styles.offContainer}>
                        <Text style={styles.textSize}>Off</Text>
                        <CheckBox value={isSelected} onValueChange={setSelection} />
                    </View>
                    <View style={styles.feContainer}>
                        <Text style={styles.textSize}>On</Text>
                        <CheckBox value={isSelected} onValueChange={setSelection} />
                    </View>
                    <Text style={styles.paragrapText}>johnappleseed started a live video. Watch it before it ends!</Text>
                    <View style={styles.border} />
                </View>



                <View style={styles.likesComment}>
                    <Text style={styles.headerText}>Video uploads</Text>
                    <View style={styles.offContainer}>
                        <Text style={styles.textSize}>Off</Text>
                        <CheckBox value={isSelected} onValueChange={setSelection} />
                    </View>
                    <View style={styles.feContainer}>
                        <Text style={styles.textSize}>On</Text>
                        <CheckBox value={isSelected} onValueChange={setSelection} />
                    </View>
                    <Text style={styles.paragrapText}>Your video is ready to watch.</Text>
                    <View style={styles.border} />
                </View>




                <View style={styles.likesComment}>
                    <Text style={styles.h}>Videos view counts</Text>
                    <View style={styles.offContainer}>
                        <Text style={styles.textSize}>Off</Text>
                        <CheckBox value={isSelected} onValueChange={setSelection} />
                    </View>
                    <View style={styles.feContainer}>
                        <Text style={styles.textSize}>On</Text>
                        <CheckBox value={isSelected} onValueChange={setSelection} />
                    </View>
                    <Text style={styles.paragrapText}>Your video has more than 100k views.</Text>
                    <View style={styles.border} />
                </View>

                <View style={styles.likesComment}>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 16, color: "blue" }}>Additional options in system settings...</Text>
                    </TouchableOpacity>
                    <Text style={{ color: "grey" }}>These settings affect any Instagram accounts logged in to this device.</Text>
                    <View style={{ borderWidth: 0.3, borderColor: "grey", top: 10 }} />
                </View>


            </ScrollView>
        </View>
    )
}

export default LiveandVideo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    likes: {

    },
    headerText: {
        fontSize: 17,
        fontWeight: "bold"
    },
    likesComment: {
        marginVertical: 30,
        padding: 10,
    },
    textSize: {
        fontSize: 17
    },
    paragrapText: {
        color: "grey",
        top: 50
    },
    border: {
        borderWidth: 0.3,
        borderColor: "grey",
        top: 60
    },
    offContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        top: 20
    },
    fpiContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        top: 30
    },
    feContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        top: 40
    }
})
