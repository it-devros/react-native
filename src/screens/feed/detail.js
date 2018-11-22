import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';
import Svg,{ Path } from 'react-native-svg';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as commonActions from '../../actions/common';

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




class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render () {

    return (
      <View style={styles.window}>
        <View style={styles.header}>
          <View style={styles.item}>
            <View style={styles.itemWrapper}>
              <Image style={styles.pathImage} source={require('../../../assets/icons/Path.png')}></Image>
              <View style={styles.itemImage}></View>
              <View style={styles.itemContent}>
                <Text style={styles.itemText}>Share a post</Text>
                <Text style={styles.itemSubLabel}>666 Greenwich Street, New York, NY, 10014</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.descText}>Check out the latest apartment at our building</Text>
            <View style={styles.imageWrapper}>
              <Image style={styles.buildingImage} source={require('../../../assets/images/temp.jpg')}></Image>
            </View>
            <View style={styles.detailWrapper}>
              <Text style={styles.label}>Title:</Text>
              <Text style={styles.value}>Studio loft with 2 Bathrooms are new available !</Text>
              <Text style={styles.label}>Description:</Text>
              <Text style={styles.value}>Renovated River view upper Level</Text>
              <Text style={styles.label}>Price $(Gross/Month):</Text>
              <Text style={styles.value}>$5250</Text>
              <Text style={styles.label}>Bedrooms:</Text>
              <Text style={styles.value}>1</Text>
              <Text style={styles.label}>Atrributes:</Text>
              <Text style={styles.value}>Cats and Dogs Allowed, Roof Deck, Doorman</Text>
            </View>
            <View style={styles.buttonWrapper}>
              <View style={[styles.buttonContainer, {backgroundColor: '#D3A500', width: width/2 - 30}]}>
                <Text style={styles.buttonTitle}>Refer a friend</Text>
              </View>
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
  },
  container: {
    height: height - 80,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingBottom: 30,
  },


  
  item: {
    width: width,
    borderBottomWidth: 1,
    borderBottomColor: '#979797',
  },
  itemWrapper: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pathImage: {
    width: 25,
    height: 25,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#D8D8D8'
  },
  itemContent: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 15,
  },
  itemText: {
    color: '#4A4A4A',
    fontSize: 18,
    textAlign: 'left'
  },
  itemSubLabel: {
    color: '#9B9B9B',
    fontSize: 14,
    textAlign: 'left'
  },
  descText: {
    padding: 15,
    color: '#4A4A4A',
    fontSize: 16,
    textAlign: 'left'
  },
  buildingImage: {
    width: width,
    height: width * 3 / 4
  },
  detailWrapper: {
    padding: 15,
    paddingBottom: 0,
  },
  label: {
    color: '#000000',
    fontSize: 16,
    textAlign: 'left',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  value: {
    color: '#000000',
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 15,
  },
  buttonWrapper: {
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  buttonContainer: {
    margin: 15,
    padding: 10,
    borderRadius: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    fontSize: 16, 
    color: '#ffffff',
    fontWeight: 'normal',
    textAlign: 'center'
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);