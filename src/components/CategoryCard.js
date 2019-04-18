import React from "react"
import {View,Text, StyleSheet,Image,TouchableOpacity} from "react-native"
import Colors from "../styles/Colors"
import {withNavigation} from "react-navigation"

const CategoryCard = props => {

    const onselect = () => {
        props.navigation.navigate("Home",{
            name: props.data.name
        })
    }

    return (
        <TouchableOpacity onPress={onselect} activeOpacity={1.0}>
            <View
            style={[styles.card]}>
                <View style={{flex:3}}>
                    <Image
                    style={{flex:1}}
                    source={{uri:props.data.uri}}
                    resizeMode="center"
                    />
                </View>
                <View style={{margin:15, flex:3, justifyContent:"center"}}>
                    <Text style={{fontSize:28}}>{props.data.name}</Text>
                    <Text style={{fontSize:15, color:'darkgrey'}}>{props.data.desc}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
      width: "95%",
      height: 145,
      marginBottom:10,
      flexDirection: "row",
      overflow: 'hidden',
      backgroundColor: Colors.whiteColor,
      borderRadius: 8,
    },
  })

export default withNavigation(CategoryCard);

