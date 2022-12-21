import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Category = ({ category }) => {
    return (
        <View style={styles.container}>
            <Text>{category}</Text>
        </View>
    )
}

export default Category

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5
    }
})
