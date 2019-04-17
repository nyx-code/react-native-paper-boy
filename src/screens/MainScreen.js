import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import Swiper from 'react-native-swiper-animated';
import Card from '../components/Card';
import Data from "../Data/Data"
import Colors from "../styles/Colors"
import Header from '../components/Header';

const styles = {
  wrapper: {
    backgroundColor: '#009688',
    flex: 1,
  }
};
export default () => {
    return (
        <View style={{flex:1}}>
        <Header text="Paper Boy" />
        <Swiper
            style={{flex:1,backgroundColor: Colors.primaryColor}}
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
                Data.map((value,index)=>(
                <Card
                    key={index}
                    data={value}
                />
                ))
            }
        </Swiper>
        </View>
        
    )
}