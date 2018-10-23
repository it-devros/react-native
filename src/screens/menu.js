import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button } from 'react-native-elements';
import Svg,{ Path } from 'react-native-svg';
import IconBadge from 'react-native-icon-badge';
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
          <View style={styles.item}>
            <View style={styles.searchBox}>
              <Svg viewBox="0 0 34 32" width={20} height={20}>
                <Path fill="#0074ff" d="M20.809 3.57c-4.76-4.76-12.478-4.76-17.239 0s-4.76 12.48 0 17.239c4.76 4.76 12.48 4.76 17.239 0 4.76-4.759 4.76-12.478 0-17.239zM18.654 18.654c-3.57 3.57-9.361 3.57-12.93 0-3.57-3.57-3.57-9.359 0-12.93s9.361-3.57 12.93 0c3.57 3.569 3.57 9.359 0 12.93z"></Path>
                <Path fill="#0074ff" d="M24.022 21.907l2.154-2.156 2.157 2.155-2.154 2.156-2.157-2.155z"></Path>
                <Path fill="#0074ff" d="M28.34 28.364c-0.596 0.597-1.559 0.597-2.155 0l-6.464-6.464-0.834-0.852 4.3-4.3-1.312-1.314-6.466 6.466 8.62 8.619c1.783 1.783 4.683 1.783 6.464 0 1.783-1.781 1.783-4.681 0-6.464l-2.155 2.155c0.596 0.596 0.594 1.562 0 2.155z"></Path>
              </Svg>
              <TextInput style={styles.searchInput} value={''} placeholder={'Search tenants, prospects, neighborhoods... ...'} />
            </View>
          </View>
          <View style={[styles.item, styles.borderBottomBox]}>
            <View style={styles.itemBox}>
              <Image style={styles.itemImage} source={require('../../assets/icons/buildings.png')}></Image>
              <View style={styles.itemTextSection}>
                <Text style={{ color: '#0074ff' }}>Vacancies</Text>
                <View style={[styles.iconBadge, { backgroundColor: '#002e54' }]}>
                  <Text style={{ color: '#ffffff' }}>5</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.item, styles.borderBottomBox]}>
            <View style={styles.itemBox}>
              <Image style={styles.itemImage} source={require('../../assets/icons/refferal.png')}></Image>
              <View style={styles.itemTextSection}>
                <Text style={{ color: '#0074ff' }}>Refferals</Text>
                <View style={[styles.iconBadge, { backgroundColor: '#7ed321' }]}>
                  <Text style={{ color: '#ffffff' }}>1</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.item, styles.borderBottomBox]}>
            <View style={styles.itemBox}>
              <Image style={styles.itemImage} source={require('../../assets/icons/appointments.png')}></Image>
              <Text style={styles.itemText}>Appointments</Text>
            </View>
          </View>
          <View style={[styles.item, styles.borderBottomBox]}>
            <View style={styles.itemBox}>
              <Image style={styles.itemImage} source={require('../../assets/icons/message.png')}></Image>
              <Text style={styles.itemText}>Messages</Text>
            </View>
          </View>
          <View style={[styles.item, styles.borderBottomBox]}>
            <View style={styles.itemBox}>
              <IconBadge
                MainElement={
                  <Image style={{ width: 30, height: 30, margin: 6 }} source={require('../../assets/icons/notification.png')}></Image>
                }
                BadgeElement={
                  <Text style={{color:'#FFFFFF'}}>5</Text>
                }
                IconBadgeStyle={
                  {width:20,
                  height:20,
                  backgroundColor: '#FF00EE'}
                }
                Hidden={this.state.BadgeCount==0}
                />
            </View>
          </View>
          <View style={[styles.item, styles.borderBottomBox]}>
            <View style={styles.itemBox}>
              <Text style={styles.logOutText}>Logout</Text>
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
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  item: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchBox: {
    width: width - 30,
    padding: 10,
    backgroundColor: '#f7f7f7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchInput: {
    flex: 1,
    padding: 0,
    marginLeft: 10
  },
  borderBottomBox: {
    borderBottomWidth: 2,
    borderBottomColor: '#ddd'
  },
  itemBox: {
    width: width - 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  itemImage: {
    width: 20,
    height: 20,
    margin: 5
  },
  itemTextSection: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'row',
  },
  itemText: {
    flex: 1,
    color: '#0074ff',
    marginLeft: 10,
  },
  logOutText: {
    flex: 1,
    color: '#0074ff',
  },
  iconBadge: {
    position: 'absolute',
    top: 1,
    right: 1,
    width: 25,
    height: 25,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);