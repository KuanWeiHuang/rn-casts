import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style = {styles.viewStyle}>
            <View style = {styles.elementOneStyle }/>
            <View style = {styles.elementTwoStyle }/>
            <View style = {styles.elementThreeStyle }/>

        </View>

    ); 
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    elementOneStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    elementTwoStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        top: 50
    },
    elementThreeStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'purple'
    }

});

export default BoxScreen;