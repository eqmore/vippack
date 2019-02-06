import * as Types from '../action-types';
import {getSliders, getLessons} from '../../api/home';
const actions ={
    UpdateCurLesson(lesson){
        // return {type:Types.SET_CUR_LESSON,lesson}
        return function(dispatch,getState){
            dispatch({type:Types.SET_CUR_LESSON,lesson});
            actions.RefreshAPI()();
        }
    }
    //redux-promise,将payload的promise执行，执行后的内容放到action.payload中进行派发，执行后将内容放到action.payload中
    ,GetSlidersAPI(){
        console.log('slider-api')
        return function(dispatch,getState){
            dispatch({type:Types.GETSLIDERS,payload:getSliders()})
        }
        
    }
    ,GetLessonsAPI(){
        console.log('lesson-api');
        return function(dispatch,getState){
            let {currentLesson:type,lesson:{offset,limit}} = getState().home;
            if(!getState().home.lesson.hasmore || getState().home.lesson.isLoading) return;
            dispatch({type:Types.SETLOADING,status:true});
            dispatch({type:Types.GETLESSONS,payload:getLessons(offset,limit,type)});
        }
    },
    SetLoading(){
        return {type:Types.SetLoading,status:true}
    },
    RefreshAPI(){
        return function(dispatch,getState){
            dispatch({type:Types.REFRESH});
            actions.GetLessonsAPI()(dispatch,getState);
        }
    }

}
export default actions;