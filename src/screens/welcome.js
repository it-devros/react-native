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



class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.onPressLoginBtn = this.onPressLoginBtn.bind(this);
  }

  onPressLoginBtn() {
    this.props.navigation.navigate('AuthStack');
  }

  render () {

    return (
      <ImageBackground style={styles.backImage} source={require('../../assets/images/background.png')}>
        <View style={styles.container}>
          <View style={styles.logoSection}>
            <Image style={styles.logoImage} source={require('../../assets/icons/logo.png')}></Image>
            <View style={styles.logoTitle}>
              <Text style={styles.logoheader}>ASSETS</Text>
              <Text style={styles.logoDescription}>Community-Powered Property</Text>
            </View>
          </View>
          <View style={styles.headerSection}>
            <Text style={styles.bigTitle}>Community Powered Property</Text>
            <Text style={styles.description}>Asset is a Real Estate Marketplace monetizing P2P referrals</Text>
            <Button onPress={this.onPressLoginBtn} buttonStyle={styles.signUpButton} title={'Log In Now!'}/>
          </View>
        </View>
      </ImageBackground>
    );

  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 94, 58, 0.75)',
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);