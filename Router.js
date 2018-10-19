import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';


import Login from './src/screens/auth/login';
import SignUp from './src/screens/auth/signup';
import WelcomeNew from './src/screens/auth/welcomeNew';

import Welcome from './src/screens/welcome';

import Dashboard from './src/screens/dashboard';

import Profile from './src/screens/profile';

import Inbox from './src/screens/inbox';

import Settings from './src/screens/settings';


const AuthStack = StackNavigator({
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  WelcomeNew: { screen: WelcomeNew }
}, {
  headerMode: 'none',
});

const DashboardStack = StackNavigator({
  Dashboard: { screen: Dashboard }
}, {
  headerMode: 'none'
});

const ProfileStack = StackNavigator({
  Profile: { screen: Profile }
}, {
  headerMode: 'none'
});

const InboxStack = StackNavigator({
  Inbox: { screen: Inbox }
}, {
  headerMode: 'none'
});

const SettingsStack = StackNavigator({
  Settings: { screen: Settings }
}, {
  headerMode: 'none'
});

const AppNavigator = StackNavigator({
  Welcome: { screen: Welcome },
  AuthStack: { screen: AuthStack },
  DashboardStack: { screen: DashboardStack },
  ProfileStack: { screen: ProfileStack },
  InboxStack: { screen: InboxStack },
  SettingsStack: { screen: SettingsStack }
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
