import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, Picker, KeyboardAvoidingView } from 'react-native'
import Svg,{ Path } from 'react-native-svg'
import { Button } from 'react-native-elements'



const { height, width } = Dimensions.get('window')


class ProfileImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
    
  }

  render () {

    return (
      <View style={styles.container}>
        <ImageBackground style={styles.backgroundImage} source={require('../../../../assets/images/default_header.png')}>
          <Image style={styles.profileImage} source={require('../../../../assets/avatars/default.png')}></Image>
          <Text style={styles.name}>Tester Tester</Text>
        </ImageBackground>
        {/* <View style={styles.flagSection}>
          <Image style={styles.flagImage} source={require('../../../assets/icons/flag.png')}></Image>
        </View> */}
        <View style={styles.tabSection}>
          <View style={styles.tabItem}>
            <Text style={styles.tabText}>Profile</Text>
          </View>          
          <View style={styles.tabItem}>
            <Text style={styles.tabText}>Friends</Text>
          </View>
          <View style={styles.tabItem}>
            <Text style={styles.tabText}>Albums</Text>
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
  backgroundImage: {
    width: '100%',
    height: width - 30,
    borderWidth: 1,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 5,
    borderColor: '#ffffff',
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  flagSection: {
    width: 70,
    height: 70,
    backgroundColor: '#0074ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    position: 'absolute',
    right: 20,
    bottom: 0
  },
  flagImage: {
    width: 35,
    height: 35
  },
  tabSection: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 30,
    paddingBottom: 30,
    flexDirection: 'row',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  }
})

export default ProfileImage