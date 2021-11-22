import axios from 'axios';
import { Dispatch } from 'redux';
import ItemService from '../../configs/services/ItemService';
import { loading } from '../loading/action';

const randomTopTenStories = (topStoriesDataList: Array<number>): Array<number> => {
    const randomArray: Array<number> = [];
    for (var i = 0; i < 10; i++) {
        var idx = Math.floor(Math.random() * topStoriesDataList.length);
        randomArray.push(topStoriesDataList[idx]);
        topStoriesDataList.splice(idx, 1);
    }
    return randomArray;
}


export const getTopStories = () => {

    let randomStoryArray: Array<number> = [];
    return async (dispatch: Dispatch) => {
        dispatch<any>(loading(true))
        await ItemService.GetTopStories()
            .then(
                response => {
                    randomStoryArray = randomTopTenStories(response.data);  // Returns random 10 stories
                    dispatch({
                        type: "TOP_STORIES",
                        topStoriesList: response.data,
                        top10RandomStories: randomStoryArray
                    })
                }
            )
            .catch((err) => console.error(err))
            .finally(() => dispatch<any>(loading(false)))
    }
}

export const getStoryItemByIdList = (storyIdList: Array<number>) => {
    return (dispatch: Dispatch) => {
        // dispatch<any>(loading(true))
        storyIdList.forEach(storyId => {
            ItemService.GetStoryItemById(storyId)
                .then(
                    response => {
                        dispatch({
                            type: "STORY_BY_ID",
                            story: response.data,
                        })
                    }
                )
        })
        // dispatch<any>(loading(false))
    }
}