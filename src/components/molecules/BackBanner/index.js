import React from 'react'
import { View, StyleSheet } from 'react-native'

import { BackArrow, Banner } from '../../atoms'

const BackBanner = ({ navigation, text, route, marginLeft }) => {
    return (
        <View>
            <View>
                <Banner text={text}/>
            </View>
            <View style={{...styles.arrowContainer, marginLeft}}>
                <BackArrow navigation={navigation} route={route}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    arrowContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: -37,
    }
})


export default BackBanner