import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../header';
import NoticeBoard from '../../components/noticeBoard';

import Error from '../error';

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



class Buildings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.onPressMenu = this.onPressMenu.bind(this);
    this.onChangeBoard = this.onChangeBoard.bind(this);
  }

  onPressMenu() {
    this.props.navigation.navigate('Menu');
  }

  onChangeBoard(val) {
    if (val == 'profile') {
      this.props.navigation.navigate('ProfileStack');
    }
    if (val == 'dashboard') {
      this.props.navigation.navigate('DashboardStack');
    }
    if (val == 'inbox') {
      this.props.navigation.navigate('InboxStack');
    }
    if (val == 'settings') {
      this.props.navigation.navigate('SettingsStack');
    }
    if (val == 'albums') {
      this.props.navigation.navigate('AlbumsStack');
    }
    if (val == 'buildings') {
      this.props.navigation.navigate('BuildingsStack');
    }
    if (val == 'savedPosts') {
      this.props.navigation.navigate('SavedPostsStack');
    }
  }

  render () {

    return (
      <View style={styles.window}>
        <View style={styles.header}>
          <Header opened={false} onPressMenu={this.onPressMenu} />
        </View>
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.notifySection}>
              <NoticeBoard value={'buildings'} onChange={this.onChangeBoard} />
            </View>
            <View style={styles.bodySection}>
              <Error />
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
  bodySection: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Buildings);