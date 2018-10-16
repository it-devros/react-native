import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, Picker } from 'react-native';


const { height, width } = Dimensions.get('window');


class NoticeBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render () {

    return (
      <View style={styles.container}>
        <Picker selectedValue={this.state.language} style={styles.select} onValueChange={(itemValue) => this.props.onChange(itemValue)}>
          <Picker.Item label="Notice Board" value="dashboard" />
          <Picker.Item label="Profile" value="profile" />
          <Picker.Item label="Inbox" value="inbox" />
          <Picker.Item label="Settings" value="settings" />
          <Picker.Item label="Albums" value="albums" />
          <Picker.Item label="Buildings" value="buildings" />
          <Picker.Item label="Saved Posts" value="savedPosts" />
        </Picker>
      </View>
    );

  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  select: {
    width: width - 30,
    height: 50,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  }
});

export default NoticeBoard;