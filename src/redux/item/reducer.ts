import IItemState from "../../abstracts/IItemState"

const initialState: IItemState = {
    topStoriesList: [],
    top10RandomStories: [],
    story: {},
    storyList: []
}

const itemReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "TOP_STORIES":
            return {
                ...state,
                topStoriesList: action.topStoriesList,          //all top stories
                top10RandomStories: action.top10RandomStories,  //randomized 10 stories from the all top stories
            }
        case "STORY_BY_ID":
            return {
                ...state,
                story: action.story,
                storyList: [...state.storyList, action.story]  //adds last story object into storyList array
            }
        default:
            return state;
    }
}

export default itemReducer;