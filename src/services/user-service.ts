import { AxiosRequestConfig } from "axios";
import { requestBackEnd } from "../utils/requests";
// import * as authService from './auth-service';

export function findMe()  {

    // const headers = {
    //     Authorization: "Bearer " + authService.getAccessToken()
    // }
    
    const config: AxiosRequestConfig = {
        url: "/users/me",
        withCredentials: true
    }

    // return requestBackEnd({ url: `/users/me`, headers: headers }); 
    return requestBackEnd(config); 
}


