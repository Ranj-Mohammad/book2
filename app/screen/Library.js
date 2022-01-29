import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Library = () => {
    return (
        <View>
            <Text style={styles.text}>my library</Text>
        </View>
    )
}

export default Library

const styles = StyleSheet.create({
text:{fontSize:110,},
})
