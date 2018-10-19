import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, Picker, KeyboardAvoidingView } from 'react-native';
import Svg,{ Path } from 'react-native-svg';
import { Button } from 'react-native-elements';


const { height, width } = Dimensions.get('window');


class SettingsTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render () {

    return (
      <View style={styles.container}>
        <View style={styles.mainSection}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Profile Settings</Text>
          </View>
          <View style={styles.body}>
            <TouchableOpacity onPress={ () => this.props.onPressTab('settings') }>
              <Text style={styles.tabText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.props.onPressTab('changePassword') }>
              <Text style={styles.tabText}>Change Password</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.props.onPressTab('privacySettings') }>
              <Text style={styles.tabText}>Privacy Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.props.onPressTab('socialNetworks') }>
              <Text style={styles.tabText}>Social Networks</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.props.onPressTab('friendRequests') }>
              <Text style={styles.tabText}>Friend Requests</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.props.onPressTab('buildingInvites') }>
              <Text style={styles.tabText}>Building Invites</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.props.onPressTab('becomeVerified') }>
              <Text style={styles.tabText}>Become Verified</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );

  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 5,
    width: width - 30,
  },
  mainSection: {
    width: width - 30,
  },
  header: {
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#f2f2f2'
  },
  body: {
    padding: 15,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  tabText: {
    paddingTop: 5,
    paddingBottom: 5,
    color: '#888da8',
    fontWeight: 'bold'
  }
});

export default SettingsTab;