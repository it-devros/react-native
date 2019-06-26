import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, Picker, KeyboardAvoidingView } from 'react-native'
import Svg,{ Path } from 'react-native-svg'
import { Button } from 'react-native-elements'


const { height, width } = Dimensions.get('window')


class InboxMessage extends React.Component {
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
            <Text style={styles.headerText}>Messages</Text>
          </View>
          <View style={styles.body}>
            <Button buttonStyle={styles.composeButton} title={'Compose'}/>
          </View>
          <View style={styles.body}>
            <View style={{ flexDirection: 'row' }}>
              <TextInput style={styles.inputField} value={''} placeholder={"Search Friends..."}/>
              <View style={styles.goButton}>
                <Text style={{ color: '#ffffff' }}>Go</Text>
              </View>
            </View>
          </View>
          <View style={styles.footer}>
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
    borderBottomWidth: 2,
    borderBottomColor: '#f2f2f2'
  },
  footer: {
    padding: 15,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  composeButton: {
    borderWidth: 1,
    borderColor: '#0074ff',
    borderRadius: 20,
    width: 150,
    height: 40,
    backgroundColor: '#0074ff'
  },
  goButton: {
    borderWidth: 1,
    borderColor: '#d7d9e5',
    borderRadius: 5,
    width: 40,
    height: 50,
    backgroundColor: '#d7d9e5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputField: {
    flex: 1,
    paddingLeft: 15,
    borderWidth: 2,
    borderColor: '#f2f2f2',
    borderRadius: 5,
    height: 50,
  }
})

export default InboxMessage