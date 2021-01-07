import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Modal from 'react-native-modal';

const ErrorModal = ({ text, handleClose }) => {
    return (
        <Modal isVisible={true}>
            <View style={styles.modalContent}>
                <View style={styles.closeButton}>
                    <TouchableOpacity
                        style={styles.Button}
                        onPress={handleClose}
                        >
                        <Text style={styles.textX}>X</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.textContent}>
                    <Text style={styles.primaryText}>Oops!</Text>
                    <Text style={styles.text}>{text}</Text>
                    <Text style={{...styles.text, marginTop: 0}}>Please try again later.</Text>
                </View>
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
   textX: {
       color: 'white',
       fontWeight: 'bold',
       fontSize: 20
   },
   primaryText: {
       color: 'black',
       fontWeight: 'bold',
       fontSize: 20
   }
})

export default ErrorModal