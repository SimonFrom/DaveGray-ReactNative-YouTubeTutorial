import {View, Text, StyleSheet,ImageBackground} from 'react-native'
import React from 'react'



const contact = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome to our site!</Text>
            <Text style={styles.footer}>
                Coffee Masters{"\n"}
                Coffee Lane 12{"\n"}
                The brown state
            </Text>
        </View>
    )
}
export default contact


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        fontSize: 46,
        color: 'white',
        textAlign: 'center',
        marginBottom: "auto",
        marginTop: "25%",
        fontFamily: 'JetBrains Mono',
        backgroundColor: 'rgba(179,177,177,0.5)',
    },
    footer: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginBottom: "3%",
        marginTop: "auto",
        fontFamily: 'JetBrains Mono',
        backgroundColor: 'rgba(179,177,177,0.5)',
    },
})

