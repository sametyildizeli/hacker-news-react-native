import React, { FC } from 'react';
import IStory from '../../abstracts/IStory';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';


const Card: FC<{ story: IStory }> = ({ story }) => {

    return (
        <View style={styles.cardStyle} >
            <View style={styles.cardStyle} >
                <View style={{ width: '100%' }}>
                    <View style={styles.timestamp}>
                        <Text style={{ color: "#d1d3e0" }}>{story.time}</Text>
                    </View>

                    <View style={styles.titleView}>
                        <Text style={styles.titleText}> {`${story.title?.substring(0, 60)}` + '...'}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <View style={styles.attr}>
                            <Text style={{ fontWeight: 'bold', alignSelf: 'flex-start' }}>{`Score: ${story.score}`} </Text>
                        </View>
                        <View style={styles.attr}>
                            <Text style={{ fontWeight: 'bold', alignSelf: 'flex-end' }}>{`Author: ${story.by}`} </Text>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    cardStyle: {
        flexDirection: 'row',
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 15,
        borderRadius: 15,
        backgroundColor: '#a5accf'
    },
    timestamp: {
        width: '30%',
        justifyContent: 'center',
        backgroundColor: '#131736',
        borderRadius: 5,
        alignItems: 'center',
    },
    titleView: {
        width: '100%',
        paddingTop: 10,
        justifyContent: 'center'
    },
    titleText: {
        color: '#283891',
        fontSize: 18,
        fontWeight: 'bold'
    },
    attr: {
        width: '50%',
        height: 20,
        marginTop: 15
    }
});