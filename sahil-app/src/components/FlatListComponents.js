import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const FlatListComponents = () => {
    return (
        <View style={styles.flat}>
            <Text>
                hello from the flat list components
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    flat: {
        backgroundColor:"red",
        padding:"45px",
        fontWeight:"bold",
        fontStyle:"white",
    }
})
export default FlatListComponents