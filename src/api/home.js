import axios from './index.js';
//返回promise
export function getSliders(){
    axios.get('/sliders').then((res)=>{
        console.log(res.data);
    })
    return axios.get('/sliders');
}