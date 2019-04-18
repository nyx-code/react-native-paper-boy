import React from 'react';
import {View, Text} from "react-native"
import Swiper from 'react-native-swiper-animated';
import Card from './Card';
import Colors from "../styles/Colors"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default props => {
    const {data} = props
    return (
        <View style={{flex:10,backgroundColor: Colors.primaryColorDark}}>
            <Swiper
                style={{flex:7,backgroundColor:"transparent"}}
                paginationStyle={{ container: { backgroundColor: 'transparent' } }}
                paginationLeft={''}
                paginationRight={''}
                smoothTransition
                stack
                dragDownToBack
                dragY
                showPagination={false}
                >
                {
                    data.map((value,index)=>{
                    return <Card
                        key={index}
                        data={value}
                    />
                    })
                }
            </Swiper>
        </View>  
    )
}