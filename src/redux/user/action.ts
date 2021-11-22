import axios from 'axios';
import { Dispatch } from 'redux';
import UserService from '../../configs/services/UserService';
import { loading } from '../loading/action';

export const getUserById = (userId:number) => {
    return async (dispatch: Dispatch) => {
        
        dispatch<any>(loading(true))
        await UserService.GetUserById(userId)
            .then(
                response => {
                    dispatch({
                        type: "USER_BY_ID",
                        user: response.data,
                    })
                }
            )
            .catch((err) => console.error(err))
            .finally(() => dispatch<any>(loading(false)))

    }
}