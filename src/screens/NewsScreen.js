import React from "react"
import {
    View,
    WebView
  } from 'react-native';
import Header from '../components/Header';

const NewsScreen = props => {
    const url = props.navigation.getParam('url', '');
    return (
        <View style={{flex:1}}>
            <Header text="News" isBack={true}/>
            <WebView
                source={{uri: url}}
                style={{flex:1}}
            />
        </View>
    )
}

export default NewsScreen;