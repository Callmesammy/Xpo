import {
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";


export default function HomePage() {
  const [hide, Hfeat] = useState(false);
  const [location, locate] = useState([1, 2, 3]);

  const preasable = (loc) => {
    console.log("location: ", loc);
  };
  return (
    <View className="flex-1 relative">
      <StatusBar barStyle="light-content" />
      <Image
        blurRadius={35}
        source={require("../assets/images/bg.png")}
        className="absolute w-full h-full "
      />
      <SafeAreaView className="flex flex-1">
        <View style={{ height: "7%" }} className="mx-4 relative z-50">
          <View
            style={{
              backgroundColor: hide ? "white" : "transparent",
              opacity: "0.5",
            }}
            className="flex-row rounded-full items-center  justify-end "
          >
            {hide ? (
              <TextInput
                placeholder="Search here"
                placeholderTextColor="gray"
                className="pl-6 h-10 flex-1 pb-1 text-base text-black items-center"
              />
            ) : null}
            <TouchableOpacity
              onPress={() => Hfeat(!hide)}
              className="ml-4 rounded-full p-3 bg-neutral-300 m-1 items-center justify-center opacity-70"
            >
              <Icon name="search" size="25" color="gray" className="" />
            </TouchableOpacity>
          </View>
          {location.length > 0 && hide ? (
            <View className="absolute top-14 bg-gray-300 w-full rounded-3xl">
              {location.map((loc, rock) => {
                var Showcase = rock + 1 != location.length;
                var showBase = Showcase
                  ? "border-0 border-b-2 border-b-gray-400 "
                  : "";
                return (
                  <TouchableOpacity
                    onPress={() => preasable(loc)}
                    key={rock}
                    className={
                      "px-4 p-4 items-center space-x-1 flex-row " + showBase
                    }
                  >
                    <Icon name="pin" size="18" color="gray" />
                    <Text className="text-center text-lg ">
                      Australia, UpHill
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </View>
        <View className="flex-1 flex mb-2 justify-around mx-4">
          <Text className="text-2xl font-bold text-gray-300 text-center">
            Australia
                      <Text className="text-gray-400 text-xl"> UpHil </Text>

          </Text>
          <View className="flex-row justify-center">
            <Image source={require('../assets/images/partlycloudy.png')} className="w-52 h-52"/>
          </View>
        
        <View className="space-y-2">
          <Text className="text-6xl text-white font-bold text-center">23°</Text>
          <Text className=" tracking-widest text-2xl text-center text-gray-400 ">Partly Cloudy</Text>
        </View>

        <View className="flex-row justify-between mx-2">
          <View className="flex-row space-x-2 items-center">
            <Image source={require('../assets/icon/wind.png')} className="w-6 h-6"/>
            <Text className="text-gray-300 font-semibold text-base">
              28km
            </Text>
            </View>
            <View className="flex-row space-x-2 items-center">
            <Image source={require('../assets/icon/drop.png')} className="w-6 h-6"/>
            <Text className="text-gray-300 font-semibold text-base">
              30%
            </Text>
            </View>
            <View className="flex-row space-x-2 items-center">
            <Image source={require('../assets/icon/sun.png')} className="w-6 h-6"/>
            <Text className="text-gray-300 font-semibold text-base">
              9:30PM
            </Text>
            </View>
          </View>
        </View>
        <View className=" justify-center ">
        <View className="flex-row ml-5 space-x-2  items-center">
        <Icon name="calendar-outline" size="25" color="white"/>
        <Text className="text-gray-300 font-semibold text-md"> Daily Forecast</Text>
      
        </View>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{padding: 20}}
        className="space-x-3"
        >
        <View className="p-4 pl-2 py-2 flex bg-gray-500 space-x-3 justify-center items-center rounded-3xl">
        <Image source={require('../assets/images/heavyrain.png')} className="w-11 h-11"/>
        <Text className="text-gray-300 font-semibold text-center">Monday</Text>
        <Text  className="text-white font-semibold text-center">23°</Text>
        </View>
        <View className="p-4 pl-2 py-2 flex bg-gray-500 space-x-3 justify-center items-center rounded-3xl">
        <Image source={require('../assets/images/heavyrain.png')} className="w-11 h-11"/>
        <Text className="text-gray-300 font-semibold text-center">Monday</Text>
        <Text  className="text-white font-semibold text-center">23°</Text>
        </View>
        <View className="p-4 pl-2 py-2 flex bg-gray-500 space-x-3 justify-center items-center rounded-3xl">
        <Image source={require('../assets/images/heavyrain.png')} className="w-11 h-11"/>
        <Text className="text-gray-300 font-semibold text-center">Monday</Text>
        <Text  className="text-white font-semibold text-center">23°</Text>
        </View>
        <View className="p-4 pl-2 py-2 flex bg-gray-500 space-x-3 justify-center items-center rounded-3xl">
        <Image source={require('../assets/images/heavyrain.png')} className="w-11 h-11"/>
        <Text className="text-gray-300 font-semibold text-center">Monday</Text>
        <Text  className="text-white font-semibold text-center">23°</Text>
        </View>
        <View className="p-4 pl-2 py-2 flex bg-gray-500 space-x-3 justify-center items-center rounded-3xl">
        <Image source={require('../assets/images/heavyrain.png')} className="w-11 h-11"/>
        <Text className="text-gray-300 font-semibold text-center">Monday</Text>
        <Text  className="text-white font-semibold text-center">23°</Text>
        </View>
        <View className="p-4 pl-2 py-2 flex bg-gray-500 space-x-3 justify-center items-center rounded-3xl">
        <Image source={require('../assets/images/heavyrain.png')} className="w-11 h-11"/>
        <Text className="text-gray-300 font-semibold text-center">Monday</Text>
        <Text  className="text-white font-semibold text-center">23°</Text>
        </View>
        <View className="p-4 pl-2 py-2 flex bg-gray-500 space-x-3 justify-center items-center rounded-3xl">
        <Image source={require('../assets/images/heavyrain.png')} className="w-11 h-11"/>
        <Text className="text-gray-300 font-semibold text-center">Monday</Text>
        <Text  className="text-white font-semibold text-center">23°</Text>
        </View>
        </ScrollView>
        </View> 
       
      </SafeAreaView>
    </View>
  );
}
