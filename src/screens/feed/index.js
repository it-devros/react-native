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
  }

  onPressHome() {
    this.props.navigation.openDrawer();
  }


  render () {

    return (
      <View style={styles.window}>
        <View style={styles.header}>
          <Header opened={false} searchBar={true} onPressHome={this.onPressHome} onPressMenu={this.onPressMenu} />
        </View>
        <View style={styles.container}>
          <ScrollView>
            
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
    backgroundColor: '#edf2f6',
  },
  header: {
    height: 50,
  },
  container: {
    height: height - 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);