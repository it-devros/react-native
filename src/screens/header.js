import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


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



class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {

    return (
      <View style={styles.container}>
        <View style={styles.column1}>
          <Image style={styles.logoImage} source={require('../../assets/icons/logo.png')}></Image>
        </View>
        <View style={styles.column2}>
          <Image style={styles.logoImage} source={require('../../assets/icons/menu.png')}></Image>
        </View>
      </View>
    );

  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#ffffff',
  },
  column1: {
    flex: 1,
    padding: 10,
    alignItems: 'flex-start',
  },
  column2: {
    flex: 1,
    padding: 10,
    alignItems: 'flex-end',
  },
  logoImage: {
    width: 40,
    height: 40
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);