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

                <Link style={{marginHorizontal: 'auto'}} href="/contact" asChild>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Contact Us</Text>
                    </Pressable>
                </Link>


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
        marginBottom: 120,

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
        width: 100,
        borderRadius: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        padding: 6,
        justifyContent: 'center',
    },
})
