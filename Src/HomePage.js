import {
  View,
  Image,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Fontss, Imag } from "../Theme/Fonts";
import Feattures from "./Feattures";
import Scroller from "./Scroller";

export default function HomePage() {
  const [flex, flexbox] = useState(null);
  return (
    <View className="flex-1 relative bg-black">
      <StatusBar barStyle="light-content" />

      <SafeAreaView>
        <View className="flex-row justify-between space-x-3  px-2">
          <Text className="text-white text-3xl font-bold">Good Evening </Text>
          <View className="flex-row space-x-4">
            <TouchableOpacity>
              <Icon name="bell" size="25" color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="settings" size="25" color="white"/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="clock" size="25" color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="top-7 space-y-5">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="overflow-visible top-3"
          >
            {Fontss.map((cat) => {
              let OnKey = cat == flex;
              let pressed = OnKey ? " bg-green-500" : " bg-gray-600";
              let texted = OnKey ? " text-black" : " text-white";

              return (
                <TouchableOpacity
                  key={cat}
                  onPress={() => flexbox(cat)}
                  className={"rounded-full ml-3 bg-gray-600 p-3" + pressed}
                >
                  <Text
                    style={{ fontSize: wp(4) }}
                    className={"font-bold tracking-wider text-white" + texted}
                  >
                    {cat}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          <Feattures />
        </View>
      </SafeAreaView>
    </View>
  );
}
