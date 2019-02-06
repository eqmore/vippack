import * as Types from '../action-types';
let initialstate ={
    user:{
        user:null,
        err:0,
        msg:'',
        success:''
    }
}
function user(state=initialstate,action){
    switch(action.type){
        case Types.SETUSER:
        return {...action.user};
    }
    return state;
}

export default user;