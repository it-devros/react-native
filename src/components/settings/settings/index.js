import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, Picker, KeyboardAvoidingView } from 'react-native';
import Svg,{ Path } from 'react-native-svg';
import { Button } from 'react-native-elements';


const { height, width } = Dimensions.get('window');


class SettingsWindow extends React.Component {
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
            <Text style={styles.headerText}>Settings</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.block}>
              <Text style={styles.blockTitle}>Your Information</Text>
              <View style={styles.item}>
                <Text style={styles.label}>Username</Text>
                <View style={{ paddingLeft: 15 }}>
                  <Text style={styles.value}>gbssoft2991</Text>
                </View>
              </View>
              <View style={styles.item}>
                <Text style={styles.label}>Avatar</Text>
                <View style={{ paddingLeft: 15 }}>
                  <Image style={styles.profileImage} source={require('../../../../assets/avatars/default.png')}></Image>
                </View>
              </View>
            </View>
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
    borderBottomWidth: 2,
    borderBottomColor: '#f2f2f2'
  },
  body: {
    padding: 15,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  block: {

  },
  blockTitle: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  item: {
    marginTop: 15,
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#888da8'
  },
  value: {
    fontSize: 14,
    fontWeight: "400",
  },
  profileImage: {
    width: 120,
    height: 120
  }
});

export default SettingsWindow;