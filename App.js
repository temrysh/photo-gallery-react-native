import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Platform, StatusBar, StyleSheet, View, AsyncStorage } from 'react-native'
import { AppLoading } from 'expo'
import AppNavigator from './navigation/AppNavigator'
import { setGallery } from './state/actions'
import { store } from './state/store'

export default class App extends Component {
  state = {
    isLoadingComplete: false
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <Provider store={store}>
            <AppNavigator />
          </Provider>
        </View>
      )
    }
  }

  _loadResourcesAsync = async () => {
    try {
      const storageGallery = JSON.parse(await AsyncStorage.getItem('@gallery'))
      if (storageGallery) return store.dispatch(setGallery(storageGallery))

      const apiGallery = await fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json())
      await AsyncStorage.setItem('@gallery', JSON.stringify(apiGallery))
      store.dispatch(setGallery(apiGallery))
    } catch (error) {
      this._handleLoadingError(error)
    }
  }

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error)
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
