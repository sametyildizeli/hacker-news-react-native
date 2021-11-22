import IUserState from "../../abstracts/IUserState";

const initialState: IUserState = {
    userObject: {}
}

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "USER_BY_ID":
            return {
                ...state,
                userObject: action.user
            }
        default:
            return state;
    }
}

export default userReducer;