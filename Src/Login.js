import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import Password from "./Password";

export default function Login() {
  const navigarion = useNavigation();
  return (
    <View className="flex-1  justify-center bg-white relative">
      <View className="items-center">
        <Image
          style={{ width: wp(40), height: hp(18) }}
          source={require("../assets/Image/ava.png")}
          className
        />
      </View>

      <View className="justify-start items-start mb-3  px-9">
        <Text
          style={{ fontSize: wp(7) }}
          className="text-left font-bold text-purple-950"
        >
          Login
        </Text>
      </View>
      <SafeAreaView className="flex">
        <View className="z-50 mx-4 py-3 space-y-8">
          <View className="flex-row rounded-full  p-3 shadow-sm bg-purple-200 mx-3 justify-center items-center">
            <Icon name="user" size="25" color="gray" />
            <TextInput
              style={{ width: wp(75), height: hp(4) }}
              placeholder="Enter username"
              placeholderTextColor="gray"
              className="px-3 text-md justify-center"
            />
          </View>
          <View className="flex-row rounded-full mx-3 p-3  bg-purple-200 justify-center items-center">
            <Icon name="eye-slash" size="25" color="gray" />
            <TextInput
              style={{ width: wp(75), height: hp(4) }}
              placeholder="Enter password"
              placeholderTextColor="gray"
              secureTextEntry={Password}
              className="px-3 text-md justify-center flex-1"
            />
            <TouchableOpacity
              onPress={() => navigarion.navigate("Rpass")}
              className="top-10"
            >
              <Text className="text-blue-600 text-semibold">
                Forgot Password
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={()=>navigarion.navigate('HME')}
            style={{ width: wp(85), height: hp(6) }}
            className="items-center mx-auto justify-center top-8 p-3 rounded-full bg-purple-700"
          >
            <Text style={{ fontSize: wp(5) }} className="text-white font-bold">
              Login
            </Text>
          </TouchableOpacity>
          <View className="items-end mx-5 top-3">
            <Text>
              are you a new use?
              <TouchableOpacity onPress={() => navigarion.navigate("Pass")}>
                <Text className="top-1 text-blue-800"> Signing here</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
