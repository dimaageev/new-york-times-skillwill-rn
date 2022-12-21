import { StyleSheet, Platform, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../consts/colors'
import { height } from '../consts/dimensions'

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={{ fontFamily: 'times', fontSize: 32 }}>
                The New York Times
            </Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: height / 10,
        marginTop: Platform.OS === 'android' ? 30 : 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.grey
    }
})
