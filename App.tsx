import { Image, Text, View } from "react-native";
import Home from "./src/screen/Home";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarBackground: () => (
            <View>
              <Image
                className="w-full relative -top-10 "
                source={require("./assets/Rectangle.png")}
              />
            </View>
          ),
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <View className="">
                <Text style={{ color: color }}>Home</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name=" "
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <View className="relative ">
                <Image
                  className="relative -top-4"
                  source={require("./assets/Subtract.png")}
                />
                <View className="absolute  left-[83%] top-[15%] bg-white z-10 py-1/4 px-3  rounded-full">
                  <Text className="text-[#48319D] text-[28px] font-bold">
                    +
                  </Text>
                </View>
              </View>
            ),
          }}
        />
        <Tab.Screen name="asd" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
