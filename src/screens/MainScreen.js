import React, {useState,useEffect} from 'react';
import {
  View,
} from 'react-native';
import Header from '../components/Header';
import CardDeck from "../components/CardDeck"
import NewsData from "../Data/NewsData"
import { DataNotFound } from '../Data/Data';

const MainScreen = props => {

  const [data,setData] = useState(NewsData.topHeadlines);

  const reRenderSomething = props.navigation.addListener('willFocus', () => {
    const name = props.navigation.getParam('name', null);

    if (name === "Business") {
      setData(NewsData.businessNews)
    } else if (name === "Design") {
      setData(NewsData.designNews)
    } else if (name === "Technology") {
      setData(NewsData.technologyNews)
    } else if (name === "Startup") {
      setData(NewsData.startupNews)
    } else {
      setData(NewsData.topHeadlines)
    }
  });

  useEffect(()=>{
    const name = props.navigation.getParam('name', null);

    if (name === "Business") {
      setData(NewsData.businessNews)
    } else if (name === "Design") {
      setData(NewsData.designNews)
    } else if (name === "Technology") {
      setData(NewsData.technologyNews)
    } else if (name === "Startup") {
      setData(NewsData.startupNews)
    } else {
      setData(NewsData.topHeadlines)
    }
  },[])
  

    return (
        <View style={{flex:1}}>
          <Header text="Paper Boy" isRefresh={true} mainTitle={true}/>
          <CardDeck data={data.length==0 ? DataNotFound : data}/>
        </View>
        
    )
}

export default MainScreen;