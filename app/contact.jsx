import {View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import {Link} from 'expo-router'
import React from 'react'
import {BlurView} from 'expo-blur'


export default function Contact() {
    return (

            <SafeAreaView style={styles.container}>
                <Text style={styles.header}>Welcome to our site!</Text>

                <Text style={styles.footer}>
                    Coffee Masters{"\n"}
                    Coffee Lane 12{"\n"}
                    The brown state{"\n"}
                    Phone: <Link href="tel:20875552">20875552</Link>{"\n"}
                </Text>


                {/*<View style={styles.wrapper}>*/}
                {/*    <BlurView style={styles.card} intensity={10} tint="light">*/}
                {/*        <Text>*/}
                {/*            Hello there*/}
                {/*        </Text>*/}
                {/*    </BlurView>*/}
                {/*</View>*/}
            </SafeAreaView>

    )
}


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
        marginTop: 10,
        fontFamily: 'JetBrains Mono',
        backgroundColor: 'rgba(255,146,33,0.5)',
    },
    footer: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginBottom: "3%",
        marginTop: "auto",
        fontFamily: 'JetBrains Mono',
        backgroundColor: 'rgba(255,146,33,0.5)',
    },

})

