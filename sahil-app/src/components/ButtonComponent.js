import React from 'react'
import { Button, View, Text, Alert } from 'react-native'

const ButtonComponent = () => {
    return (
        <View>
            <Text>Press on the buttons</Text>
            <Button
                title='Click on this'
                onPress={() => {
                    Alert.alert("hello world")
                    console.log('hello world')
                }}
            />
        </View>
    )
}

export default ButtonComponent