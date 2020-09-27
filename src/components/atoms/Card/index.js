import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, Image, Text } from 'react-native'

const Card = ({ text, img, navigation, route }) => {
    
     return ( 
        <TouchableWithoutFeedback onPress={() => {
            navigation.navigate(route)
        }}>
            <View style={styles.card}>
                <Image source={img} style={styles.image}/>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 150,
        height: 150,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    image: {
        width: 80,
        height: 80,
        marginBottom: 2,
    },
    text: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 4
    }
})

export default Card