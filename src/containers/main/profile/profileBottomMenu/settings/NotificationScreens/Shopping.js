import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Switch, SafeAreaView } from 'react-native'

function Shopping() {

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    return (
        <SafeAreaView style={styles.container}>

            <View >


                <View style={styles.items}>
                    <View style={styles.textItems}>
                        <Text style={styles.headerText}>Accounts you follow</Text>
                        <Text style={styles.text}>Be notified when accounts that you follow add new products to their shops</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>


                <View style={styles.items}>
                    <View style={styles.textItems}>
                        <Text style={styles.headerText}>Suggested for you</Text>
                        <Text style={styles.text}>Be notified about the products and shops you may like based On
                            your activity on Instagram. If you've set up your Accounts
                            Centre with Facebook,it will also be based on your activity on
                            Facebook</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>

                <View style={styles.likesComment}>
                    <TouchableOpacity>
                        <Text>Additional options in system settingd...</Text>
                    </TouchableOpacity>
                    <Text>These settings affect any Instagram accounts logged in to this device.</Text>
                    <View style={{ borderWidth: 0.3, borderColor: "grey" }} />
                </View>


            </View>


        </SafeAreaView>
    )
}

export default Shopping;

const styles = StyleSheet.create({
    container: {

    },
    items: {
        flexDirection: "row"
    },
    textItems: {
        flexDirection: "column"
    },
    headerText: {
        color: "black",
        fontSize: 15
    },
    text: {
        color: "grey"
    }
})
