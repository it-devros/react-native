import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, Picker, KeyboardAvoidingView } from 'react-native';
import Svg,{ Path } from 'react-native-svg';
import { Button } from 'react-native-elements';


const { height, width } = Dimensions.get('window');


class ProfileTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render () {

    return (
      <View style={styles.container}>
        <View style={styles.mainSection}>
          <Text style={styles.title}>{ this.props.title }</Text>
        </View>
      </View>
    );

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
    padding: 15,
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default ProfileTab;