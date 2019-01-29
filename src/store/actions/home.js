import * as Types from '../action-types';
import {getSliders} from '../../api/home';
const actions ={
    UpdateCurLesson(lesson){
        return {type:Types.SET_CUR_LESSON,lesson}
    }
    //redux-promise,将payload的promise执行，执行后的内容放到action.payload中进行派发，执行后将内容放到action.payload中
    ,GetSlidersAPI(){
        return function(dispatch,getState){
            dispatch({type:Types.GETSLIDERS,payload:getSliders()})
        }
        
    }

}
export default actions;