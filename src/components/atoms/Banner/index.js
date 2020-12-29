import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const Banner = ({text}) => {
    return (
        <View style={styles.banner}>
            <Text style={styles.bannerText}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    banner: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bannerText: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default Banner