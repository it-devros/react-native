import firebase from 'react-native-firebase';
import { AsyncStorage } from 'react-native';
import { USER, COMMON } from '../../config/types';


export const storeAsyncUserData = async (user, password) => {
	try {
		await AsyncStorage.setItem('is_authed', 'true');
		await AsyncStorage.setItem('authedUser', JSON.stringify(user));
		await AsyncStorage.setItem('password', password);
		return true;
	} catch (error) {
		return false;
	}
}


export const getAsyncUserData = async () => {
	try {
		let is_authed = await AsyncStorage.getItem('is_authed');
		let user = await AsyncStorage.getItem('authedUser');
		let password = await AsyncStorage.getItem('password');
		user = JSON.parse(user || {});
		return { is_authed, user, password };
	} catch (error) {
		return false;
	}
}

export const removeAsyncUserData = async () => {
	try {
		await AsyncStorage.removeItem('is_authed');
		await AsyncStorage.removeItem('authedUser');
		await AsyncStorage.removeItem('password');
		return true;
	} catch (error) {
		throw error;
	}
}


export const signIn = (email, password) => {
	return (dispatch) => {
		// return firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
		// 	let result = storeAsyncUserData(res.user._user, password);
		// 	if (result) {
		// 		dispatch({ type: USER.AUTH, payload: { authedUser: res.user._user } });
		// 		return true;
		// 	} else {
		// 		return false
		// 	}
		// }).catch((err) => {
		// 	throw err;
		// });
	}
}


export const signUp = (email, password) => {
	return (dispatch) => {
		// return firebase.auth().createUserWithEmailAndPassword(email, password).then((res) => {
		// 	let result = storeAsyncUserData(res.user._user, password);
		// 	if (result) {
		// 		dispatch({ type: USER.AUTH, payload: { authedUser: res.user._user } });
		// 		return true;
		// 	} else {
		// 		return false
		// 	}
		// }).catch((err) => {
		// 	throw err;
		// });
	}
}


export const checkAuthed = () => {
	return (dispatch) => {
		return getAsyncUserData().then(result => {
			let email = result.user != undefined ? result.user.email : "test";
			let password = result.password || "test";
			// return firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
			// 	let result = storeAsyncUserData(res.user._user);
			// 	if (result) {
			// 		dispatch({ type: USER.AUTH, payload: { authedUser: res.user._user } });
			// 		return true;
			// 	} else {
			// 		return false
			// 	}
			// }).catch(err => {
			// 	throw err;
			// });
		});
	}
}

export const signOut = () => {
	return (dispatch) => {
		return removeAsyncUserData().then(result => {
			// return firebase.auth().signOut().then(res => {
			// 	dispatch({ type: USER.OUT });
			// 	return true;
			// }).catch(error => {
			// 	throw error;
			// });
		}).catch(err => {
			throw err;
		});
	}
}