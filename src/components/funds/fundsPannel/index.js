import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, Picker, KeyboardAvoidingView } from 'react-native'
import Svg,{ Path } from 'react-native-svg'
import { Button } from 'react-native-elements'


const { height, width } = Dimensions.get('window')


class FundsPannel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  render () {

    return (
      <View style={styles.container}>
        <View style={styles.mainSection}>
          <View style={styles.header}>
            <Image style={styles.bankImage} source={require('../../../../assets/icons/bank.png')}></Image>
            <Text style={styles.headerText}>Funds</Text>
            <View style={styles.buttonSection}>
              <View style={styles.paymentLogBtn}>
                <Text style={styles.btnLabel}>Payment Log</Text>
              </View>
              <View style={styles.spendCreditBtn}>
                <Text style={styles.btnLabel}>Credits</Text>
              </View>
            </View>
          </View>
          <View style={styles.body}>
            <Text style={styles.bodyText}>Below you can purchase funds for your account. You can then use these funds to pay for subscriptions to this site. Please check below how much funds you would like to add to your Account Balance.</Text>
            <View style={styles.creditSection}>
              <Text style={styles.bodyText}>Credits: </Text>
              <Text style={[styles.bodyText, { fontWeight: 'bold' }]}>0.00</Text>
            </View>
            <View style={styles.purchaseSection}>
              <Image style={styles.paypalImage} source={require('../../../../assets/icons/paypal.png')}></Image>
              <Picker style={styles.select}>
                <Picker.Item label="$5.00 - 5 Credits" value="5.00" />
                <Picker.Item label="$10.00 - 10 Credits" value="10.00" />
                <Picker.Item label="$30.00 - 30 Credits" value="30.00" />
                <Picker.Item label="$100.00 - 100 Credits" value="100.00" />
              </Picker>
              <View style={styles.purchaseBtn}>
                <Text style={styles.btnLabel}>Purchase</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )

  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 5,
    width: width - 30,
  },
  mainSection: {
    width: width - 30,
  },
  header: {
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#f2f2f2',
    flexDirection: 'row',
    alignItems: 'center'
  },
  body: {
    padding: 15,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  bankImage: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  buttonSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  paymentLogBtn: {
    flex: 1,
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#5bc0de',
    backgroundColor: '#5bc0de'
  },
  spendCreditBtn: {
    flex: 1,
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#5cb85c',
    backgroundColor: '#5cb85c'
  },
  btnLabel: {
    fontSize: 12,
    textAlign: 'center',
    color: '#ffffff'
  },
  bodyText: {
    color: '#888da8'
  },
  creditSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  purchaseSection: {
    borderTopWidth: 2,
    borderTopColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paypalImage: {
    margin: 10,
    width: 211,
    height: 15
  },
  select: {
    margin: 10,
    width: 200,
    backgroundColor: '#f2f2f2',
  },
  purchaseBtn: {
    flex: 1,
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#337ab7',
    backgroundColor: '#337ab7'
  },
})

export default FundsPannel