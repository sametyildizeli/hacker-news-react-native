import IloadingState from "../../abstracts/ILoadingState";

const initialState: IloadingState = {
    loadingState: false
};

const loadingReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                loadingState: action.loading
            }
        default:
            return state;
    }
};
export default loadingReducer