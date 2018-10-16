import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
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



class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.goToLogin = this.goToLogin.bind(this);
  }

  goToLogin() {
    this.props.navigation.navigate('Login');
  }

  render () {

    return (
      <ImageBackground style={styles.backImage} source={require('../../../assets/images/background.png')}>
        <ScrollView style={{ backgroundColor: 'rgba(255, 94, 58, 0.75)' }}>
          <View style={styles.container}>
            <View style={styles.logoSection}>
              <Image style={styles.logoImage} source={require('../../../assets/icons/logo.png')}></Image>
              <View style={styles.logoTitle}>
                <Text style={styles.logoheader}>ASSETS</Text>
                <Text style={styles.logoDescription}>Community-Powered Property</Text>
              </View>
            </View>
            <View style={styles.headerSection}>
              <Text style={styles.bigTitle}>Community Powered Property</Text>
              <Text style={styles.description}>Asset is a Real Estate Marketplace monetizing P2P referrals</Text>
              <Button onPress={this.goToLogin} buttonStyle={styles.signUpButton} title={'Log In Now!'}/>
            </View>
            <View style={styles.bodySection}>
              <View style={styles.pannel}>
                <View style={styles.headerPannel}>
                  <Text style={styles.pannelHeaderText}>Register To Asset</Text>
                </View>
                <View style={styles.bodyPannel}>
                  <View style={styles.InputElement}>
                    <TextInput style={styles.inputField} value={''} placeholder={"Email"}/>
                  </View>
                  <View style={styles.InputElement}>
                    <TextInput style={styles.inputField} value={''} placeholder={"Username"}/>
                  </View>
                  <View style={styles.InputElement}>
                    <TextInput style={styles.inputField} value={''} placeholder={"Password"}/>
                  </View>
                  <View style={styles.InputElement}>
                    <TextInput style={styles.inputField} value={''} placeholder={"Confirm Password"}/>
                  </View>
                  <View style={styles.InputElement}>
                    <TextInput style={styles.inputField} value={''} placeholder={"First Name"}/>
                  </View>
                  <View style={styles.InputElement}>
                    <TextInput style={styles.inputField} value={''} placeholder={"Last Name"}/>
                  </View>
                  <Button buttonStyle={styles.loginButton} title={'Register'}/>
                  <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity>
                      <View style={styles.footerFBButton}>
                        <Image style={styles.footerImage} source={require('../../../assets/icons/facebook.png')}></Image>
                        <Text style={{ color: '#ffffff' }}> | Facebook</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View style={styles.footerGButton}>
                        <Image style={styles.footerImage} source={require('../../../assets/icons/google.png')}></Image>
                        <Text style={{ color: '#ffffff' }}> | Google</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );

  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30
  },
  backImage: {
    width: '100%',
    height: '100%'
  },
  logoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    padding: 15
  },
  logoImage: {
    width: 50,
    height: 50
  },
  logoTitle: {
    marginLeft: 15
  },
  logoheader: {
    fontSize: 18,
    color: '#ffffff'
  },
  logoDescription: {
    fontSize: 14,
    color: '#ffffff'
  },
  headerSection: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    padding: 15
  },
  bigTitle: {
    fontSize: 28,
    color: '#ffffff',
    marginBottom: 30,
  },
  description: {
    fontSize: 14,
    color: '#ffffff',
    marginBottom: 30
  },
  signUpButton: {
    borderWidth: 3,
    borderColor: '#ffffff',
    borderRadius: 5,
    backgroundColor: 'rgba(255, 94, 58, 0.01)'
  },
  bodySection: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    padding: 15,
  },
  pannel: {
    width: width - 30,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 5,
  },
  headerPannel: {
    padding: 20,
    borderWidth: 2,
    borderColor: '#f2f2f2'
  },
  pannelHeaderText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  bodyPannel: {
    padding: 20,
  },
  InputElement: {
    padding: 15,
    borderColor: '#f2f2f2',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 15
  },
  caption: {
    fontSize: 14,
    color: 'gray'
  },
  inputField: {
    fontSize: 16,
    margin: 0,
    padding: 0
  },
  fogotCaption: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 15,
  },
  loginButton: {
    borderWidth: 1,
    borderColor: '#0074ff',
    borderRadius: 5,
    backgroundColor: '#0074ff',
    marginBottom: 15,
  },
  footerCaption: {
    fontSize: 14,
    color: 'gray',
  },
  footerFBButton: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#3859a2',
    backgroundColor: '#3859a2',
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  footerGButton: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#e33500',
    backgroundColor: '#e33500',
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  footerImage: {
    width: 16,
    height: 16
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);