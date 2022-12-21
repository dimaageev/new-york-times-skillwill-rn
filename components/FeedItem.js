import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { height, width } from '../consts/dimensions'
import { COLORS } from '../consts/colors'

const FeedItem = ({ feedItem }) => {
    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <Text style={styles.title}>{feedItem.title}</Text>
                <Text style={styles.description}>{feedItem.description}</Text>
                <Text style={styles.minRead}>{feedItem.readTime} MIN READ</Text>
            </View>
            <Image source={{ uri: feedItem.image }} style={styles.image} />
        </View>
    )
}

export default FeedItem

const styles = StyleSheet.create({
    container: {
        width: width * 0.95,
        height: 250,
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    text: {
        width: '50%',
        padding: 5
    },
    title: {
        fontSize: 20,
        fontWeight: '700'
    },
    description: {
        fontSize: 13,
        marginVertical: 5
    },
    minRead: {
        fontSize: 11,
        color: COLORS.grey
    },
    image: {
        width: '50%',
        height: '50%',
        borderRadius: 5
    }
})
