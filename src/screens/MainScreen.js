import React from 'react';
import {
  View,
} from 'react-native';
import Data from "../Data/Data"
import Header from '../components/Header';
import CardDeck from "../components/CardDeck"

const MainScreen = () => {
    return (
        <View style={{flex:1}}>
          <Header text="Paper Boy" isRefresh={true} mainTitle={true}/>
          <CardDeck data={Data}/>
        </View>
        
    )
}

export default MainScreen;