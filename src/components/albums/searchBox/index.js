import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, Picker, KeyboardAvoidingView } from 'react-native'
import Svg,{ Path } from 'react-native-svg'
import { Button } from 'react-native-elements'

const { height, width } = Dimensions.get('window')


class SearchBox extends React.Component {
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
          <Text style={styles.label}>tester's Albums</Text>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TextInput style={styles.inputField} value={''} placeholder={"Search Friends..."}/>
            <View style={styles.goButton}>
              <Svg viewBox="0 0 34 32" width={20} height={20} style={{ color: '#ffffff' }}>
                <Path d="M20.809 3.57c-4.76-4.76-12.478-4.76-17.239 0s-4.76 12.48 0 17.239c4.76 4.76 12.48 4.76 17.239 0 4.76-4.759 4.76-12.478 0-17.239zM18.654 18.654c-3.57 3.57-9.361 3.57-12.93 0-3.57-3.57-3.57-9.359 0-12.93s9.361-3.57 12.93 0c3.57 3.569 3.57 9.359 0 12.93z"></Path>
                <Path d="M24.022 21.907l2.154-2.156 2.157 2.155-2.154 2.156-2.157-2.155z"></Path>
                <Path d="M28.34 28.364c-0.596 0.597-1.559 0.597-2.155 0l-6.464-6.464-0.834-0.852 4.3-4.3-1.312-1.314-6.466 6.466 8.62 8.619c1.783 1.783 4.683 1.783 6.464 0 1.783-1.781 1.783-4.681 0-6.464l-2.155 2.155c0.596 0.596 0.594 1.562 0 2.155z"></Path>
              </Svg>
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
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    padding: 5,
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

export default SearchBox