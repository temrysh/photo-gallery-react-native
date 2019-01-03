import React from 'react'
import { createStackNavigator } from 'react-navigation'

import AlbumListScreen from '../screens/AlbumListScreen'
import PhotoListScreen from '../screens/PhotoListScreen'
import PhotoDetailsScreen from '../screens/PhotoDetailsScreen'

export default createStackNavigator({
  AlbumList: AlbumListScreen,
  PhotoList: PhotoListScreen,
  PhotoDetails: PhotoDetailsScreen
})
