import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, Picker, KeyboardAvoidingView } from 'react-native'
import Svg,{ Path } from 'react-native-svg'
import { Button, CheckBox } from 'react-native-elements'


const { height, width } = Dimensions.get('window')


class SettingsWindow extends React.Component {
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
            <Text style={styles.headerText}>Settings</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.block}>
              <Text style={styles.blockTitle}>Your Information</Text>
              <View style={styles.item}>
                <Text style={styles.label}>Username</Text>
                <View style={{ paddingLeft: 15 }}>
                  <Text style={styles.value}>gbssoft2991</Text>
                </View>
              </View>
              <View style={styles.item}>
                <Text style={styles.label}>Avatar</Text>
                <View style={{ paddingLeft: 15 }}>
                  <Image style={styles.profileImage} source={require('../../../../assets/avatars/default.png')}></Image>
                  <View style={styles.inputSection}>
                    <Text style={styles.inputLabel}>Avatar</Text>
                    <Button title={'Choose File'}/>
                  </View>
                </View>
              </View>
              <View style={styles.item}>
                <Text style={styles.label}>Profile Header Background</Text>
                <View style={{ paddingLeft: 15 }}>
                  <Image style={styles.profileheaderImage} source={require('../../../../assets/images/default_header.png')}></Image>
                  <View style={styles.inputSection}>
                    <Text style={styles.inputLabel}>Profile Header Background</Text>
                    <Button title={'Choose File'}/>
                  </View>
                </View>
              </View>
              <View style={styles.inputSection}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput style={styles.inputField} value={'gbssoft2991@gmail.com'} placeholder={""}/>
              </View>
              <View style={styles.inputSection}>
                <Text style={styles.inputLabel}>First Name</Text>
                <TextInput style={styles.inputField} value={'tester'} placeholder={""}/>
              </View>
              <View style={styles.inputSection}>
                <Text style={styles.inputLabel}>Last Name</Text>
                <TextInput style={styles.inputField} value={'tester'} placeholder={""}/>
              </View>
              <TextInput style={styles.description} multiline={true} numberOfLines={5} editable = {true} placeholder={'About me'} onChangeText={(text) => this.setState({text})} value={this.state.text} editable = {true} textAlignVertical={'top'}/>
              <View style={styles.inputSection}>
                <Text style={styles.inputLabel}>Where are you from?</Text>
                <TextInput style={styles.inputField} value={''} placeholder={"Enter your location."}/>
              </View>
              <View style={styles.inputSection}>
                <Text style={styles.inputLabel}>Where do you currently live?</Text>
                <TextInput style={styles.inputField} value={''} placeholder={"Enter your location."}/>
              </View>
              <View style={styles.inputSection}>
                <Text style={styles.inputLabel}>Relationship Status</Text>
                <Picker>
                  <Picker.Item label="None" value="none" />
                  <Picker.Item label="Single" value="single" />
                  <Picker.Item label="In a Relationship" value="relationship" />
                  <Picker.Item label="Married" value="married" />
                </Picker>
              </View>
            </View>

            <View style={styles.block}>
              <Text style={styles.blockTitle}>Address Details</Text>
              <View style={styles.inputSection}>
                <Text style={styles.inputLabel}>Address Line1</Text>
                <TextInput style={styles.inputField} value={''} placeholder={""}/>
              </View>
              <View style={styles.inputSection}>
                <Text style={styles.inputLabel}>Address Line2</Text>
                <TextInput style={styles.inputField} value={''} placeholder={""}/>
              </View>
              <View style={styles.inputSection}>
                <Text style={styles.inputLabel}>City</Text>
                <TextInput style={styles.inputField} value={''} placeholder={""}/>
              </View>
              <View style={styles.inputSection}>
                <Text style={styles.inputLabel}>State/Region/Province</Text>
                <TextInput style={styles.inputField} value={''} placeholder={""}/>
              </View>
              <View style={styles.inputSection}>
                <Text style={styles.inputLabel}>Zip/Postal Code</Text>
                <TextInput style={styles.inputField} value={''} placeholder={""}/>
              </View>
              <View style={styles.inputSection}>
                <Text style={styles.inputLabel}>Country</Text>
                <TextInput style={styles.inputField} value={''} placeholder={""}/>
              </View>
            </View>

            <View style={styles.block}>
              <Text style={styles.blockTitle}>Site Settings</Text>
              <View style={styles.item}>
                <CheckBox title='Enable Email Notification' checked={true} />
              </View>
              <View style={styles.item}>
                <CheckBox title='Enable Profile Comments' checked={true} />
              </View>
              <Button buttonStyle={styles.updateButton} title={'Update Settings'}/>
            </View>

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
  block: {

  },
  blockTitle: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  item: {
    marginTop: 15,
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#888da8'
  },
  value: {
    fontSize: 14,
    fontWeight: "400",
  },
  profileImage: {
    width: 120,
    height: 120
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
  profileheaderImage: {
    height: 120,
    width: '100%'
  },
  inputField: {
    fontSize: 16,
    margin: 0,
    padding: 0
  },
  description: {
    borderWidth: 2,
    borderColor: '#f2f2f2',
    borderRadius: 5,
    marginBottom: 15,
  },
  updateButton: {
    borderWidth: 1,
    borderColor: '#0074ff',
    borderRadius: 30,
    backgroundColor: '#0074ff'
  }
})

export default SettingsWindow