import {View, Text, StyleSheet,ImageBackground, Pressable} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import icedCoffeeImg from "@/assets/images/iced-coffee.png"

const app = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={icedCoffeeImg}
                style={styles.image}>
            <Text style={styles.title}>Coffee Shop</Text>
            <View style={styles.wrapper}>
                <Link style={{marginHorizontal: 'auto'}} href="/contact" asChild>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Contact Us</Text>
                    </Pressable>
                </Link>
                <Link style={{marginHorizontal: 'auto'}} href="/menu" asChild>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Check out our menu</Text>
                    </Pressable>
                </Link>
            </View>

            </ImageBackground>
        </View>
    )
}
export default app


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    title: {
        fontSize: 46,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'JetBrains Mono',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        marginTop: 50,

    },
    wrapper: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 25,
    },
    image: {
        width: '100%',
        height: '100%',
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',

    },
    link: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'JetBrains Mono',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        textDecorationLine: 'underline',
        paddingTop: 4,

    },
    buttonText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'JetBrains Mono',
        paddingTop: 4,
    },
    button: {
        height: 50,
        width: 200,
        borderRadius: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        padding: 6,
        justifyContent: 'center',
    },
})
