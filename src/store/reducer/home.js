

import * as Types from '../action-types';
const initialState ={
    currentLesson:"all",
    sliders:[],
    lesson:{
        hasmore:true,
        offset:0,
        limit:5,
        list:[],
        isLoading:false
    }
}

function home(state=initialState,action){
    switch(action.type){
        case Types.SET_CUR_LESSON:
            return {...state,currentLesson:action.lesson};
        case Types.GETSLIDERS:
            return {...state,sliders:action.payload};
        case Types.SETLOADING:
            return {...state,lesson:{...state.lesson,isLoading:action.status}};
        case Types.GETLESSONS:
            return {...state,lesson:{...state.lesson,
                hasmore:action.payload.hasMore,
                offset:state.lesson.offset+action.payload.list.length,
                list:[...state.lesson.list,...action.payload.list],
                isLoading:false
            }};
        case Types.REFRESH:
            return {...state,lesson:{...state.lesson,offset:0,hasMore:true,list:[]}}
    }
    return state;
}

export default home;