import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, ScrollView, KeyboardAvoidingView } from 'react-native'
import { Button } from 'react-native-elements'
import Svg,{ Path } from 'react-native-svg'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as commonActions from '../../actions/common'

const { height, width } = Dimensions.get('window')

const mapDispatchToProps = (dispatch) => {
  return ({
    commonActions: bindActionCreators({...commonActions}, dispatch)
  })
}

const mapStateToProps = (state) => {
  return ({
    authedUser: state.user.authedUser,
    loading: state.common.loading,
    label: state.common.label,
  })
}




class PrivateChat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }



  render () {

    return (
      <View style={styles.window}>

        <View style={styles.item}>
          <View style={styles.itemWrapper}>
            <Image style={styles.pathImage} source={require('../../../assets/icons/Path.png')}></Image>
            <Image style={styles.itemImage} source={require('../../../assets/images/temp.jpg')}></Image>
            <View style={styles.itemContent}>
              <Text style={styles.itemText}>Rahul Sharma</Text>
              <Text style={styles.itemSubLabel}>online</Text>
            </View>
            <Image style={styles.menuImage} source={require('../../../assets/icons/menu_dot.png')}></Image>
          </View>
        </View>


        <View style={styles.container}>
          <ScrollView>
            <View style={styles.chatItemO}>
              <View style={styles.chatContentO}>
                <Text style={styles.chatTextO}>Bhai, did you watch my comment? I love you very much. Can you see my romance?</Text>
              </View>
              <View style={styles.dateContentO}>
                <Text style={styles.dateTextO}>10 : 45 AM</Text>
              </View>
            </View>

            <View style={styles.chatItemM}>
              <View style={styles.dateContentM}>
                <Text style={styles.dateTextM}>10 : 45 AM</Text>
              </View>
              <View style={styles.chatContentM}>
                <Text style={styles.chatTextM}>Bhai, did you watch my comment? I love you very much. Can you see my romance?</Text>
              </View>
            </View>

            <View style={styles.chatItemO}>
              <View style={styles.chatContentO}>
                <Text style={styles.chatTextO}>Bhai, did you watch my comment? I love you very much. Can you see my romance?</Text>
              </View>
              <View style={styles.dateContentO}>
                <Text style={styles.dateTextO}>10 : 45 AM</Text>
              </View>
            </View>

            <View style={styles.chatItemM}>
              <View style={styles.dateContentM}>
                <Text style={styles.dateTextM}>10 : 45 AM</Text>
              </View>
              <View style={styles.chatContentM}>
                <Text style={styles.chatTextM}>Bhai, did you watch my comment? I love you very much. Can you see my romance?</Text>
              </View>
            </View>

            <View style={styles.chatItemO}>
              <View style={styles.chatContentO}>
                <Text style={styles.chatTextO}>Bhai, did you watch my comment? I love you very much. Can you see my romance?</Text>
              </View>
              <View style={styles.dateContentO}>
                <Text style={styles.dateTextO}>10 : 45 AM</Text>
              </View>
            </View>

            <View style={styles.chatItemM}>
              <View style={styles.dateContentM}>
                <Text style={styles.dateTextM}>10 : 45 AM</Text>
              </View>
              <View style={styles.chatContentM}>
                <Text style={styles.chatTextM}>Bhai, did you watch my comment? I love you very much. Can you see my romance?</Text>
              </View>
            </View>

          </ScrollView>
        </View>
      
        <View style={styles.footer}>
          <Image style={styles.emogiImage} source={require('../../../assets/icons/emogi.png')}></Image>
          <TextInput style={styles.msgInput} placeholder={"Great View from your place"} />
          <Image style={styles.cursorImage} source={require('../../../assets/icons/cursor.png')}></Image>
          <Image style={styles.plusImage} source={require('../../../assets/icons/plus_msg.png')}></Image>
          <Image style={styles.sendImage} source={require('../../../assets/icons/send.png')}></Image>
        </View>
      
      </View>
    )

  }
}


const styles = StyleSheet.create({
  window: {
    width: width,
    height: height,
    backgroundColor: '#ffffff',
  },
  header: {
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingBottom: 30,
    
  },
  footer: {
    backgroundColor: '#F6F7F8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginBottom: 30
  },


  
  item: {
    width: width,
    borderBottomWidth: 1,
    borderBottomColor: '#979797',
  },
  itemWrapper: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pathImage: {
    width: 25,
    height: 25,
  },
  menuImage: {
    width: 10,
    height: 28,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#D8D8D8'
  },
  itemContent: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 5,
  },
  itemText: {
    color: '#2542E7',
    fontSize: 18,
    textAlign: 'left',
    fontWeight: 'bold'
  },
  itemSubLabel: {
    color: '#9B9B9B',
    fontSize: 14,
    textAlign: 'left'
  },
  

  chatItemO: {
    width: width,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 15,
  },
  chatContentO: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  chatTextO: {
    color: '#585858',
    fontSize: 14,
    textAlign: 'left'
  },
  dateContentO: {
    padding: 15,
    paddingBottom: 0,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  dateTextO: {
    color: '#9B9B9B',
    fontSize: 14,
    textAlign: 'right'
  },


  chatItemM: {
    width: width,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 15,
  },
  chatContentM: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#2542E7',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  chatTextM: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'left'
  },
  dateContentM: {
    padding: 15,
    paddingBottom: 0,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  dateTextM: {
    color: '#9B9B9B',
    fontSize: 14,
    textAlign: 'right'
  },
  emogiImage: {
    width: 30,
    height: 30,
    marginLeft: 5,
    marginRight: 5
  },
  cursorImage: {
    width: 2,
    height: 30,
    marginLeft: 5,
    marginRight: 5
  },
  plusImage: {
    width: 30,
    height: 30,
    marginLeft: 5,
    marginRight: 5
  },
  sendImage: {
    width: 30,
    height: 30,
    marginLeft: 5,
    marginRight: 5
  },
  msgInput: {
    flex: 1,
    padding: 5,
    borderWidth: 0
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PrivateChat)