import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';
import Svg,{ Path } from 'react-native-svg';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as commonActions from '../actions/common';

import Header from './header';

import Events from '../components/sideBar/events';
import Vacancies from '../components/sideBar/vacancies';
import Appointments from '../components/sideBar/appointments';


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




class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.onPressMenu = this.onPressMenu.bind(this);
    this.onPressHome = this.onPressHome.bind(this);
  }

  onPressMenu() {
    this.props.navigation.navigate('Menu');
  }

  onPressHome() {
    this.props.navigation.openDrawer();
  }

  render () {

    return (
      <View style={styles.window}>
        <View style={styles.header}>
          <Header opened={false} onPressHome={this.onPressHome} onPressMenu={this.onPressMenu} />
        </View>
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.section}>
              <Events />
            </View>
            <View style={styles.section}>
              <Vacancies />
            </View>
            <View style={styles.section}>
              <Appointments />
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
  section: {
    margin: 15,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);