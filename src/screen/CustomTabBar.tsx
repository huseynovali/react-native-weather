import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View className="flex flex-row justify-around">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
      
          >
            <Text style={{ color: isFocused ? 'blue' : 'black' }}>
           asd
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};


export default CustomTabBar;