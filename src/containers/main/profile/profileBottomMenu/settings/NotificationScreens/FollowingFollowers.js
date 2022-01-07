import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, CheckBox } from 'react-native'

function FollowingFollowers() {


    const [isSelected, setIsSelected] = useState(false)

    const setSelection = () => {
        setIsSelected(true)
    }

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>

            <ScrollView>
                <View style={styles.likesComment}>
                    <Text style={styles.headerText}>New Followers</Text>
                    <View style={styles.offContainer}>
                        <Text style={styles.textSize}>Off</Text>
                        <CheckBox value={isSelected} onValueChange={setSelection} />
                    </View>
                    <View style={styles.fpiContainer}>
                        <Text style={styles.textSize}>On</Text>
                        <CheckBox value={isSelected} onValueChange={setSelection} />
                    </View>
                    <Text style={styles.paragrapText}>johnappleseed started following you.</Text>
                    <View style={styles.border} />
                </View>



                <View style={styles.likesComment}>
                    <Text style={styles.headerText}>Accepted follow requests</Text>
                    <View style={styles.offContainer}>
                        <Text style={styles.textSize}>Off</Text>
                        <CheckBox value={isSelected} onValueChange={setSelection} />
                    </View>
                    <View style={styles.fpiContainer}>
                        <Text style={styles.textSize}>On</Text>
                        <CheckBox value={isSelected} onValueChange={setSelection} />
                    </View>
                    <Text style={styles.paragrapText}>johnappleseed accepted your follow request.</Text>
                    <View style={styles.border} />
                </View>




                <View style={styles.likesComment}>
                    <Text style={styles.headerText}>Account suggeestions</Text>
                    <View style={styles.offContainer}>
                        <Text style={styles.textSize}>Off</Text>
                        <CheckBox value={isSelected} onValueChange={setSelection} />
                    </View>
                    <View style={styles.fpiContainer}>
                        <Text style={styles.textSize}>On</Text>
                        <CheckBox value={isSelected} onValueChange={setSelection} />
                    </View>
                    <Text style={styles.paragrapText}>johnappleseed, who you might know, is on Instagram, and other similar notifications.</Text>
                    <View style={styles.border} />
                </View>





                <View style={styles.likesComment}>
                    <Text style={styles.headerText}>Mentions in bio </Text>
                    <View style={styles.offContainer}>
                        <Text style={styles.textSize}>Off</Text>
                        <CheckBox value={isSelected} onValueChange={setSelection} />
                    </View>
                    <View style={styles.fpiContainer}>
                        <Text style={styles.textSize}>From people i follow</Text>
                        <CheckBox value={isSelected} onValueChange={setSelection} />
                    </View>
                    <View style={styles.feContainer}>
                        <Text style={styles.textSize}>From everyone</Text>
                        <CheckBox value={isSelected} onValueChange={setSelection} />
                    </View>
                    <Text style={styles.paragrapText}>johnappleseed mentioned you in their bio.</Text>
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

export default FollowingFollowers;

const styles = StyleSheet.create({
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
