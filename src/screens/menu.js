import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button } from 'react-native-elements';
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



class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.onPressMenu = this.onPressMenu.bind(this);
  }

  onPressMenu() {
    this.props.navigation.goBack();
  }

  render () {

    return (
      <View style={styles.window}>
        <View style={styles.header}>
          <Header opened={true} onPressMenu={this.onPressMenu} />
        </View>
        <View style={styles.container}>
          
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu);