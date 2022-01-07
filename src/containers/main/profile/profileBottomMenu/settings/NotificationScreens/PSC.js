import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, CheckBox, TouchableOpacity, TouchableNativeFeedback, ScrollView, } from 'react-native'

function PCS() {


    const [isSelected, setIsSelected] = useState(false)

    const setSelection = () => {
        setIsSelected(true)
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ marginVertical: 0 }}>


                <View style={styles.likesComment}>
                    <Text style={styles.headerText}>Likes</Text>
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
                    <Text style={styles.paragrapText}>johnappleseed liked your photo</Text>
                    <View style={styles.border} />
                </View>



                <View style={styles.likesComment}>
                    <Text style={styles.headerText}>Likes and comments on photo of you</Text>
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
                    <Text style={styles.paragrapText}>johnappleseed commented on a post that you're tagged in.</Text>
                    <View style={styles.border} />
                </View>




                <View style={styles.likesComment}>
                    <Text style={styles.headerText}>photos of you</Text>
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
                    <Text style={styles.paragrapText}>johnappleseed tagged you in a photo</Text>
                    <View style={styles.border} />
                </View>





                <View style={styles.likesComment}>
                    <Text style={styles.headerText}>Comments </Text>
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
                    <Text>johnappleseed commented:"Nice shot!"</Text>
                    <View style={styles.border} />
                </View>


                <View style={styles.likesComment}>
                    <Text style={styles.headerText}>Comments likes and pins</Text>
                    <View style={styles.offContainer}>
                        <Text style={styles.textSize}>Off</Text>
                        <CheckBox value={isSelected} onValueChange={setSelection} />
                    </View>
                    <View style={styles.fpiContainer}>
                        <Text style={styles.textSize}>On</Text>
                        <CheckBox value={isSelected} onValueChange={setSelection} />
                    </View>
                    <Text style={styles.paragrapText}>johnapplesed liked your comment:"Nice shot!" and other similar notifications</Text>
                    <View style={styles.border} />
                </View>


                <View style={styles.likesComment}>
                    <Text style={styles.headerText}>First posts and stories</Text>
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
                    <Text style={styles.paragrapText}>See johnappleseed's first story on Instagram and other similar notifications.</Text>
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

export default PCS;

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
