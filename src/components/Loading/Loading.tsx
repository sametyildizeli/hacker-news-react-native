import React, { FC } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'


const Loading: FC<{ block: boolean }> = ({ block }) => {


    const styles = StyleSheet.create({
        containeractivity: {
            height: '100%',
            flex: 1,
            justifyContent: "center",
            alignItems: 'center',
            display: block == true ? 'flex' : 'none'
        },
        horizontal: {
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 10,
            
        },
    })

    return (
        <View style={[styles.containeractivity, styles.horizontal]}>
            <ActivityIndicator size="large" color="#8D6584" />
        </View>
    )
}

export default Loading


