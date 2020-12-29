import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Modal from 'react-native-modal';
import { FighterDetails, Button } from '../../atoms'

const FightCardModal = ({ fighter1Name, fighter2Name, fighter1Details, fighter2Details, handleClose, handleOnPress }) => {

    return (
        <Modal isVisible={true}>
            <View style={styles.modalContent}>
                <View style={styles.closeButton}>
                    <TouchableOpacity
                        style={styles.Button}
                        onPress={handleClose}
                        >
                        <Text style={styles.text}>X</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.textContent}>
                    <FighterDetails 
                        name={fighter1Name}
                        fighterDetails={fighter1Details}                 
                    />
                    <FighterDetails
                        name={fighter2Name}
                        fighterDetails={fighter2Details}      
                    />
                </View>
                {fighter1Details !== undefined && (
                    <View style={styles.buttonContainer}>
                        <Button 
                            text='Predict Fight!'
                            handlePress={handleOnPress}
                            />
                    </View>
                )}
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
        backgroundColor: 'white',
        paddingBottom: 10,
        borderRadius: 6,
    },
    textContent: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    closeButton: {
        flexDirection: 'row',
        marginTop: -5,
        marginLeft: -5,
    },
    Button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
        backgroundColor: 'red',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    buttonContainer: {
        alignItems: 'center',
        margin: 17
    }
})

export default FightCardModal