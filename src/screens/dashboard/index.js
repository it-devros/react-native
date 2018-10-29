import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';
import Svg,{ Path } from 'react-native-svg';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as commonActions from '../../actions/common';

import Header from '../header';
import NoticeBoard from '../../components/noticeBoard';

import NewPost from '../../components/dashboard/newPost';
import Post from '../../components/dashboard/post';


const { height, width } = Dimensions.get('window');

const mapDispatchToProps = (dispatch) => {
	return ({
    commonActions: bindActionCreators({...commonActions}, dispatch)
	});
}

const mapStateToProps = (state) => {
	return ({
    authedUser: state.user.authedUser,
    loading: state.common.loading,
    label: state.common.label,
	});
}




class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.onPressMenu = this.onPressMenu.bind(this);
    this.onPressHome = this.onPressHome.bind(this);
    this.onChangeBoard = this.onChangeBoard.bind(this);
    this.onPressSideBar = this.onPressSideBar.bind(this);
  }

  onPressMenu() {
    this.props.navigation.navigate('Menu');
  }

  onPressHome() {
    this.props.navigation.openDrawer();
  }

  onPressSideBar() {
    this.props.navigation.navigate('SideBar');
  }

  onChangeBoard(val) {
    if (val == 'profile') {
      this.props.navigation.navigate('Profile');
    }
    if (val == 'dashboard') {
      this.props.navigation.navigate('Dashboard');
    }
    if (val == 'inbox') {
      this.props.navigation.navigate('Inbox');
    }
    if (val == 'settings') {
      this.props.navigation.navigate('Settings');
    }
    if (val == 'albums') {
      this.props.navigation.navigate('Albums');
    }
    if (val == 'buildings') {
      this.props.navigation.navigate('Buildings');
    }
    if (val == 'savedPosts') {
      this.props.navigation.navigate('SavedPosts');
    }
  }

  render () {

    return (
      <View style={styles.window}>
        <View style={styles.header}>
          <Header opened={false} onPressHome={this.onPressHome} onPressMenu={this.onPressMenu} />
        </View>
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.notifySection}>
              <NoticeBoard value={'dashboard'} onChange={this.onChangeBoard} />
            </View>
            <View style={styles.newPostSection}>
              <NewPost />
            </View>
            <View style={styles.configSection}>
              <Text style={styles.caption1}>Filter posts by:</Text>
              <Text style={styles.caption2}>Buildings</Text>
              <Text style={styles.caption2}>Tenants</Text>
              <Text style={styles.caption2}>Prospects</Text>
              <Text style={styles.caption2}>All</Text>
            </View>
            <View style={styles.postSection}>
              <Post />
            </View>
            <View style={styles.postSection}>
              <Post />
            </View>
          </ScrollView>
          <View style={styles.sidebarBtn}>
            <TouchableOpacity onPress={this.onPressSideBar}>
              <Svg id="olymp-menu-icon" viewBox="0 0 41 32" width={30} height={30}>
                <Path fill="#ffffff" d="M4.571 0h-4.571v4.571h4.571v-4.571zM9.143 0v4.571h32v-4.571h-32zM13.714 13.714h-13.714v4.571h13.714v-4.571zM18.286 13.714v4.571h4.571v-4.571h-4.571zM27.429 18.286h13.714v-4.571h-13.714v4.571zM0 32h32v-4.569h-32v4.569zM36.571 32h4.571v-4.569h-4.571v4.569z"></Path>
              </Svg>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );

  }
}


const styles = StyleSheet.create({
  window: {
    width: width,
    height: height,
    backgroundColor: '#edf2f6',
  },
  header: {
    height: 50,
  },
  container: {
    height: height - 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notifySection: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  },
  newPostSection: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 30,
  },
  configSection: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  caption1: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  caption2: {
    fontSize: 12,
    marginLeft: 5,
    marginRight: 5,
  },
  postSection: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  },
  sidebarBtn: {
    width: 50,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#ff5e3a',
    position: 'absolute',
    right: 0,
    top: 200,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);