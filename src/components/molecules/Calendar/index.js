import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Calendar } from 'react-native-calendars'
import { Button } from '../../atoms'


const CalendarContainer = ({ handlePress, navigation, markedDates, handleDayPress }) => {

    return (
        <View>
            <View>
                <Calendar 
                    minDate={Date()}
                    onDayPress={(day) => handleDayPress(day.dateString)}
                    markedDates={markedDates}
                />
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button text='Go Back' handlePress={() => handlePress(navigation)}/>
                </View>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        width: '30%',
    }
})

export default CalendarContainer