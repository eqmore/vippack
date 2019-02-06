import axios from './index.js';
//返回promise
export function getSliders(){
    return axios.get('/sliders');
}

export function getLessons(offset,limit,type){
   return axios.get(`/lessons/${offset}/${limit}/${type}`);
}

export function getLesson(id){
    return axios.get(`/lesson/${id}`);
}