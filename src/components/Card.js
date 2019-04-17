import React from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
} from 'react-native'

const {width, height} = Dimensions.get('window')

const Card = props => {
    const {title,urlToImage,description} = props.data

    return (
      <View
        style={[styles.card]}>
        <Image
          style={{flex:1}}
          source={{uri: urlToImage || `https://www.pastepic.xyz/images/2019/04/17/undraw_synchronize_ccxkec1ebff1acc1e038.png`}}
        />
        <View style={{margin:20}}>
          <Text style={{fontSize:20}}>{title}</Text>
          <Text style={{fontSize:15, color:'darkgrey'}}>{description}</Text>
        </View>
      </View>
    )
  }

export default Card;

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    width: width - 20,
    height: height * 0.7,
    top: 30,
    overflow: 'hidden',
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 8,
  },
})