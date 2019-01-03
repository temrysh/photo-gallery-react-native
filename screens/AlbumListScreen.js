import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native'

import { setCurrentAlbum } from '../state/actions'

class AlbumList extends React.Component {
  static navigationOptions = {
    title: 'Albums'
  }

  onAlbumPress = id => {
    this.props.onAlbumPress(id)
    this.props.navigation.navigate('PhotoList')
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.props.albums.map(albumId => (
          <TouchableOpacity style={styles.albumBtn} key={albumId} onPress={() => this.onAlbumPress(albumId)}>
            <Text>Album: {albumId}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  albumBtn: {
    height: 60,
    justifyContent: 'center',
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  }
})

const getUniqAlbums = gallery =>
  gallery.reduce((acc, { albumId }) => (acc.indexOf(albumId) > -1 ? acc : acc.push(albumId) && acc), [])

const mapStateToProps = ({ gallery }) => ({
  albums: getUniqAlbums(gallery)
})

const mapDispatchToProps = dispatch => ({
  onAlbumPress: id => {
    dispatch(setCurrentAlbum(id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumList)
