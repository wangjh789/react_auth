import {combineReducers} from "redux";
import user from './user_reducer';

//여러 reducer 를 하나로 묶어줌
const rootReducer = combineReducers({
    user
    
})

export default rootReducer;