import { combineReducers } from 'redux';
import item from './item/reducer';
import user from './user/reducer';
import loading from './loading/reducer';

const rootReducer = combineReducers({
    item,
    user,
    loading
});

export default rootReducer;