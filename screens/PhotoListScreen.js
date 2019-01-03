import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, ScrollView, Button, TouchableOpacity, Image, Dimensions } from 'react-native'

import { setCurrentPhoto } from '../state/actions'

class PhotoList extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Photos',
    headerLeft: <Button onPress={() => navigation.goBack()} title="Back" />
  })

  onPhotoPress = id => {
    this.props.onPhotoPress(id)
    this.props.navigation.navigate('PhotoDetails')
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.props.photos.map(photo => (
            <TouchableOpacity key={photo.id} style={styles.image} onPress={() => this.onPhotoPress(photo.id)}>
              <Image source={{ uri: photo.thumbnailUrl }} style={styles.image} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    )
  }
}

const imgWidth = Dimensions.get('window').width / 3

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  image: {
    width: imgWidth,
    height: imgWidth
  }
})

const getPhotosByAlbumId = (gallery, id) => gallery.filter(photo => photo.albumId === id)

const mapStateToProps = ({ gallery, album }) => ({
  photos: getPhotosByAlbumId(gallery, album)
})

const mapDispatchToProps = dispatch => ({
  onPhotoPress: id => {
    dispatch(setCurrentPhoto(id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoList)
