import { Dispatch } from "redux"

export const loading = (loading: boolean) => {

    return (dispatch: Dispatch) => {
        dispatch({
            type: 'LOADING',
            loading: loading,
        })
    }
}
