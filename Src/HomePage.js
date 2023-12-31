import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/FontAwesome";
import { Items } from "../Theme/Fonts";
import Headerscroll from "./Headerscroll";

export default function HomePage() {
  return (
    <View>

    <SafeAreaView className="bg-purple-300 flex">
      <View className="flex-row ml-4 items-center justify-between mx-3">
        <Text className="font-bold text-2xl text-purple-900">
          Explore the taste
        </Text>
        <View className="flex-row space-x-4 ">
          <TouchableOpacity className="p-3  mb-3 rounded-2xl justify-center flex-row bg-purple-600">
            <Icon name="shopping-cart" size="20" color="white" />
            <View className="absolute -right-3 -top-3 w-6 h-6 bg-red-600 items-center justify-center rounded-full">
              <Text className="text-white font-semibold">4</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: wp(13), height: hp(5) }}
            className="  mb-3 rounded-2xl justify-center items-center flex-row bg-gray-700 "
          >
            <Icon name="user" size="20" color="white" />
            
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex z-50  mb-5 mx-4  top-3">
        <View className="flex-row shadow-lg px-3 items-center bg-white opacity-70 rounded-full mb-2">
          <TextInput
            style={{ width: wp(75), height: hp(5) }}
            placeholder="Search items here"
            placeholderTextColor="gray"
            className="mx-2"
          />
          <TouchableOpacity className="p-3 bg-gray-400 rounded-full">
            <Icon name="search" size="20" color="white" />
          </TouchableOpacity>
        </View>
      </View>  
        </SafeAreaView>

      <View>
      <Headerscroll/>
      </View>
      
    </View>

  );
}
