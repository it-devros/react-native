import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, ScrollView, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import Header from '../header';

import NoticeBoard from '../../components/noticeBoard';
import NewPost from '../../components/newPost';


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



class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {

    return (
      <View style={styles.window}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.notifySection}>
              <NoticeBoard />
            </View>
            <View style={styles.newPostSection}>
              <NewPost />
            </View>
          </ScrollView>
        </View>
      </View>
    );

  }
}


const styles = StyleSheet.create({
  window: {
    flex: 1,
    backgroundColor: '#edf2f6',
  },
  header: {
    height: 60,
  },
  container: {
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);