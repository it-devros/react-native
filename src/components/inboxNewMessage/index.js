import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, Picker, KeyboardAvoidingView } from 'react-native';
import Svg,{ Path } from 'react-native-svg';
import { Button } from 'react-native-elements';

import {RichTextEditor, RichTextToolbar} from 'react-native-zss-rich-text-editor';
import {WebViewQuillEditor, WebViewQuillViewer} from 'react-native-webview-quilljs';

const { height, width } = Dimensions.get('window');


class InboxNewMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.changeText = this.changeText.bind(this);
  }

  changeText(val) {
    this.setState({ text: val });
  }

  render () {

    return (
      <View style={styles.container}>
        <View style={styles.mainSection}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Create New Message</Text>
          </View>
          <View style={styles.body}>
            <TextInput style={styles.description} multiline={true} numberOfLines={3} editable = {true} placeholder={'Enter Chat title.'} editable = {true} textAlignVertical={'top'}/>
          </View>
          <View style={styles.footer}>
            <TextInput style={styles.description} multiline={true} numberOfLines={3} editable = {true} placeholder={'Enter User Name.'} editable = {true} textAlignVertical={'top'}/>
            <View style={styles.ckeditorSection}>
              {/* <RichTextToolbar />
              <RichTextEditor
                initialTitleHTML={'Title!!'}
                initialContentHTML={'Hello <b>World</b> <p>this is a new paragraph</p> <p>this is another new paragraph</p>'}
              /> */}
              <WebViewQuillEditor
                ref={component => (this.webViewQuillEditor = component)}
              />
              <WebViewQuillViewer
                ref={component => (this.webViewQuillViewer = component)}
              />
            </View>
            <View style={styles.buttonSection}>
              <Button buttonStyle={styles.sendButton} title={'Send'}/>
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
    borderBottomWidth: 2,
    borderBottomColor: '#f2f2f2'
  },
  footer: {
    padding: 15,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#888da8',
  },
  description: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#f2f2f2',
    borderRadius: 5,
  },
  ckeditorSection: {
    marginTop: 30,
    marginBottom: 15,
  },
  buttonSection: {
    alignItems: 'flex-end'
  },
  sendButton: {
    borderWidth: 1,
    borderColor: '#0074ff',
    borderRadius: 20,
    width: 100,
    height: 40,
    backgroundColor: '#0074ff'
  }
});

export default InboxNewMessage;