import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../header';
import NoticeBoard from '../../components/noticeBoard';
import ProfileImage from '../../components/albums/profileImage';
import SearchBox from '../../components/albums/searchBox';

const { height, width } = Dimensions.get('window');


const mapDispatchToProps = (dispatch) => {
	return ({
	});
}

const mapStateToProps = (state) => {
	return ({
    authedUser: state.user.authedUser,
    loading: state.common.loading,
    label: state.common.label,
	});
}



class Albums extends React.Component {
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
              {/* <NoticeBoard value={'albums'} onChange={this.onChangeBoard} /> */}
            </View>
            <View style={styles.profileImageSection}>
              <ProfileImage />
            </View>
            <View style={styles.searchBoxSection}>
              <SearchBox />
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
  profileImageSection: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  },
  searchBoxSection: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 30,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Albums);