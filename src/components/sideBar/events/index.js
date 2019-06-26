import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, ScrollView, KeyboardAvoidingView } from 'react-native'
import Svg,{ Path } from 'react-native-svg'

const { height, width } = Dimensions.get('window')


class Events extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render () {

    return (
      <View style={styles.container}>
        <View style={styles.mainSection}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Your Building's Upcoming Event </Text>
            <Svg viewBox="0 0 128 32" width={20} height={20}>
              <Path d="M112-0.008c-8.84 0-16 7.16-16 16 0 8.832 7.16 15.992 16 15.992s16-7.16 16-15.992c0-8.84-7.16-16-16-16zM64-0.008c-8.84 0-16 7.16-16 16 0 8.832 7.16 15.992 16 15.992s16-7.16 16-15.992c0-8.84-7.16-16-16-16zM16-0.008c-8.832 0-16 7.16-16 16s7.168 15.992 16 15.992 16-7.16 16-15.992c0-8.84-7.16-16-16-16z"></Path>
            </Svg>
          </View>
          <View style={styles.body}>
            <Text style={styles.bodyText}>No Event Found</Text>
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
  },
  mainSection: {
    borderWidth: 2,
    borderColor: '#e9eef6',
    borderRadius: 5,
    width: width - 30
  },
  header: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#e9eef6'
  },
  body: {
    padding: 15,
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
  },
  bodyText: {
    color: '#888da8'
  }
})

export default Events