import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";



export default function HomePage() {
    const navigarion = useNavigation();

  return (
    <View className="flex-1  justify-center bg-white relative">
      <View className="items-center">
          <Image
        style={{ width: wp(40), height: hp(18) }}
        source={require("../assets/Image/ava.png")}
     className />
      </View>
    
      <View className="justify-start items-start mb-3  px-9">
        <Text style={{fontSize: wp(6)}} className="text-left font-bold text-purple-950">Password Reset</Text>
      </View>
      <SafeAreaView className="flex absolute px-3 mx-2 top-4">     
        <TouchableOpacity onPress={()=>navigarion.goBack()} className=" mx-2">
                    <Icon name="chevron-left" size="28" color="purple" />

        </TouchableOpacity>
       </SafeAreaView>

        <View className="z-50 mx-4 py-3 space-y-4">
          <View className="flex-row rounded-full  p-3 shadow-sm bg-purple-200 mx-3 justify-center items-center">
            <TextInput
              style={{ width: wp(75), height: hp(4) }}
              placeholder="Enter your email"
              placeholderTextColor="gray"
              className="px-3 text-md justify-center"
            />
          </View>
          
                  
         <TouchableOpacity   style={{ width: wp(85), height: hp(6) }} className="items-center mx-auto justify-center top-8 p-3 rounded-full bg-purple-700">
          <Text style={{fontSize: wp(5)}} className="text-white font-bold">Send</Text>
         </TouchableOpacity >
         <View className="items-end mx-5 top-3">
        
         </View>
        </View>
       
      
    </View>
  );
}
