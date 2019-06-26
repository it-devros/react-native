import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import Storage from 'react-native-storage'
import { AsyncStorage } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import userReducer from './src/reducers'

import Router from './Router'

const store = createStore(userReducer, compose(applyMiddleware(thunk)))

var storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,
  sync : {
  }
})
global.storage = storage




export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // SplashScreen.hide()
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

