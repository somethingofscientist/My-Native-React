import React from 'react'
import { Button, View, Text, Alert, TouchableOpacity } from 'react-native'

const ButtonComponent = () => {
    return (
        <View>
            <Text>Press on the buttons</Text>
            <Button
                title='Click on this'
                onPress={() => {
                    Alert.alert("Button hello world")
                    console.log('Button hello world')
                }}
            />
            <TouchableOpacity
                onPress={() => {
                    Alert.alert("Touchable opacity")
                    console.log('Touchable opacity')
                }}
            >
                <Text>TouchableOpacity Button</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonComponent