import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import Menu from './src/screens/menu';
import SideMenu from './src/screens/sideMenu';

import Login from './src/screens/auth/login';
import SignUp from './src/screens/auth/signup';
import WelcomeNew from './src/screens/auth/welcomeNew';

import Welcome from './src/screens/welcome';

import Dashboard from './src/screens/dashboard';

import Profile from './src/screens/profile';

import Inbox from './src/screens/inbox';

import Settings from './src/screens/settings';

import Albums from './src/screens/albums';

import Buildings from './src/screens/buildings';

import SavedPosts from './src/screens/savedPosts';



const WelcomeStack = {
  Welcome: { screen: Welcome }
};

const AuthStack = {
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  WelcomeNew: { screen: WelcomeNew }
};


const MainStack = {
  Dashboard: { screen: Dashboard },
  Profile: { screen: Profile },
  Inbox: { screen: Inbox },
  Settings: { screen: Settings },
  Albums: { screen: Albums },
  Buildings: { screen: Buildings },
  SavedPosts: { screen: SavedPosts },

  Menu: { screen: Menu }
};


const DrawerStack = createDrawerNavigator(MainStack, {
  drawerWidth: 300,
  contentComponent: SideMenu,
})

const AppNavigator = createStackNavigator({
  ...WelcomeStack,
  ...AuthStack,
  Drawer: {
    name: 'Drawer',
    screen: DrawerStack,
  },
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
