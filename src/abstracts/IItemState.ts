interface IItemState {
    topStoriesList?: Array<number>, // Could be nullable because service couldn't return null
    top10RandomStories: Array<number>,
    story: object,
    storyList: Array<object>
};

export default IItemState;