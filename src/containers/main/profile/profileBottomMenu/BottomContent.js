import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import settingIcon from '../../../../res/images/settings.png'
import savedIcon from '../../../../res/images/bookmark.png'
import insight from '../../../../res/images/insight.png'
import youractivity from '../../../../res/images/youractivity.png'
import qrcode from '../../../../res/images/qrcode.png'
import addfrinds from '../../../../res/images/addfriends.png'
import closefrnd from '../../../../res/images/closefrnd.png'
import love from '../../../../res/images/love.png'
import archiveIcon from '../../../../res/images/archive.png'
import colors from '../../../../res/colors'

export default function BottomContent(props) {
    return (
        <View style={styles.panel}>

            <TouchableOpacity onPress={() => props.navigation.navigate("SettingNavigator")} style={styles.contents}>
                <Image source={settingIcon} style={styles.logoStyle} />
                <Text style={styles.textStyle}>Settings</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => props.navigation.navigate("archive")} style={styles.contents}>
                <Image source={archiveIcon} style={styles.logoStyle} />
                <Text style={styles.textStyle}>Archive</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => props.navigation.navigate("insight")} style={styles.contents}>
                <Image source={insight} style={styles.logoStyle} />
                <Text style={styles.textStyle}>Insights</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => props.navigation.navigate("Your activity")} style={styles.contents}>
                <Image source={youractivity} style={styles.logoStyle} />
                <Text style={styles.textStyle}>Your activity</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => props.navigation.navigate("qrcode")} style={styles.contents}>
                <Image source={qrcode} style={styles.logoStyle} />
                <Text style={styles.textStyle}>QR code</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => props.navigation.navigate("Saved")} style={styles.contents}>
                <Image source={savedIcon} style={styles.logoStyle} />
                <Text style={styles.textStyle}>Saved</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => props.navigation.navigate("Close friends")} style={styles.contents}>
                <Image source={addfrinds} style={styles.logoStyle} />
                <Text style={styles.textStyle}>Close friends</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => props.navigation.navigate("discoverpeople")} style={styles.contents}>
                <Image source={closefrnd} style={styles.logoStyle} />
                <Text style={styles.textStyle}>Discover people</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => props.navigation.navigate("covid")} style={styles.contents}>
                <Image source={love} style={styles.logoStyle} />
                <Text style={styles.textStyle}>COVID-19 Information Centre</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    panel: {
        padding: 20,
        backgroundColor: colors.loginInputBackground,
        paddingTop: 20,
        height: 555,
        zIndex: 0,
        flexDirection: "column",
    },
    contents: {
        flexDirection: "row",
        width: "100%",
        marginVertical: 10
    },
    textStyle: {
        left: 15,
        fontSize: 16,
        color: "white"
    },
    logoStyle: {
        tintColor: "white",
        height: 20,
        width: 20,

    }

})
