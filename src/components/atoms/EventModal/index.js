import React from 'react'
import { View, Text, Button, Modal, StyleSheet } from 'react-native'

const EventModal = ({ name, handleOnPress, handleOnClose }) => {
    return (
        <View style = {styles.container}>
            <Modal animationType = {"slide"} transparent = {false}
            visible = {true}>
                <View styles={styles.modal}>            
                    <Text>{name}</Text>
                    <View>
                        <Button title='See Event' onPress={handleOnPress}/>
                        <Button title='Close' onPress={handleOnClose}/>
                    </View>
                </View> 
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#ede3f2',
        padding: 100
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f7021a',
        padding: 100
     },
     text: {
        color: 'red',
        marginTop: 10
     }
})

export default EventModal