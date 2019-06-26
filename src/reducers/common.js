
import { COMMON } from '../config/types'

const initState = {
  loading: false,
  label: '',
}


const common = (state = initState, action) => {
  const { type, payload} = action
  
  switch(type){
    case COMMON.SERVER_REQUEST:
      return {
        ...state,
        loading: true,
        label: payload.label
      }
    
    case COMMON.SERVER_SUCCESS:
      return {
        ...state,
        loading: false,
        label: ''
      }

    default:
      return state
  }
}

export default common