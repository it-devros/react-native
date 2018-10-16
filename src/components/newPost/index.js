import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, Picker, KeyboardAvoidingView } from 'react-native';

const { height, width } = Dimensions.get('window');


class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render () {

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Image style={styles.profileImage} source={require('../../../assets/avatars/default.png')}></Image>
          <TextInput style={styles.description} multiline={true} numberOfLines={5} editable = {true} placeholder={'Share a post , vacancy or new listing'} onChangeText={(text) => this.setState({text})} value={this.state.text} editable = {true} textAlignVertical={'top'}/>
        </View>
        <View style={styles.footer}>
        </View>
      </View>
    );

  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 1,
  },
  content: {
    padding: 15,
    flexDirection: 'row',

  },
  profileImage: {
    width: 70,
    height: 70,
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
    padding: 15,
    flexDirection: 'row',
    width: '100%'
  }
});

export default NewPost;