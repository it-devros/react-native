import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, Picker, KeyboardAvoidingView } from 'react-native'
import Svg,{ Path } from 'react-native-svg'
import { Button, CheckBox } from 'react-native-elements'


const { height, width } = Dimensions.get('window')


class PrivacySettings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  render () {

    return (
      <View style={styles.container}>
        <View style={styles.mainSection}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Privacy Settings</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.inputSection}>
              <Text style={styles.inputLabel}>Who can view your profile?</Text>
              <Picker>
                <Picker.Item label="Everyone" value="everyone" />
                <Picker.Item label="Friends Only" value="friends" />
              </Picker>
            </View>
            <View style={styles.inputSection}>
              <Text style={styles.inputLabel}>Who can view your posts?</Text>
              <Picker>
                <Picker.Item label="Everyone" value="everyone" />
                <Picker.Item label="Friends Only" value="friends" />
              </Picker>
            </View>
            <View style={styles.inputSection}>
              <Text style={styles.inputLabel}>Who can post on your profile?</Text>
              <Picker>
                <Picker.Item label="Everyone" value="everyone" />
                <Picker.Item label="Friends Only" value="friends" />
              </Picker>
            </View>
            <View style={styles.inputSection}>
              <Text style={styles.inputLabel}>Who can tag you in posts?</Text>
              <Picker>
                <Picker.Item label="Everyone" value="everyone" />
                <Picker.Item label="Friends Only" value="friends" />
              </Picker>
            </View>
            <View style={styles.inputSection}>
              <Text style={styles.inputLabel}>Allow friend requests?</Text>
              <Picker>
                <Picker.Item label="Yes" value="yes" />
                <Picker.Item label="No" value="no" />
              </Picker>
            </View>
            <View style={styles.inputSection}>
              <Text style={styles.inputLabel}>Allow friend requests?</Text>
              <Picker>
                <Picker.Item label="Yes" value="yes" />
                <Picker.Item label="No" value="no" />
              </Picker>
            </View>
            <View style={styles.inputSection}>
              <Text style={styles.inputLabel}>Allow building invites?</Text>
              <Picker>
                <Picker.Item label="Yes" value="yes" />
                <Picker.Item label="No" value="no" />
              </Picker>
            </View>
            <View style={styles.inputSection}>
              <Text style={styles.inputLabel}>Who can send you a chat message?</Text>
              <Picker>
                <Picker.Item label="Everyone" value="everyone" />
                <Picker.Item label="Friends Only" value="friends" />
              </Picker>
            </View>
            <Button buttonStyle={styles.updateButton} title={'Update Settings'}/>
          </View>
        </View>
      </View>
    )

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
  inputSection: {
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#f2f2f2',
    borderRadius: 5,
    padding: 15,
    paddingTop: 10,
    paddingBottom: 5,
  },
  inputLabel: {
    fontSize: 14,
    color: '#888da8'
  },
  inputField: {
    fontSize: 16,
    margin: 0,
    padding: 0
  },
  updateButton: {
    borderWidth: 1,
    borderColor: '#0074ff',
    borderRadius: 30,
    backgroundColor: '#0074ff'
  }
})

export default PrivacySettings