import React from "react"
import {View, ScrollView} from "react-native"
import LinearGradient from "react-native-linear-gradient"
import Colors from "../styles/Colors"
import Header from "../components/Header"
import CategoryData from "../Data/CategoryData"
import CategoryCard from "../components/CategoryCard"
const CategoryScreen = () => {
    return (
        <View style={{flex:1,}}>
        <Header text="Explore Categories" isBack={true} />
        <LinearGradient colors={[Colors.primaryColor,Colors.primaryColorDark]} style={{flex:1}}>
            <ScrollView contentContainerStyle={{flexGrow: 1,alignItems:"center",justifyContent:"space-evenly"}}>
                    {   
                        CategoryData.map((data)=> (
                            
                            <CategoryCard key={data.id} data={data} />
                        ))
                    }
        
                    
            </ScrollView>
        </LinearGradient>
        </View>
    )
}

export default CategoryScreen;

