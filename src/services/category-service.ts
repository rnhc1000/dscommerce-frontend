import { AxiosRequestConfig } from "axios";
import { requestBackEnd } from "../utils/requests";

export function findAllRequest() {
    // return products;

    const config: AxiosRequestConfig = {
        method: "GET",
        url: "/categories",
        }

    return requestBackEnd(config);
}