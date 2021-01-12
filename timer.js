import React from 'react'
import {View, Text, StyleSheet, TextInput, Button, Vibration} from 'react-native'

const vib = () => Vibration.vibrate([500, 500, 500])


export default class Timer extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <View>
                <Text>WORK TIMER</Text>
                <Text>05:00</Text>
                <TextInput placeholder='Work Minutes' />
                <TextInput placeholder='Work Seconds' />
                <TextInput placeholder='Break Minutes' />
                <TextInput placeholder='Break Seconds' />

            </View>
        )
    }
}