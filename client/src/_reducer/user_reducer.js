import {LOGIN_USER, REGISTER_USER,AUTH_USER} from '../_actions/types'


export default function (state={},action){
    switch (action.type) {
        case LOGIN_USER:
            return{...state,loginSuccess : action.payload} //빈 state를 나타냄
        case REGISTER_USER:
            return{...state,register : action.payload} //빈 state를 나타냄
        case REGISTER_USER:
            return{...state,userData : action.payload} //빈 state를 나타냄
        default:
            return state;
    }
}