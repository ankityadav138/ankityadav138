import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Switch, SafeAreaView } from 'react-native'

function EmailandSms() {


    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <SafeAreaView style={styles.container}>

            <View >


                <View style={styles.items}>
                    <View style={styles.textItems}>
                        <Text style={styles.headerText}>Feedback emails</Text>
                        <Text style={styles.text}>Give feedback on Instagram</Text>
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
                        <Text style={styles.headerText}>Reminder emails</Text>
                        <Text style={styles.text}>See the notifications that you have missed.</Text>
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
                        <Text style={styles.headerText}>Product emails</Text>
                        <Text style={styles.text}>Get tips about instagram's tools.</Text>
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
                        <Text style={styles.headerText}>News emails</Text>
                        <Text style={styles.text}>Learn about new Instagram features.</Text>
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
                        <Text style={styles.headerText}>Support emails</Text>
                        <Text style={styles.text}>Get updates on reports and violations of our Community Guidlines.</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>

            </View>


        </SafeAreaView>
    )
}

export default EmailandSms;

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
