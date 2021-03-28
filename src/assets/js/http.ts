import axios, { AxiosInstance, AxiosResponse } from "axios";
import { trackPromise } from "react-promise-tracker";

const http: AxiosInstance = axios.create({
    baseURL: process.env.SERVER_URL || 'http://localhost:4000/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const reqTimeDelayAndTrack = (request: Promise<AxiosResponse>, time: number = 2000, tracker?: string): Promise<AxiosResponse> => {
    return trackPromise(new Promise<AxiosResponse>((resolve) => {
        setTimeout(() => {
            resolve(request)
        }, time)
    }), tracker)
}

export const interceptors = (isReq?: boolean):void => {
    http.interceptors.response.use((response) => response, (error) => {
        const originalRequest = error.config;
        console.log('Response', error.response)
        console.log('Error config', originalRequest)
        return Promise.reject(error)
    })

    if(isReq) {
        http.interceptors.request.use((config) => config,(error) => {
            return Promise.reject(error);
        });
    }
}

export default http