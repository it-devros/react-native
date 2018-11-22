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




class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.onPressHome = this.onPressHome.bind(this);
    this.onPressDetail = this.onPressDetail.bind(this);
  }

  onPressHome() {
    this.props.navigation.openDrawer();
  }

  onPressDetail() {
    this.props.navigation.navigate('PostDetail');
  }


  render () {

    return (
      <View style={styles.window}>
        <View style={styles.header}>
          <Header opened={false} searchBar={true} onPressHome={this.onPressHome} onPressMenu={this.onPressMenu} />
        </View>
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.item}>
              <View style={styles.itemWrapper}>
                <View style={styles.itemImage}></View>
                <View style={styles.itemContent}>
                  <Text style={styles.itemText}>Share a post</Text>
                </View>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.itemWrapper}>
                <View style={styles.itemImage}></View>
                <View style={styles.itemContent}>
                  <Text style={styles.itemText}>Building Name</Text>
                  <Text style={styles.itemTimeLabel}>1 hour ago</Text>
                </View>
              </View>
              <Text style={styles.descText}>Check out the latest apartment at our building</Text>
              <View style={styles.imageWrapper}>
                <Image style={styles.buildingImage} source={require('../../../assets/images/temp.jpg')}></Image>
              </View>
              <View style={styles.buttonWrapper}>
                <View style={styles.buttonItem}>
                  <TouchableOpacity onPress={this.onPressDetail}>
                    <View style={[styles.buttonContainer, {backgroundColor: '#D8D8D8', width: width/2 - 30}]}>
                      <Text style={styles.buttonTitle}>View Details</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonItem}>
                  <View style={[styles.buttonContainer, {backgroundColor: '#D3A500', width: width/2 - 30}]}>
                    <Text style={styles.buttonTitle}>Refer a friend</Text>
                  </View>
                </View>
              </View>
              <View style={styles.iconWrapper}>
                <View style={styles.iconItem1}>
                  <Svg viewBox="0 0 36 32" width={ 25 } height={ 25 } style={{ marginRight: 15 }}>
                    <Path fill="#2542E7" d="M23.111 21.333h3.556v3.556h-3.556v-3.556z"></Path>
                    <Path fill="#2542E7" d="M32.512 2.997c-2.014-2.011-4.263-3.006-7.006-3.006-2.62 0-5.545 2.089-7.728 4.304-2.254-2.217-5.086-4.295-7.797-4.295-2.652 0-4.99 0.793-6.937 2.738-4.057 4.043-4.057 10.599 0 14.647 1.157 1.157 12.402 13.657 12.402 13.657 0.64 0.638 1.481 0.958 2.32 0.958s1.678-0.32 2.318-0.958l1.863-2.012-2.523-2.507-1.655 1.787c-2.078-2.311-11.095-12.324-12.213-13.442-1.291-1.285-2-2.994-2-4.811 0-1.813 0.709-3.518 2-4.804 1.177-1.175 2.54-1.698 4.425-1.698 0.464 0 2.215 0.236 5.303 3.273l2.533 2.492 2.492-2.532c2.208-2.242 4.201-3.244 5.196-3.244 1.769 0 3.113 0.588 4.496 1.97 1.289 1.284 1.998 2.99 1.998 4.804 0 1.815-0.709 3.522-1.966 4.775-0.087 0.085-0.098 0.094-1.9 2.041l-0.156 0.167 2.523 2.51 0.24-0.26c0 0 1.742-1.881 1.774-1.911 4.055-4.043 4.055-10.603-0.002-14.644z"></Path>
                  </Svg>
                  <Text style={styles.FavoriteNum}>3</Text>
                  <View style={styles.profileImagesWrapper}>
                    <View>
                      <Image style={styles.profileImage} source={require('../../../assets/images/temp.jpg')}></Image>
                    </View>
                    <View>
                      <Image style={[styles.profileImage, {left: -15}]} source={require('../../../assets/images/temp.jpg')}></Image>
                    </View>
                    <View>
                      <Image style={[styles.profileImage, {left: -30}]} source={require('../../../assets/images/temp.jpg')}></Image>
                    </View>
                  </View>
                </View>
                <View style={styles.iconItem2}>
                  <Svg viewBox="0 0 35 32" width={ 25 } height={ 25 } style={{ marginRight: 5 }}>
                    <Path fill="#c2c5d9" d="M32 0h-28.8c-1.768 0-3.2 1.434-3.2 3.2v16c0 1.766 1.434 3.2 3.2 3.2 0 0 0.6 0 1.6 0v-3.2h-1.6v-16h28.8v19.2c1.766 0 3.2-1.434 3.2-3.2v-16c0-1.766-1.434-3.2-3.2-3.2zM20.8 22.4h1.6v-3.2h-1.6v3.2zM25.6 22.4h3.2v-3.2h-3.2v3.2zM27.2 6.4h-20.8v3.2h20.8v-3.2zM6.4 16h12.8v-3.2h-12.8v3.2z"></Path>
                    <Path fill="#c2c5d9" d="M17.6 19.2l-9.6 6.626v-6.626h-3.2v12.8l12.8-9.6h3.2v-3.2z"></Path>
                  </Svg>
                  <Text style={styles.caption}>0</Text>
                  <Svg viewBox="0 0 40 32" width={ 25 } height={ 25 } style={{ marginRight: 5 }}>
                    <Path fill="#c2c5d9" d="M11.168 16.788v3.046h9.132v3.048h-9.132v3.072l-6.095-4.584 6.095-4.582zM14.216 10.683l-14.216 10.685 14.216 10.688v-6.129h9.132v-9.144h-9.132v-6.1z"></Path>
                    <Path fill="#c2c5d9" d="M15.739 6.095h3.048v3.048h-3.048v-3.048z"></Path>
                    <Path fill="#c2c5d9" d="M35.854 8.25l-10.973-8.25v6.1h-3.048v3.049h6.095v-3.046l6.095 4.582-6.095 4.582v-3.072h-12.18v3.048h9.132v6.129l14.214-10.686z"></Path>
                  </Svg>
                  <Text style={styles.caption}>0</Text>
                </View>
              </View>
            </View>
          </ScrollView>
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
    alignItems: 'center',
    justifyContent: 'center',
  },

  item: {
    width: width,
    borderBottomWidth: 1,
    borderBottomColor: '#979797',
  },
  itemWrapper: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
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
    padding: 15,
  },
  itemText: {
    color: '#4A4A4A',
    fontSize: 18,
    textAlign: 'left'
  },
  itemTimeLabel: {
    color: '#9B9B9B',
    fontSize: 14,
    textAlign: 'left'
  },
  descText: {
    padding: 15,
    color: '#4A4A4A',
    fontSize: 16,
    textAlign: 'left'
  },
  buildingImage: {
    width: width,
    height: width * 3 / 4
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonItem: {
  },
  buttonContainer: {
    margin: 15,
    padding: 10,
    borderRadius: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    fontSize: 16, 
    color: '#ffffff',
    fontWeight: 'normal',
    textAlign: 'center'
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  iconItem1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  iconItem2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  FavoriteNum: {
    fontSize: 14,
    marginRight: 15,
    color: '#9B9B9B',
    fontWeight: 'normal',
    textAlign: 'center'
  },
  profileImagesWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#ffffff',
    // position: 'absolute'
  },
  caption: {
    fontSize: 12,
    marginRight: 5,
    color: '#ccc'
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);