import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';


import Login from './src/screens/auth/login';
import SignUp from './src/screens/auth/signup';
import WelcomeNew from './src/screens/auth/welcomeNew';

import Welcome from './src/screens/welcome';


const AuthStack = StackNavigator({
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  WelcomeNew: { screen: WelcomeNew }
}, {
  headerMode: 'none',
});


const AppNavigator = StackNavigator({
  Welcome: { screen: Welcome },
  AuthStack: { screen: AuthStack },
}, {
    mode: 'modal',
    headerMode: 'none',
});



const mapDispatchToProps = (dispatch) => {
	return ({
	});
}

const mapStateToProps = (state) => {
	return ({
    authedUser: state.user.authedUser,
    is_authed: state.user.is_authed,
    loading: state.common.loading,
    label: state.common.label,
	});
}




class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <AppNavigator />
    );
  }

}



export default connect(mapStateToProps, mapDispatchToProps)(Router);
