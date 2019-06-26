import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, Picker, KeyboardAvoidingView } from 'react-native'
import Svg,{ Path } from 'react-native-svg'
import { Button } from 'react-native-elements'


const { height, width } = Dimensions.get('window')


class StatusBar extends React.Component {
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
          <View style={styles.item}>
            <Text style={styles.value}>11</Text>
            <Text style={styles.label}>Profile Views</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.value}>1</Text>
            <Text style={styles.label}>Posts</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.onlineStatus}>Online</Text>
            <Text style={styles.label}>Status</Text>
          </View>
        </View>
      </View>
    )

  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 5,
    width: width - 30,
  },
  mainSection: {
    padding: 15,
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    fontSize: 14,
    color: '#888da8'
  },
  value: {
    fontSize: 14,
    color: '#515365',
    fontWeight: 'bold'
  },
  onlineStatus: {
    fontSize: 14,
    color: '#36c90f'
  }
})

export default StatusBar