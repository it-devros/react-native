import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, Picker, KeyboardAvoidingView } from 'react-native';
import Svg,{ Path } from 'react-native-svg';
import { Button } from 'react-native-elements';


const { height, width } = Dimensions.get('window');


class Error extends React.Component {
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
          <View style={styles.header}>
            <Text style={styles.headerText}>Error</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.bodyText}>Notice : Invalid Building!</Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Go Back</Text>
          </View>
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
    width: width - 30,
  },
  header: {
    padding: 15,
  },
  body: {
    padding: 15,
  },
  footer: {
    padding: 15,
  },
  headerText: {
    fontSize: 16,
    color: '#888da8',
    fontWeight: 'bold'
  },
  bodyText: {
    color: '#888da8',
  },
  footerText: {
    paddingLeft: 15,
    fontWeight: 'bold'
  }
});

export default Error;