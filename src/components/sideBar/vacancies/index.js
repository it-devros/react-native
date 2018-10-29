import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, ScrollView, KeyboardAvoidingView } from 'react-native';
import Svg,{ Path } from 'react-native-svg';

const { height, width } = Dimensions.get('window');


class Vacancies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {

    return (
      <View style={styles.container}>
        <View style={styles.mainSection}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Recent vacancies</Text>
            <Svg viewBox="0 0 128 32" width={20} height={20}>
              <Path d="M112-0.008c-8.84 0-16 7.16-16 16 0 8.832 7.16 15.992 16 15.992s16-7.16 16-15.992c0-8.84-7.16-16-16-16zM64-0.008c-8.84 0-16 7.16-16 16 0 8.832 7.16 15.992 16 15.992s16-7.16 16-15.992c0-8.84-7.16-16-16-16zM16-0.008c-8.832 0-16 7.16-16 16s7.168 15.992 16 15.992 16-7.16 16-15.992c0-8.84-7.16-16-16-16z"></Path>
            </Svg>
          </View>
          <View style={styles.body}>
            <View style={[styles.item, styles.borderBottom]}>
              <Image style={styles.profileImage} source={require('../../../../assets/avatars/default.png')}></Image>
              <View style={styles.textSection}>
                <Text style={styles.title}>Atelier</Text>
                <Text style={styles.address}>635 West 42nd Street, New York, NY, 10036</Text>
                <Text style={styles.url}>2 new vacancies</Text>
              </View>
              <Svg id="olymp-star-icon" viewBox="0 0 32 32" width={30} height={30}>
                <Path d="M24.029 27.192h3.2v3.2h-3.2v-3.2z"></Path>
                <Path d="M31.88 11.91c-0.275-0.826-0.984-1.43-1.837-1.562l-8.309-1.28-3.611-7.763c-0.379-0.816-1.194-1.336-2.090-1.336-0.893 0-1.707 0.522-2.086 1.336l-3.613 7.763-8.309 1.28c-0.854 0.131-1.563 0.736-1.838 1.562-0.275 0.827-0.067 1.739 0.536 2.36l6.088 6.298-1.413 8.731c-0.142 0.88 0.226 1.762 0.947 2.277 0.397 0.28 0.862 0.424 1.328 0.424 0.384 0 0.766-0.098 1.115-0.291l7.243-4.037 4.768 2.656v-3.662l-4.768-2.658-7.184 4.005 1.378-8.517-1.114-1.154-4.922-5.090 8.323-1.282 0.723-1.552 2.798-6.014 3.52 7.566 8.326 1.283-6.038 6.243 0.733 4.53h3.242l-0.56-3.458 6.091-6.298c0.6-0.622 0.806-1.534 0.531-2.362z"></Path>
              </Svg>
            </View>
            <View style={[styles.item, styles.borderBottom]}>
              <Image style={styles.profileImage} source={require('../../../../assets/avatars/default.png')}></Image>
              <View style={styles.textSection}>
                <Text style={styles.title}>Atelier</Text>
                <Text style={styles.address}>635 West 42nd Street, New York, NY, 10036</Text>
                <Text style={styles.url}>2 new vacancies</Text>
              </View>
              <Svg id="olymp-star-icon" viewBox="0 0 32 32" width={30} height={30}>
                <Path d="M24.029 27.192h3.2v3.2h-3.2v-3.2z"></Path>
                <Path d="M31.88 11.91c-0.275-0.826-0.984-1.43-1.837-1.562l-8.309-1.28-3.611-7.763c-0.379-0.816-1.194-1.336-2.090-1.336-0.893 0-1.707 0.522-2.086 1.336l-3.613 7.763-8.309 1.28c-0.854 0.131-1.563 0.736-1.838 1.562-0.275 0.827-0.067 1.739 0.536 2.36l6.088 6.298-1.413 8.731c-0.142 0.88 0.226 1.762 0.947 2.277 0.397 0.28 0.862 0.424 1.328 0.424 0.384 0 0.766-0.098 1.115-0.291l7.243-4.037 4.768 2.656v-3.662l-4.768-2.658-7.184 4.005 1.378-8.517-1.114-1.154-4.922-5.090 8.323-1.282 0.723-1.552 2.798-6.014 3.52 7.566 8.326 1.283-6.038 6.243 0.733 4.53h3.242l-0.56-3.458 6.091-6.298c0.6-0.622 0.806-1.534 0.531-2.362z"></Path>
              </Svg>
            </View>
            <View style={styles.item}>
              <Image style={styles.profileImage} source={require('../../../../assets/avatars/default.png')}></Image>
              <View style={styles.textSection}>
                <Text style={styles.title}>Atelier</Text>
                <Text style={styles.address}>635 West 42nd Street, New York, NY, 10036</Text>
                <Text style={styles.url}>2 new vacancies</Text>
              </View>
              <Svg id="olymp-star-icon" viewBox="0 0 32 32" width={30} height={30}>
                <Path d="M24.029 27.192h3.2v3.2h-3.2v-3.2z"></Path>
                <Path d="M31.88 11.91c-0.275-0.826-0.984-1.43-1.837-1.562l-8.309-1.28-3.611-7.763c-0.379-0.816-1.194-1.336-2.090-1.336-0.893 0-1.707 0.522-2.086 1.336l-3.613 7.763-8.309 1.28c-0.854 0.131-1.563 0.736-1.838 1.562-0.275 0.827-0.067 1.739 0.536 2.36l6.088 6.298-1.413 8.731c-0.142 0.88 0.226 1.762 0.947 2.277 0.397 0.28 0.862 0.424 1.328 0.424 0.384 0 0.766-0.098 1.115-0.291l7.243-4.037 4.768 2.656v-3.662l-4.768-2.658-7.184 4.005 1.378-8.517-1.114-1.154-4.922-5.090 8.323-1.282 0.723-1.552 2.798-6.014 3.52 7.566 8.326 1.283-6.038 6.243 0.733 4.53h3.242l-0.56-3.458 6.091-6.298c0.6-0.622 0.806-1.534 0.531-2.362z"></Path>
              </Svg>
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.allButton}>
              <Text style={styles.btnText}>See All</Text>
            </View>
          </View>
        </View>
      </View>
    );

  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainSection: {
    borderWidth: 2,
    borderColor: '#e9eef6',
    borderRadius: 5,
    width: width - 30
  },
  header: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#e9eef6'
  },
  body: {
  },
  footer: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
  },
  item: {
    padding: 15,
    flexDirection: 'row',

  },
  borderBottom: {
    borderBottomWidth: 2,
    borderBottomColor: '#e9eef6',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  textSection: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold'
  },
  address: {
    color: '#8b90ab'
  },
  url: {
    fontWeight: 'bold',
    color: '#0074ff'
  },
  allButton: {
    width: 200,
    height: 40,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#0074ff',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  btnText: {
    color: '#0074ff',
    textAlign: 'center'
  }
});

export default Vacancies;