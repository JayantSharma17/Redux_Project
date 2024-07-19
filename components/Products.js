import { View, Text, Button, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { add_to_cart, remove_from_cart } from './redux/action'
import { useDispatch ,useSelector} from 'react-redux'


const Products = ({ item }) => {
    const [added,setAdded]=useState(false)
    const dispatch=useDispatch()
    const cartItems=useSelector((state)=>state.reducer)

    useEffect(()=>{
        const result=cartItems.filter((e)=>{
            return e.name==e.name
        })
        if(result.length){
            setAdded(true)
        }
        else{
            setAdded(false)
        }
    },[cartItems])

    const handleCart = () => {
        // console.warn(item)
        dispatch(add_to_cart(item))
    }
    const removeCart = () => {
        // console.warn(item)
        dispatch(remove_from_cart(item.name))
    }
    return (
        <View style={{ margin: 90 }}>
            <Image style={{ height: 100, width: 100 }} source={{ uri: item.image }} />
            <Text>{item.name}</Text>
            {!added?<Button title='Add' onPress={ handleCart} />:<Button title='Remove' onPress={ removeCart} />}
            <View style={{ width: 500, height: 1, backgroundColor: 'gray', marginTop: 5, marginLeft: 'auto', marginRight: 'auto' }}></View>

        </View>
    )
}

export default Products