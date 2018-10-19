import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const { height, width } = Dimensions.get('window');

import Header from '../header';
import NoticeBoard from '../../components/noticeBoard';

import SettingsTab from '../../components/settings/settingsTab';
import SettingsWindow from '../../components/settings/settings';


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



class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_settings: true,
      is_changePassword: false,
      is_privacySettings: false,
      is_socialNetworks: false,
      is_friendRequests: false,
      is_buildingInvites: false,
      is_becomeVerified: false,
    }
    this.onChangeBoard = this.onChangeBoard.bind(this);
    this.onPressTab = this.onPressTab.bind(this);
    this.initStates = this.initStates.bind(this);
  }

  initStates() {
    this.setState({
      is_settings: false,
      is_changePassword: false,
      is_privacySettings: false,
      is_socialNetworks: false,
      is_friendRequests: false,
      is_buildingInvites: false,
      is_becomeVerified: false,
    });
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
  }

  onPressTab(val) {
    this.initStates();
    if (val == 'settings') {
      this.setState({ is_settings: true });
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
              <NoticeBoard onChange={this.onChangeBoard} />
            </View>
            <View style={styles.subTabSection}>
              <SettingsTab onPressTab={this.onPressTab} />
            </View>
            <View style={styles.contentSection}>
              {
                this.state.is_settings == true ?
                  <SettingsWindow />
                : null
              }
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
  subTabSection: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 2,
  },
  contentSection: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 30,
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);