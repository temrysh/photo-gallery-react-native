import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, ScrollView, Button, Image, Dimensions, Text } from 'react-native'

import { setCurrentPhoto } from '../state/actions'

class PhotoDetails extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Photo',
    headerLeft: <Button onPress={() => navigation.goBack()} title="Back" />
  })

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image source={{ uri: this.props.photo.url }} style={styles.image} />
          <Text>ID: {this.props.photo.id}</Text>
          <Text>Album ID: {this.props.photo.albumId}</Text>
          <Text>Title: {this.props.photo.title}</Text>
        </View>
      </ScrollView>
    )
  }
}

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  image: {
    width: width,
    height: width
  }
})

const getPhotoById = (gallery, id) => gallery.find(photo => photo.id === id)

const mapStateToProps = ({ gallery, photo }) => ({
  photo: getPhotoById(gallery, photo)
})

export default connect(mapStateToProps)(PhotoDetails)
