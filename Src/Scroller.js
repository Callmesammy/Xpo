import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { Items } from '../Theme/Fonts';
import { LinearGradient } from 'expo-linear-gradient';

export default function Scroller() {
  return (
    <View className="top-3 space-y-3">
      <Text style={{fontSize: hp(3)}} className="text-white font-bold">Your top mixes</Text>
      <ScrollView horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 20}}>
      {
        Items.map((fol, feat)=>{
            return(
                <View key={feat} className="p-2 flex justify-center  space-y-2">
                <ScrollView 
                showsVerticalScrollIndicator={false}></ScrollView>
                <Image source={fol.image} className="w-32 h-32 mb-2 rounded-lg"/>
                <LinearGradient
                 colors={['transparent', 'black']}
                 style={{width: wp(80), height: hp(15)}}
                 start={{x: 0.1, y:0}}
                 end={{x:0, y:0.8}}
                 className="absolute flex  bottom-0"
                 />
                <Text className="text-white text-center px-5 absolute bottom-6 font-semibold">{fol.name}</Text>
                
                </View>
            )
        })
      }  
      </ScrollView>

      <Text style={{fontSize: hp(3)}} className="text-white font-bold">New release for you</Text>
      <ScrollView horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 20}}>
      {
        Items.map((fol, feat)=>{
            return(
                <View key={feat} className="p-2 flex justify-center  space-y-2">
               
                <Image source={fol.image} className="w-32 h-32 mb-2 rounded-lg"/>
                <LinearGradient
                 colors={['transparent', 'black']}
                 style={{width: wp(80), height: hp(15)}}
                 start={{x: 0.1, y:0}}
                 end={{x:0, y:0.8}}
                 className="absolute flex  bottom-0"
                 />
                <Text className="text-white text-center px-5 absolute bottom-6 font-semibold">{fol.name}</Text>
                
                </View>
            )
        })
      }  
      </ScrollView>
    </View>
  )
}