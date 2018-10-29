import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, Picker, KeyboardAvoidingView } from 'react-native';
import Svg,{ Path } from 'react-native-svg';
import { Button } from 'react-native-elements';

const { height, width } = Dimensions.get('window');


class Building extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render () {

    return (
      <View style={styles.container}>
        <View style={styles.iamgeSection}>
          <ImageBackground style={styles.backgroundImage} source={require('../../../../assets/images/mine.jpg')}>
            <Image style={styles.profileImage} source={require('../../../../assets/avatars/default.png')}></Image>
          </ImageBackground>
        </View>
        <View style={styles.textSection}>
          <Text style={styles.title}>Atelier</Text>
          <View style={styles.inlineText}>
            <Text style={styles.label}>Views : </Text>
            <Text style={styles.value}>241</Text>
          </View>
          <View style={styles.inlineText}>
            <Text style={styles.label}>Members : </Text>
            <Text style={styles.value}>1</Text>
          </View>
        </View>
      </View>
    );

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
  iamgeSection: {
    width: width - 30,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 5,
  },
  backgroundImage: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: '#edf2f6',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileImage: {
    position: 'absolute',
    top: 100 - 60,
    left: (width - 30) / 2 - 60,
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 5,
    borderColor: '#ffffff',
    marginBottom: 15,
  },
  textSection: {
    padding: 15,
    paddingTop: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    color: '#ff5e3a',
    marginBottom: 15,
  },
  inlineText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  label: {
    color: '#888da8'
  },
  value: {
    fontWeight: 'bold'
  }
});

export default Building;