import axios from 'axios';
import {AUTH_USER, LOGIN_USER,REGISTER_USER} from "./types"

export function loginUser(dataToSubmit){

    const request = axios.post("/api/users/login",dataToSubmit)
        .then(response => response.data);
        //reducer 에 넘겨 주는 작업
        //response 와 타입을 넘겨줌
        return {
            type : LOGIN_USER,
            payload: request
        }
}

export function registerUser(dataToSubmit){

    const request = axios.post("/api/users/register",dataToSubmit)
        .then(response => response.data);
        //reducer 에 넘겨 주는 작업
        //response 와 타입을 넘겨줌
        return {
            type : REGISTER_USER,
            payload: request
        }
}

export function auth(){

    const request = axios.get("/api/users/auth")
        .then(response => response.data);
        //reducer 에 넘겨 주는 작업
        //response 와 타입을 넘겨줌
        return {
            type : AUTH_USER,
            payload: request
        }
}