import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, Picker, KeyboardAvoidingView } from 'react-native'
import Svg,{ Path } from 'react-native-svg'
import { Button } from 'react-native-elements'
const { height, width } = Dimensions.get('window')


class NewPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  render () {

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Image style={styles.profileImage} source={require('../../../../assets/avatars/default.png')}></Image>
          <TextInput style={styles.description} multiline={true} numberOfLines={5} editable = {true} placeholder={'Share a post , vacancy or new listing'} onChangeText={(text) => this.setState({text})} value={this.state.text} editable = {true} textAlignVertical={'top'}/>
        </View>
        <View style={styles.footer}>
          <Svg viewBox="0 0 43 32" width={25} height={25} style={{ marginRight: 5 }}>
            <Path fill="#c2c5d9" d="M21.333 10.667c-3.927 0-7.111 3.182-7.111 7.111 0 3.927 3.184 7.111 7.111 7.111s7.111-3.184 7.111-7.111c0-3.929-3.184-7.111-7.111-7.111zM21.333 21.337c-1.963 0-3.556-1.593-3.556-3.556s1.593-3.556 3.556-3.556 3.556 1.593 3.556 3.556-1.593 3.556-3.556 3.556zM35.556 3.556h-3.556c0-1.964-1.593-3.556-3.556-3.556h-14.222c-1.963 0-3.556 1.591-3.556 3.556h-3.556c-3.927 0-7.111 3.184-7.111 7.111v14.222c0 3.929 3.184 7.111 7.111 7.111 0 0 6.924 0 15.89 0h0.11v-3.556h-16c-1.963 0-3.556-1.593-3.556-3.556v-14.222c0-1.963 1.593-3.556 3.556-3.556h7.111v-3.556h14.222v3.556h7.111c1.963 0 3.556 1.593 3.556 3.556v14.222c0 1.963-1.593 3.556-3.556 3.556h-1.778v3.556c1.122 0 1.778 0 1.778 0 3.927 0 7.111-3.182 7.111-7.111v-14.222c0-3.927-3.184-7.111-7.111-7.111zM26.667 32h3.556v-3.556h-3.556v3.556z"></Path>
          </Svg>
          <Svg viewBox="0 0 28 32" width={25} height={25} style={{ marginRight: 5 }}>
            <Path fill="#c2c5d9" d="M24.71 10.664l-15.614-9.574c-1.146-0.698-2.312-1.048-3.478-1.048-2.792 0-5.618 2.188-5.618 6.368v5.59h4c0-4.784 0-5.592 0-5.592 0-1.498 0.628-2.368 1.618-2.368 0.408 0 0.876 0.148 1.388 0.458l15.63 9.584c1.758 1.066 1.848 2.812 0.088 3.878l-15.718 9.58c-0.512 0.314-0.982 0.46-1.39 0.46-0.988 0-1.616-0.868-1.616-2.364 0 0 0-0.6 0-1.586 0-0.012 0-0.036 0-0.048h-4v1.634c0 4.178 2.826 6.364 5.616 6.364 1.166 0 2.334-0.35 3.47-1.042l15.72-9.58c2.026-1.23 3.194-3.164 3.194-5.302 0.002-2.172-1.198-4.144-3.29-5.412z"></Path>
            <Path fill="#c2c5d9" d="M0 16h4v4h-4v-4z"></Path>
          </Svg>
          <Svg viewBox="0 0 25 32" width={25} height={25} style={{ marginRight: 5 }}>
            <Path fill="#c2c5d9" d="M12.444 7.111c-2.946 0-5.333 2.389-5.333 5.333 0 2.946 2.388 5.333 5.333 5.333s5.333-2.386 5.333-5.333c0-2.944-2.388-5.333-5.333-5.333zM12.444 14.222c-0.981 0-1.778-0.796-1.778-1.778s0.796-1.778 1.778-1.778 1.778 0.796 1.778 1.778-0.796 1.778-1.778 1.778z"></Path>
            <Path fill="#c2c5d9" d="M12.444 0c-4.823 0-8.996 2.891-11.061 7.111h4.194c1.632-2.151 4.087-3.556 6.868-3.556 4.901 0 8.889 4.277 8.889 9.534 0 7.237-6.46 13.865-8.876 15.204-1.838-1.054-6.148-5.36-8.011-10.516h-3.73c2.263 7.817 9.374 14.222 11.728 14.222 2.811 0 12.444-8.951 12.444-18.91 0-7.228-5.573-13.090-12.444-13.090z"></Path>
            <Path fill="#c2c5d9" d="M0 10.667h3.556v3.556h-3.556v-3.556z"></Path>
          </Svg>
          <Svg viewBox="0 0 32 32" width={ 25 } height={ 25 } style={{ marginRight: 5 }}>
            <Path fill="#c2c5d9" d="M16 0c-8.837 0-16 7.16-16 15.989 0 7.166 4.715 13.227 11.213 15.262v-3.39c-4.69-1.899-8-6.49-8-11.859 0-7.070 5.731-12.802 12.8-12.802s12.8 5.731 12.8 12.802c0 5.37-3.312 9.96-8 11.859v3.378c6.485-2.040 11.187-8.094 11.187-15.25 0-8.829-7.165-15.989-16-15.989zM11.211 12.8h-3.2v3.202h3.2v-3.202zM20.813 12.8v3.202h3.2v-3.202h-3.2zM11.198 19.365c0 1.675 2.146 3.032 4.794 3.032s4.794-1.357 4.794-3.032v-0.16h-9.587v0.16zM14.413 32.002h3.2v-3.2h-3.2v3.2z"></Path>
          </Svg>
          <Svg viewBox="0 0 36 32" width={ 25 } height={ 25 } style={{ marginRight: 5 }}>
            <Path fill="#c2c5d9" d="M23.111 21.333h3.556v3.556h-3.556v-3.556z"></Path>
            <Path fill="#c2c5d9" d="M32.512 2.997c-2.014-2.011-4.263-3.006-7.006-3.006-2.62 0-5.545 2.089-7.728 4.304-2.254-2.217-5.086-4.295-7.797-4.295-2.652 0-4.99 0.793-6.937 2.738-4.057 4.043-4.057 10.599 0 14.647 1.157 1.157 12.402 13.657 12.402 13.657 0.64 0.638 1.481 0.958 2.32 0.958s1.678-0.32 2.318-0.958l1.863-2.012-2.523-2.507-1.655 1.787c-2.078-2.311-11.095-12.324-12.213-13.442-1.291-1.285-2-2.994-2-4.811 0-1.813 0.709-3.518 2-4.804 1.177-1.175 2.54-1.698 4.425-1.698 0.464 0 2.215 0.236 5.303 3.273l2.533 2.492 2.492-2.532c2.208-2.242 4.201-3.244 5.196-3.244 1.769 0 3.113 0.588 4.496 1.97 1.289 1.284 1.998 2.99 1.998 4.804 0 1.815-0.709 3.522-1.966 4.775-0.087 0.085-0.098 0.094-1.9 2.041l-0.156 0.167 2.523 2.51 0.24-0.26c0 0 1.742-1.881 1.774-1.911 4.055-4.043 4.055-10.603-0.002-14.644z"></Path>
          </Svg>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Button buttonStyle={styles.postButton} title={'Post'}/>
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
  },
  content: {
    padding: 5,
    flexDirection: 'row',

  },
  profileImage: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 50
  },
  description: {
    flex: 1,
    marginLeft: 15,
  },
  footer: {
    borderTopWidth: 2,
    borderTopColor: '#f2f2f2',
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  postButton: {
    borderWidth: 1,
    borderColor: '#0074ff',
    borderRadius: 30,
    width: 100,
    height: 35,
    backgroundColor: '#0074ff'
  }
})

export default NewPost