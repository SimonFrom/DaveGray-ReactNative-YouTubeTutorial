import {View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'



const contact = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome to our site!</Text>

            <Text style={styles.footer}>
                Coffee Masters{"\n"}
                Coffee Lane 12{"\n"}
                The brown state
            </Text>
            {/*<View style={styles.wrapper}>*/}
            {/*    <BlurView style={styles.card} intensity={10} tint="light">*/}
            {/*        <Text>*/}
            {/*            Hello there*/}
            {/*        </Text>*/}
            {/*    </BlurView>*/}
            {/*</View>*/}
        </View>
    )
}
export default contact


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 20,
        overflow: 'hidden',
    },

    card: {
        padding: 16,
        backgroundColor: 'rgba(255,255,255,0.04)',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.25)',

        shadowColor: '#000',
        shadowOffset: {width: 0, height: 8},
        shadowOpacity: 0.15,
        shadowRadius: 18,
        width: 150,

        elevation: 6, // Android
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

