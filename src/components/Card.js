import React from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../styles/Colors"
import {withNavigation} from "react-navigation"
import LinearGradient from "react-native-linear-gradient"

const {width, height} = Dimensions.get('window')

const Card = props => {
    const {title,urlToImage,description,url} = props.data

    return (
      <View style={{marginTop:50}}>
      <View
        style={[styles.card]}>
        <Image
          style={{flex:1}}
          source={{uri: urlToImage || `https://www.pastepic.xyz/images/2019/04/17/undraw_synchronize_ccxkec1ebff1acc1e038.png`}}
          resizeMode="cover"
        />
        <View style={{margin:20}}>
          <Text style={{fontSize:20}}>{title}</Text>
          <Text style={{fontSize:15, color:'darkgrey'}}>{description}</Text>
        </View>
        
      </View>
      
      <LinearGradient colors={[Colors.fabColor,Colors.fabDarkColor]} style={{width:50,height:50,borderRadius:50,justifyContent:"center",alignItems:"center",position:"absolute",top:-10,right:15}}>
      <TouchableOpacity activeOpacity={0.7} disabled={url === null?true:false} onPress={()=>props.navigation.navigate("News", {url})} > 
      <Icon
          name="eye"
          size={30}
          color={Colors.whiteColor}
      />
      </TouchableOpacity>
      </LinearGradient>
  </View>
    )
  }

export default withNavigation(Card);

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    width: width - 20,
    height: height * 0.7,
    overflow: 'hidden',
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 8,
  },
})