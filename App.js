import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native'
import Header from './components/Header'
import { COLORS } from './consts/colors'
import * as Font from 'expo-font'
import { useEffect, useState } from 'react'
import Category from './components/Category'
import FeedItem from './components/FeedItem'
import { CATEGORIES, FEED } from './consts/data'

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false)

    useEffect(() => {
        ;(async () => {
            await Font.loadAsync({
                times: require('./assets/fonts/NewYorkTimes.ttf')
            })
            setFontsLoaded(true)
        })()
    }, [])

    if (!fontsLoaded) return null

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.categories}>
                <Category category={CATEGORIES[0]} />
                <Category category={CATEGORIES[1]} />
                <Category category={CATEGORIES[2]} />
                <Category category={CATEGORIES[3]} />
                <Category category={CATEGORIES[4]} />
                <Category category={CATEGORIES[5]} />
                <Category category={CATEGORIES[6]} />
                <Category category={CATEGORIES[7]} />
            </View>
            <View style={styles.divider} />
            <View style={styles.divider} />
            <ScrollView style={styles.feed}>
                <FeedItem feedItem={FEED[0]} />
                <FeedItem feedItem={FEED[1]} />
                <FeedItem feedItem={FEED[2]} />
            </ScrollView>
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center'
    },
    categories: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingVertical: 10,
        backgroundColor: COLORS.ivory
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: COLORS.grey,
        marginBottom: 5
    },
    feed: {}
})
