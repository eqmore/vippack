import axios from './index';

export function getUser(username,password){
    return axios.post('/reg',{username,password});
}