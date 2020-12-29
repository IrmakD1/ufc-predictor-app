import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from '../../atoms'

const ButtonGroup = ({ text1, handlePress1, text2, handlePress2 }) => {
    return (
        <View style={styles.buttonGroup}>
            <View style={styles.button}>
                <Button text={text1} handlePress={handlePress1} />
            </View>
            <View style={styles.button}>
                <Button text={text2} handlePress={handlePress2}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonGroup: {
        margin: 10,
        flexDirection: 'row',
    },
    button: {
        flex: 1,
        marginRight: 20,
        marginLeft: 20
    }
})

export default ButtonGroup