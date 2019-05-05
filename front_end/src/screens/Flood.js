import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button,
    Alert,
} from 'react-native';

export default class Flood extends Component {
    render() {
        onPressFlood = () => {
            Alert.alert(" Flood ");
        }
        return (
            <View style={styles.container}>
                <Text>FLOOD</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    floodText: {
        fontSize: 30,
        fontFamily: 'monospace',
    },
});