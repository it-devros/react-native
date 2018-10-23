import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button } from 'react-native-elements';
import Svg,{ Path } from 'react-native-svg';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from './header';

const { height, width } = Dimensions.get('window');


const mapDispatchToProps = (dispatch) => {
	return ({
	});
}

const mapStateToProps = (state) => {
	return ({
    authedUser: state.user.authedUser,
    loading: state.common.loading,
    label: state.common.label,
	});
}



class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.onPressItem = this.onPressItem.bind(this);
  }

  onPressItem(val) {
    if (val == 'collapse') {
      this.props.navigation.closeDrawer();
    }
    if (val == 'profile') {
      this.props.navigation.navigate('Profile');
    }
    if (val == 'dashboard') {
      this.props.navigation.navigate('Dashboard');
    }
    if (val == 'inbox') {
      this.props.navigation.navigate('Inbox');
    }
    if (val == 'settings') {
      this.props.navigation.navigate('Settings');
    }
    if (val == 'albums') {
      this.props.navigation.navigate('Albums');
    }
    if (val == 'buildings') {
      this.props.navigation.navigate('Buildings');
    }
    if (val == 'savedPosts') {
      this.props.navigation.navigate('SavedPosts');
    }
  }


  render () {

    return (
      <View styles={styles.window}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.onPressItem('dashboard')}>
            <Image style={styles.logoImage} source={require('../../assets/icons/logo.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onPressItem('dashboard')}>
            <Text style={styles.title}>ASSET</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>

          <TouchableOpacity onPress={() => this.onPressItem('collapse')}>
            <View style={styles.item}>
              <Svg viewBox="0 0 32 32" width={25} height={25}>
                <Path fill="#9a9fbf" d="M14.222 17.778h3.556v-3.556h-3.556v3.556zM31.084 3.429l-2.514-2.514-10.057 10.057 2.514 2.514 10.057-10.057zM0.916 28.571l2.514 2.514 10.057-10.055-2.516-2.514-10.055 10.055zM18.514 21.029l10.057 10.055 2.514-2.514-10.057-10.055-2.514 2.514zM0.916 3.431l10.057 10.055 2.516-2.514-10.059-10.057-2.514 2.516z"></Path>
              </Svg>
              <Text style={styles.itemText}>Collapse Menu</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.onPressItem('dashboard')}>
            <View style={styles.item}>
              <Svg viewBox="0 0 29 32" width={20} height={20}>
                <Path fill="#9a9fbf" d="M6.4 25.602v-3.202h9.6v3.202h-9.6zM6.4 16h16v3.2h-16v-3.2zM22.4 25.602v6.398h-22.4v-28.8c0-1.766 1.434-3.2 3.2-3.2h22.4c1.766 0 3.2 1.434 3.2 3.2v9.6h-25.6v16.002h16v-6.402h9.6v3.202h-6.4zM25.6 9.6v-6.4h-22.4v6.4h22.4zM8 8h-3.2v-3.2h3.2v3.2zM12.8 8h-3.2v-3.2h3.2v3.2zM17.6 8h-3.2v-3.2h3.2v3.2zM25.6 16h3.2v3.2h-3.2v-3.2z"></Path>
              </Svg>
              <Text style={styles.itemText}>Notice Board</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.onPressItem('profile')}>
            <View style={styles.item}>
              <Svg viewBox="0 0 32 32" width={20} height={20}>
                <Path fill="#9a9fbf" d="M16 0c-8.837 0-16 7.16-16 15.989 0 7.166 4.715 13.227 11.213 15.262v-3.39c-4.69-1.899-8-6.49-8-11.859 0-7.070 5.731-12.802 12.8-12.802s12.8 5.731 12.8 12.802c0 5.37-3.312 9.96-8 11.859v3.378c6.485-2.040 11.187-8.094 11.187-15.25 0-8.829-7.165-15.989-16-15.989zM11.211 12.8h-3.2v3.202h3.2v-3.202zM20.813 12.8v3.202h3.2v-3.202h-3.2zM11.198 19.365c0 1.675 2.146 3.032 4.794 3.032s4.794-1.357 4.794-3.032v-0.16h-9.587v0.16zM14.413 32.002h3.2v-3.2h-3.2v3.2z"></Path>
              </Svg>
              <Text style={styles.itemText}>Profile</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.onPressItem('inbox')}>
            <View style={styles.item}>
              <Svg viewBox="0 0 40 32" width={20} height={20}>
                <Path fill="#9a9fbf" d="M24.381 7.621h-21.333c-1.378 0-3.048 1.606-3.048 3.046v13.716c0 1.443 1.67 3.048 3.048 3.048v4.57l12.19-4.568v-3.051l-9.143 3.051v-3.051h-3.048v-13.714h21.333v16.763c1.378 0 3.048-1.605 3.048-3.048v-13.716c0-1.44-1.67-3.046-3.048-3.046zM18.286 27.432h3.048v-3.048h-3.048v3.048zM6.095 16.763h15.238v-3.046h-15.238v3.046zM6.095 21.336h9.143v-3.048h-9.143v3.048zM15.238 3.051h24.381c0-1.443-1.67-3.049-3.048-3.049h-21.333c-1.378 0-3.048 1.606-3.048 3.049v1.527h3.048v-1.527zM36.571 16.763l-4.571-0.002v3.051l-3.048-1.016v3.301l6.095 2.284v-4.568c0.779 0 1.524 0 1.524 0 1.378 0 3.048-1.606 3.048-3.049v-4.571h-3.048v4.571zM36.571 9.144h3.048v-3.048h-3.048v3.048z"></Path>
              </Svg>
              <Text style={styles.itemText}>Inbox</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.onPressItem('settings')}>
            <View style={styles.item}>
              <Svg viewBox="0 0 32 32" width={20} height={20}>
                <Path fill="#9a9fbf" d="M7.111 3.881v-3.881h-3.556v3.883c-2.068 0.734-3.556 2.686-3.556 5.006s1.488 4.272 3.556 5.006v10.994h3.556v-10.996c2.068-0.734 3.556-2.686 3.556-5.004s-1.488-4.272-3.556-5.008zM7.111 10.667h-3.556v-3.556h3.556v3.556zM28.444 3.881v-3.881h-3.556v3.883c-2.066 0.734-3.556 2.686-3.556 5.006s1.49 4.27 3.556 5.006v18.105h3.556v-18.107c2.066-0.734 3.556-2.686 3.556-5.004s-1.49-4.272-3.556-5.008zM28.444 10.667h-3.556v-3.556h3.556v3.556zM17.778 18.105v-18.105h-3.556v18.105c-2.068 0.734-3.556 2.686-3.556 5.006 0 2.318 1.488 4.27 3.556 5.006v3.883h3.556v-3.883c2.066-0.736 3.556-2.69 3.556-5.006 0-2.32-1.49-4.272-3.556-5.006zM17.778 24.887h-3.556v-3.554h3.556v3.554zM3.556 32h3.556v-3.556h-3.556v3.556z"></Path>
              </Svg>
              <Text style={styles.itemText}>Settings</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.onPressItem('albums')}>
            <View style={styles.item}>
              <Svg viewBox="0 0 32 32" width={20} height={20}>
                <Path fill="#9a9fbf" d="M17.778 0v14.222h14.222v-14.222h-14.222zM28.444 10.667h-7.111v-7.111h7.111v7.111zM0 32h14.222v-14.222h-14.222v14.222zM3.556 21.333h7.111v7.111h-7.111v-7.111zM28.444 28.444h-7.111v-7.111h3.556v-3.556h-7.111v14.222h14.222v-7.111h-3.556v3.556zM0 14.222h14.222v-14.222h-14.222v14.222zM3.556 3.556h7.111v7.111h-7.111v-7.111zM28.444 21.333h3.556v-3.556h-3.556v3.556z"></Path>
              </Svg>
              <Text style={styles.itemText}>Albums</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => this.onPressItem('buildings')}>
            <View style={styles.item}>
              <Svg viewBox="0 0 32 32" width={20} height={20}>
                <Path fill="#9a9fbf" d="M24.029 27.192h3.2v3.2h-3.2v-3.2z"></Path>
                <Path fill="#9a9fbf" d="M31.88 11.91c-0.275-0.826-0.984-1.43-1.837-1.562l-8.309-1.28-3.611-7.763c-0.379-0.816-1.194-1.336-2.090-1.336-0.893 0-1.707 0.522-2.086 1.336l-3.613 7.763-8.309 1.28c-0.854 0.131-1.563 0.736-1.838 1.562-0.275 0.827-0.067 1.739 0.536 2.36l6.088 6.298-1.413 8.731c-0.142 0.88 0.226 1.762 0.947 2.277 0.397 0.28 0.862 0.424 1.328 0.424 0.384 0 0.766-0.098 1.115-0.291l7.243-4.037 4.768 2.656v-3.662l-4.768-2.658-7.184 4.005 1.378-8.517-1.114-1.154-4.922-5.090 8.323-1.282 0.723-1.552 2.798-6.014 3.52 7.566 8.326 1.283-6.038 6.243 0.733 4.53h3.242l-0.56-3.458 6.091-6.298c0.6-0.622 0.806-1.534 0.531-2.362z"></Path>
              </Svg>
              <Text style={styles.itemText}>Buildings</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => this.onPressItem('savedPosts')}>
            <View style={styles.item}>
              <Svg viewBox="0 0 29 32" width={20} height={20}>
                <Path fill="#9a9fbf" d="M25.6 0h-22.4c-1.766 0-3.2 1.434-3.2 3.2v28.8h22.4v-6.4h6.4v-3.2h-9.6v6.4h-16v-25.6h22.4v9.6h3.2v-9.6c0-1.766-1.434-3.2-3.2-3.2zM22.4 6.4h-16v3.2h16v-3.2zM22.4 12.798h-16v3.202h16v-3.202zM6.4 22.4h9.6v-3.2h-9.6v3.2zM25.6 19.2h3.2v-3.2h-3.2v3.2z"></Path>
              </Svg>
              <Text style={styles.itemText}>Saved Posts</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => this.onPressItem('collapse')}>
            <View style={styles.item}>
              <Svg viewBox="0 0 35 32" width={20} height={20}>
                <Path fill="#9a9fbf" d="M32 22.4h-28.8v-19.2h32c0-1.766-1.434-3.2-3.2-3.2h-28.8c-1.766 0-3.2 1.432-3.2 3.2v19.2c0 1.766 1.434 3.202 3.2 3.202h9.6v3.198h-4.8v3.2h19.2v-3.2h-4.8v-3.198h9.6c1.766 0 3.2-1.434 3.2-3.202v-9.598h-3.2v9.598zM19.2 28.8h-3.2v-3.198h3.2v3.198zM32 9.6h3.2v-3.198h-3.2v3.198zM12.8 14.402v-3.2h-3.2v3.2h3.2zM19.2 14.402v-3.2h-3.2v3.2h3.2zM25.6 14.402v-3.2h-3.2v3.2h3.2z"></Path>
              </Svg>
              <Text style={styles.itemText}>Funds</Text>
            </View>
          </TouchableOpacity>
          
        </View>
      </View>
    );

  }
}


const styles = StyleSheet.create({
  window: {
    backgroundColor: '#ffffff',
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f7f7f7',
    padding: 10,
  },
  logoImage: {
    width: 30,
    height: 30
  },
  title: {
    paddingLeft: 30,
    fontSize: 16,
    fontWeight: 'bold'
  },
  container: {
    height: height - 80,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  item: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  itemText: {
    paddingLeft: 30,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#9a9fbf'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);