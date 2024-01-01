import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { Imm, Items } from "../Theme/Fonts";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Itemfolder() {
  return (
    <View>
      <View className=" flex-row justify-between mb-3 ">
        <Text style={{ fontSize: wp(4) }} className="font-semibold">
          Recommendation
        </Text>
        <TouchableOpacity>
          <Text
            style={{ fontSize: wp(4) }}
            className="font-bold text-purple-900"
          >
            See all
          </Text>
        </TouchableOpacity>
      </View>
   <View style={{height: 600}}>
  <FlatList
        data={Imm}
        numColumns={2}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 25, paddingTop: 20 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        className="mx-2"
        renderItem={({ item }) => {
          return (
            
            <View className="flex shadow-lg ">
              <TouchableOpacity
                style={{ width: wp(44), height: wp(35) }}
                className=" mb-2 flex justify-end "
              >
                <Image
                  style={{
                    width: wp(44),
                    height: wp(35),
                    borderTopLeftRadius: "24",
                    borderTopRightRadius: "24",
                  }}
                  source={item.image}
                  resizeMethod="cover"
                  className=" shadow-md"
                />
              </TouchableOpacity>
              <View
                style={{ borderEndEndRadius: "24", height: wp(18) }}
                className=" flex bottom-8 px-2 mb-1 bg-white shadow-black  space-y-1 "
              >
                <Text
                  style={{ fontSize: wp(3.5) }}
                  className="font-semibold tracking-widest top-1"
                >
                  {item.name}
                </Text>
                <View className="flex-row items-center">
                  <Icon name="star" size="10" color="orange" />
                  <Text className="text-xs"> {item.review}</Text>
                </View>
                <View className="flex-row items-center">
                  <Icon name="map-pin" size="10" color="orange" />
                  <Text className="text-xs"> {item.address} </Text>
                  <Text className="text-xs">{item.time}</Text>
                </View>
              </View>
            </View>
          );
        }}
      />


   </View>
    
    </View>
  );
}
