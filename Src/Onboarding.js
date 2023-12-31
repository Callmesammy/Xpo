import { View, Text } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

export default function boarding() {
    const navigate = useNavigation();

    const Main = ()=>{
        navigate.navigate('Log')
    }
  return (
    <View className="flex-1 bg-white">
      <Onboarding
      onDone={Main}
      onSkip={Main}
        pages={[
    
          {
            backgroundColor: "white",
            image: (
              <View className="top-10">
                <LottieView
                  style={{ width: wp(80), height: hp(52) }}
                  source={require("../assets/Minate/boot.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: (
              <View className="-top-10 ">
                <Text
                  style={{ fontSize: hp(8) }}
                  className="font-bold tracking-widest shadow-sm"
                >
                  Eat Up
                </Text>
              </View>
            ),
            subtitle: (
              <View className="-top-10">
                <Text
                  style={{ fontSize: wp(4) }}
                  className="text-center tracking-widest"
                >
                  {" "}
                  After a good dinner, one can forgive anybody, even one's own
                  relative
                </Text>
              </View>
            ),
          },
          {
            backgroundColor: "white",
            image: (
              <View className="top-11">
                <LottieView
                  style={{ width: wp(80), height: hp(52) }}
                  source={require("../assets/Minate/botin.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: (
              <View>
                <Text
                  style={{ fontSize: hp(8) }}
                  className="font-bold tracking-widest shadow-sm -top-10"
                >
                  Order
                </Text>
              </View>
            ),
            subtitle: (
              <View>
                <Text
                  style={{ fontSize: wp(4) }}
                  className="text-center tracking-widest -top-5"
                >
                  Instead of waiting too long, why dont you just place and order{" "}
                </Text>
              </View>
            ),
          },
          {
            backgroundColor: "white",
            image: (
              <View className="top-11">
                <LottieView
                  style={{ width: wp(80), height: hp(60) }}
                  source={require("../assets/Minate/boost.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: (
              <View className="-top-11">
                <Text
                  style={{ fontSize: hp(8) }}
                  className="font-bold tracking-widest shadow-sm -top-10"
                >
                  On Time
                </Text>
              </View>
            ),
            subtitle: (
              <View className="-top-11">
                <Text
                  style={{ fontSize: wp(4) }}
                  className="text-center tracking-widest -top-5"
                >
                  We node waste time{" "}
                </Text>
              </View>
            ),
          },
        ]}
      />
    </View>
  );
}
