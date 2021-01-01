import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Modal from 'react-native-modal';

import { ButtonGroup } from '../../molecules'

const EventModal = ({ name, handleOnPress, handleOnClose }) => {
    return (
        <Modal isVisible={true}>
            <View style={styles.modalContent}>
                <Text style={styles.text}>{name}</Text>
                <ButtonGroup 
                    text1='See Event'
                    handlePress1={handleOnPress}
                    text2='Close'
                    handlePress2={handleOnClose}/>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
     text: {
        color: 'red',
        fontSize: 18,
        margin: 10,
        textAlign: 'center'
    },
    modalContent: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 6,
    },
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

export default EventModal