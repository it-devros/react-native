import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const { height, width } = Dimensions.get('window');


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
          <TouchableOpacity onPress={this.props.onPressHome}>
            <Image style={styles.logoImage} source={require('../../assets/icons/logo.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.column2}>
          <TouchableOpacity onPress={this.props.onPressMenu}>
            {
              this.props.opened == false ?
                <Image style={styles.logoImage} source={require('../../assets/icons/menu.png')}></Image>
              :
                <Image style={styles.closeImage} source={require('../../assets/icons/close.png')}></Image>
            }
          </TouchableOpacity>
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
    backgroundColor: '#f7f7f7',
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
    width: 30,
    height: 30
  },
  closeImage: {
    width: 20,
    height: 20
  }
});

export default Header;