import React from 'react';
import Swiper from 'react-native-swiper-animated';
import Card from './Card';
import Colors from "../styles/Colors"

export default props => {
    const {data} = props
    return (
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
                data.map((value,index)=>(
                <Card
                    key={index}
                    data={value}
                />
                ))
            }
        </Swiper>  
    )
}