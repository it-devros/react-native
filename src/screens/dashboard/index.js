import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';
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
  }

  onPressMenu() {
    this.props.navigation.navigate('Menu');
  }

  onPressHome() {
    this.props.navigation.openDrawer();
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);