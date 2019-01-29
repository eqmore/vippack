

import * as Types from '../action-types';
const initialState ={
    currentLesson:"all",
    sliders:[],
}

function home(state=initialState,action){
    switch(action.type){
        case Types.SET_CUR_LESSON:
            return {...state,currentLesson:action.lesson};
        case Types.GETSLIDERS:
            return {...state,sliders:action.payload};
    }
    return state;
}

export default home;