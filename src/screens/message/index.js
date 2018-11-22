import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';
import Svg,{ Path } from 'react-native-svg';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as commonActions from '../../actions/common';

import Header from '../header';

const { height, width } = Dimensions.get('window');

const mapDispatchToProps = (dispatch) => {
	return ({
    commonActions: bindActionCreators({...commonActions}, dispatch)
	});
}

const mapStateToProps = (state) => {
	return ({
    authedUser: state.user.authedUser,
    loading: state.common.loading,
    label: state.common.label,
	});
}




class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.onPressHome = this.onPressHome.bind(this);
    this.onPressItem = this.onPressItem.bind(this);
  }

  onPressHome() {
    this.props.navigation.openDrawer();
  }

  onPressItem() {
    this.props.navigation.navigate('PrivateChat');
  }

  render () {

    return (
      <View style={styles.window}>
        <View style={styles.header}>
          <Header opened={false} searchBar={true} onPressHome={this.onPressHome} onPressMenu={this.onPressMenu} />
        </View>
        <View style={styles.container}>
          <ScrollView>
            <TouchableOpacity onPress={this.onPressItem}>
              <View style={styles.item}>
                <View>
                  <Image style={styles.itemImage} source={require('../../../assets/images/temp.jpg')}></Image>
                </View>
                <View style={styles.itemContent}>
                  <Text style={styles.itemName}>Rahul Sharma</Text>
                  <Text style={styles.itemMessage}>Bro ... harry potter forever</Text>
                </View>
                <View style={styles.itemTime}>
                  <Text style={styles.timeText}>10 : 45 AM</Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.item}>
              <View>
                <Image style={styles.itemImage} source={require('../../../assets/images/temp.jpg')}></Image>
                <Image style={styles.statusImage} source={require('../../../assets/icons/active.png')}></Image>
              </View>
              <View style={styles.itemContent}>
                <Text style={[styles.itemName, styles.activeColor]}>Rahul Sharma</Text>
                <Text style={styles.itemMessage}>Bro ... harry potter forever</Text>
              </View>
              <View style={styles.itemTime}>
                <Image style={styles.unreadImage} source={require('../../../assets/icons/active.png')}></Image>
                <Text style={styles.timeText}>10 : 45 AM</Text>
              </View>
            </View>
            <View style={styles.item}>
              <View>
                <Image style={styles.itemImage} source={require('../../../assets/images/temp.jpg')}></Image>
              </View>
              <View style={styles.itemContent}>
                <Text style={styles.itemName}>Rahul Sharma</Text>
                <Text style={styles.itemMessage}>Bro ... harry potter forever</Text>
              </View>
              <View style={styles.itemTime}>
                <Text style={styles.timeText}>10 : 45 AM</Text>
              </View>
            </View>
            <View style={styles.item}>
              <View>
                <Image style={styles.itemImage} source={require('../../../assets/images/temp.jpg')}></Image>
                <Image style={styles.statusImage} source={require('../../../assets/icons/active.png')}></Image>
              </View>
              <View style={styles.itemContent}>
                <Text style={[styles.itemName, styles.activeColor]}>Rahul Sharma</Text>
                <Text style={styles.itemMessage}>Bro ... harry potter forever</Text>
              </View>
              <View style={styles.itemTime}>
                <Image style={styles.unreadImage} source={require('../../../assets/icons/active.png')}></Image>
                <Text style={styles.timeText}>10 : 45 AM</Text>
              </View>
            </View>
            <View style={styles.item}>
              <View>
                <Image style={styles.itemImage} source={require('../../../assets/images/temp.jpg')}></Image>
              </View>
              <View style={styles.itemContent}>
                <Text style={styles.itemName}>Rahul Sharma</Text>
                <Text style={styles.itemMessage}>Bro ... harry potter forever</Text>
              </View>
              <View style={styles.itemTime}>
                <Text style={styles.timeText}>10 : 45 AM</Text>
              </View>
            </View>
            <View style={styles.item}>
              <View>
                <Image style={styles.itemImage} source={require('../../../assets/images/temp.jpg')}></Image>
                <Image style={styles.statusImage} source={require('../../../assets/icons/active.png')}></Image>
              </View>
              <View style={styles.itemContent}>
                <Text style={[styles.itemName, styles.activeColor]}>Rahul Sharma</Text>
                <Text style={styles.itemMessage}>Bro ... harry potter forever</Text>
              </View>
              <View style={styles.itemTime}>
                <Image style={styles.unreadImage} source={require('../../../assets/icons/active.png')}></Image>
                <Text style={styles.timeText}>10 : 45 AM</Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <Image style={styles.plusImage} source={require('../../../assets/icons/plus.png')}></Image>
            <View style={styles.footerItem}>
              <Image style={styles.footerImage} source={require('../../../assets/icons/camera.png')}></Image>
            </View>
            <View style={styles.footerItem}>
              <Image style={styles.footerImage} source={require('../../../assets/icons/call.png')}></Image>
            </View>
          </View>
        </View>
      </View>
    );

  }
}


const styles = StyleSheet.create({
  window: {
    width: width,
    height: height,
    backgroundColor: '#ffffff',
  },
  header: {
    height: 50,
  },
  container: {
    height: height - 80,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  item: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    padding: 15,
    width: width
  } ,
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  itemTime: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  timeText: {
    color: '#9B9B9B',
    fontSize: 14,
    textAlign: 'right'
  },
  itemContent: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 15,
    paddingRight: 15
  },
  itemName: {
    color: '#9B9B9B',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'left'
  },
  itemMessage: {
    color: '#9B9B9B',
    fontSize: 16,
    textAlign: 'left'
  },
  activeColor: {
    color: '#2542E7'
  },
  unreadImage: {
    width: 16,
    height: 16,
    margin: 5,
  },
  statusImage: {
    width: 12,
    height: 12,
    position: 'absolute',
    bottom: 2,
    right: 2
  },
  footer: {
    position: 'absolute',
    width: width,
    bottom: 40,
    left: 0,
  },
  footerContent: {
    backgroundColor: '#FBFCFF',
    borderTopWidth: 1,
    borderTopColor: '#D4D4D4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerImage: {
    width: 30,
    height: 30,
    margin: 15
  },
  footerItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  plusImage: {
    position: 'absolute',
    width: 50,
    height: 50,
    bottom: 35,
    left: width / 2 - 25
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);