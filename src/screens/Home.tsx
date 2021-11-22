import React, { FC, useEffect } from 'react';
import { getStoryItemByIdList, getTopStories } from '../redux/item/action';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../abstracts/RootState';
import Card from '../components/Card/Card';
import IStory from '../abstracts/IStory';
import {
    StyleSheet,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import Loading from '../components/Loading/Loading';

const Home: FC<{ navigation: StackNavigationProp<any, any> }> = ({ navigation }) => {

    const dispatch = useDispatch();

    const { top10RandomStories, storyList } = useSelector((state: RootState) => state.item)
    const { loadingState } = useSelector((state: RootState) => state.loading);

    const sortedList = storyList.sort((a: any, b: any) => (a.score > b.score) ? 1 : -1); //ascending order by story score value

    useEffect(() => {
        top10RandomStories.length === 0 ? dispatch(getTopStories()) : null
    }, [])

    useEffect(() => {
        storyList.length === 0 ? dispatch(getStoryItemByIdList(top10RandomStories)) : null
    }, [top10RandomStories]) //top10RandomStories variable triggers to get stories

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView
                style={styles.scrollStyle}
                contentInsetAdjustmentBehavior="automatic">
                {
                    loadingState
                        ?
                        <Loading block={loadingState} />
                        :
                        sortedList.length === 10 && sortedList.map((item: IStory, i: number) => (
                            <TouchableOpacity
                                key={i}
                                onPress={() => navigation.navigate('Detail',
                                    { story: item }
                                )}
                            >
                                <Card story={item} />
                            </TouchableOpacity>
                        ))
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    scrollStyle: {
        padding: 20,
        width: "100%",
        height: "100%"
    },
    safeArea: {
        backgroundColor: "#d1d3e0"
    }
});