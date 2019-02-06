import * as Types  from '../action-types';
import {getUser} from '../../api/user';
let actions ={
    getUserAPI(username,password,history){
        return function(dispatch,getState){
            getUser(username,password).then((data)=>{
                dispatch({type:Types.SETUSER,user:data})
                if(!data.err){
                    history.push('/login');
                }
            })
        }
    }
}

export default actions;