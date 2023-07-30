import axios from 'axios';

export const API_URL = "https://api.github.com/search";

export const instance = axios.create({
    baseURL: API_URL,

});