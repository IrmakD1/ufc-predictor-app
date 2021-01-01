import React, { Component } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux';

import Styles from '../assets/constants/styles';
import * as weightActions from '../actions/weight'
import * as weightSelectors from '../selectors/weights'
import { ListItem } from '../components/atoms';
import { BackBanner } from '../components/molecules';

const weightCategories = [
    { name: 'Test', id: 1},
    { name: 'Test', id: 2 },
    { name: 'Test', id: 3},
    { name: 'Test', id: 4 },
    { name: 'Test', id: 5 },
    { name: 'Test', id: 6 },
    { name: 'Test Heavyweight', id: 7 },
    { name: 'Test', id: 8},
    { name: 'Test', id: 9 },
    { name: 'Test', id: 10 },
    { name: 'Test', id: 11 }
]

class Weights extends Component {

    componentDidMount() {
        const { handleAddWeightClassFighters, weightCategory } = this.props

        handleAddWeightClassFighters(weightCategory)
    }

    render() {

        const { navigation } = this.props

        return (
            <View style={styles.screen}>
                <BackBanner 
                    navigation={navigation} 
                    text='Select a Weightclass' 
                    route="Weights" 
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

const mapStateToProps = (state) => ({
    weightCategory: weightSelectors.getWeightclass(state)
})

export default connect(mapStateToProps, weightActions)(Weights)