import React from 'react'
import { Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        padding: 10,
    },
});


const ImageComponent = () => {
    return (
        <Image
            style={styles.logo}
            source={require('../../assets/logo.jpg')}>
        </Image>
    )
}

export default ImageComponent