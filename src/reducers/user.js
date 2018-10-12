
import { USER } from '../config/types';

const initState = {
  is_authed: false,
  authedUser: {}
}


const user = (state = initState, action) => {
  const { type, payload} = action;
  
  switch(type){
    case USER.AUTH:
      return {
        ...state,
        is_authed: true,
        authedUser: payload.authedUser
      }
    
    case USER.OUT:
      return {
        ...state,
        is_authed: false,
        authedUser: {}
      }

    default:
        return state;
  }
};

export default user;