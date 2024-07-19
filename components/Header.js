import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'



const Header = () => {
    const cartData=useSelector((state)=>state.reducer)
    console.log(cartData)
    const[item,setItem]=useState(0)
    useEffect(()=>{
setItem(cartData.length);
    },[cartData])
  return (
    <View style={{backgroundColor:'orange'}}>
      <Text style={{padding:50,color:'white'}}>{`cart: ${item}`}</Text>
    </View>
  )
}

export default Header