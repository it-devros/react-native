import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, Picker, KeyboardAvoidingView } from 'react-native'
import Svg,{ Path } from 'react-native-svg'
import { Button, CheckBox } from 'react-native-elements'


const { height, width } = Dimensions.get('window')


class FriendRequests extends React.Component {
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
            <Text style={styles.headerText}>Friend Requests</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.pannel}>
              <View style={{ flex: 1, alignItems: 'flex-start' }}>
                <Text style={styles.itemText}>From</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={styles.itemText}>Sent</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Text style={styles.itemText}>Options</Text>
              </View>
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
  pannel: {
    padding: 15,
    backgroundColor: '#edf2f6',
    flexDirection: 'row',
  },
  itemText: {
    padding: 5,
    fontSize: 14,
    fontWeight: '500'    
  }
})

export default FriendRequests