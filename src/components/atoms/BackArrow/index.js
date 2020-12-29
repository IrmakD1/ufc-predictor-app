import React from 'react'
import BackArrowIcon from '../../../assets/icons/red-arrow-left.png'
import { StyleSheet, TouchableWithoutFeedback, Image } from 'react-native'


const BackArrow = ({ navigation, route }) => {
    return (
        <TouchableWithoutFeedback onPress={() => {
            navigation.navigate(route)
        }} >
            <Image source={BackArrowIcon} style={styles.image}/>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        marginTop: -40
    },
    image: {
        width: 25,
        height: 25,
    }
})

export default BackArrow