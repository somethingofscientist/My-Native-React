import React from 'react'
import { Button, View, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native'

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
            <TouchableOpacity style={styles.steelblue}
                onPress={() => {
                    Alert.alert("Touchable opacity")
                    console.log('Touchable opacity')
                }}
            >
                <Text>Touchable Opacity Button</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    steelblue: {
        textTransform:"uppercase",
        fontWeight: "bold" ,
        fontSize: 300,
        backgroundColor: "orange",
        padding: 10,
        color: "white",
        marginTop: 10,
        
    },
})
export default ButtonComponent