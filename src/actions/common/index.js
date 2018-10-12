import { COMMON } from '../../config/types';

export const start = (text) => {
	return (dispatch) => {
		dispatch({ type: COMMON.SERVER_REQUEST, payload: { label: text } });
	}
}

export const end = () => {
	return (dispatch) => {
		dispatch({ type: COMMON.SERVER_SUCCESS });
	}
}
