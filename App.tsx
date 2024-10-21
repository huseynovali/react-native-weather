import { Image, Text, View } from "react-native";
import Home from "./src/screen/Home";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarIcon: ({ color }) => (
          <View className="bg-red-300">
            <Text style={{ color: color }}>Home</Text>
          </View>
        ),
      }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <View className="bg-red-300">
                <Text style={{ color: color }}>Home</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <View className="relative bg-slate-400">
                <Image source={require("./assets/Subtract.png")} />
                <View
                  className="absolute  left-[90%] top-[15%] bg-white z-10 py-1/2 px-3  rounded-full"
                >
                  <Text className="text-[#48319D] text-[28px] font-bold">+</Text>
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
