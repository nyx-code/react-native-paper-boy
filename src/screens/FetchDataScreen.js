import React,{ useState, useEffect } from "react"
import {getNewsByCategory,getTopHeadlines} from "../Data/Data"
import { View, Text, ActivityIndicator } from "react-native";
import NewsData from "../Data/NewsData"
import Colors from "../styles/Colors"

const FetchDataScreen = props => {
    const [message, setMessage] = useState("");
    useEffect(() => {
      setMessage("Fetching Top Headlines");
      getTopHeadlines("in").then(res=>{
        NewsData.topHeadlines = res.articles
        setMessage("Fetching Buisness News");
        getNewsByCategory("business").then(res=>{
            NewsData.businessNews = res.articles
            setMessage("Fetching Technology News");
            getNewsByCategory("technology").then(res=>{
                NewsData.technologyNews = res.articles
                setMessage("All Data fetched");
                props.navigation.navigate("App");
            })
        })
      })
      
    }, []);
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.whiteColor
        }}
      >
        <ActivityIndicator size="large" color={Colors.primaryColor} />
        <Text>{message}</Text>
      </View>
    );
}

export default FetchDataScreen;