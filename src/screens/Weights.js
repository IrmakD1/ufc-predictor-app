import React, { Component } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux';

import Styles from '../assets/constants/styles';
import * as weightActions from '../actions/weight'
import { ListItem } from '../components/atoms';
import { BackBanner } from '../components/molecules';

const weightCategories = [
    { name: 'Flyweight', id: 1},
    { name: 'Bantamweight', id: 2 },
    { name: 'Featherweight', id: 3},
    { name: 'Lightweight', id: 4 },
    { name: 'Welterweight', id: 5 },
    { name: 'Middleweight', id: 6 },
    { name: 'Light Heavyweight', id: 7 },
    { name: 'Heavyweight', id: 8},
    { name: 'Women\'s Strawweight', id: 9 },
    { name: 'Women\'s Flyweight', id: 10 },
    { name: 'Women\'s Bantamweight', id: 11 }
]

class Weights extends Component {
    
    hanldeOnPress = (weight) => {
        const { navigation, handleAddWeight } = this.props

        handleAddWeight(weight)

        navigation.navigate('Fighters')
    } 

    render() {

        const { navigation } = this.props

        return (
            <View style={styles.screen}>
                <BackBanner 
                    navigation={navigation} 
                    text='Select a Weightclass' 
                    route="Home" 
                    marginLeft={-100}/>
                <View style={styles.listContainer}>
                    <FlatList 
                        data={weightCategories}
                        keyExtractor={(item, index) => `${item.id}` }
                        renderItem={({item}) => (
                            <ListItem 
                                text={item.name}
                                hanldeOnPress={() => this.hanldeOnPress(item.name)}/>
                    )}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: Styles.screen,
    listContainer: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 10,
        width: '100%'
    },
    arrowContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: -40,
        marginLeft: -350
    }
})

const mapStateToProps = () => ({})

export default connect(mapStateToProps, weightActions)(Weights)