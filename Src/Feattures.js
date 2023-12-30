import { View, Text, FlatList,  TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import Scroller from "./Scroller";

const Items = [
  {
    id: 1,
    name: "Global hits",
    image: require("../assets/Film/1.jpg"),
  },
  {
    id: 2,
    name: "Top 100 Nigeria",
    image: require("../assets/Film/2.jpg"),
  },
  {
    id: 3,
    name: "Street Jams",
    image: require("../assets/Film/3.jpg"),
  },
  {
    id: 4,
    name: "Buju",
    image: require("../assets/Film/4.jpg"),
  },
  {
    id: 5,
    name: "Sounds",
    image: require("../assets/Film/5.jpg"),
  },
  {
    id: 6,
    name: "CKay",
    image: require("../assets/Film/6.jpg"),
  },
  {
    id: 4,
    name: "Bhad Guy",
    image: require("../assets/Film/001.jpg"),
  },
  {
    id: 5,
    name: "Top 100 Goo",
    image: require("../assets/Film/12.jpg"),
  },

];

export default function Feattures() {
  return (
    <View className="top-8 ">
    <FlatList 
    showsVerticalScrollIndicator={false}
    data={Items}
    keyExtractor={item=>item.id}
    numColumns={2}
    renderItem={({item})=>{
        return(
       <TouchableOpacity className=" p-1 rounded-2xl">
                    <View style={{width: wp(48)}} className="space-x-1 rounded-md bg-gray-500 items-center   flex-row">

                <Image source={item.image} className="w-12 h-12"/>
                <Text className="text-white text-base">{item.name}</Text>
            </View>

       </TouchableOpacity>

        )
    }}
    />
    <ScrollView
    showsVerticalScrollIndicator={false}>
                  <Scroller/>

    </ScrollView>



    </View>
  )
}
