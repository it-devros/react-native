import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Button } from 'react-native-elements'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const { height, width } = Dimensions.get('window')


class Header extends React.Component {
  constructor(props) {
    super(props)
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

        {
          this.props.searchBar == true ?
            <View style={styles.columnCenter}>
              <View style={styles.searchBox}>
                <Image style={styles.searchImage} source={require('../../assets/icons/search.png')}></Image>
                <TextInput style={styles.searchInput} value={''} />
              </View>
            </View>
          :
            <View style={styles.columnCenter}></View>
        }

        <View style={styles.column2}>
          {
            this.props.searchBar == true ?
              <Image style={styles.logoImage} source={require('../../assets/icons/chat.png')}></Image>
            :
              <TouchableOpacity onPress={this.props.onPressMenu}>
                {
                  this.props.opened == false ?
                    <Image style={styles.logoImage} source={require('../../assets/icons/menu.png')}></Image>
                  :
                    <Image style={styles.closeImage} source={require('../../assets/icons/close.png')}></Image>
                }
              </TouchableOpacity>
          }
        </View>
      </View>
    )

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
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  columnCenter: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  column2: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  logoImage: {
    width: 30,
    height: 30
  },
  searchImage: {
    width: 20,
    height: 20
  },
  closeImage: {
    width: 20,
    height: 20
  },
  searchBox: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "#D8D8D8",
    borderWidth: 2,
    borderRadius: 20,
  },
  searchInput: {
    flex: 1,
    padding: 0,
    marginLeft: 10,
    fontSize: 20,
  },
})

export default Header