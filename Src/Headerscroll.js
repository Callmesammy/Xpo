import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Items } from '../Theme/Fonts'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

export default function Headerscroll() {
    const [Var, Setvar] = useState(null);
  return (
    <View>
     <ScrollView horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 10}}>
      {
        Items.map((item, index)=>{
            let Comp = item==Var;
            let Btn = Comp? ' bg-purple-300': ' bg-red-300';
            let Eext = Comp? ' text-bold': ' text-md';
          return(
            <View key={index} className="px-2 top-3 ">
            <TouchableOpacity onPress={()=>Setvar(item)} className={"bg-red-300 items-center space-y-1 rounded-3xl p-2"+Btn}>
                <Image style={{width: wp(17), height: hp(6)}} source={item.image} className="p-3"/>
                <Text className={"text-md font-semibold text-gray-900 text-center"+Eext}>{item.name}</Text>

            </TouchableOpacity>
            </View>
          )
        })
      }

      </ScrollView>
    </View>
  )
}