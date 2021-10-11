import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Deliveries from '../components/home/Deliveries';
import Header from '../components/home/Header';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Deliveries />
        </SafeAreaView>

    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    }
})
