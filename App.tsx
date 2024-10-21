import { Image,Text, View } from "react-native";
import Home from "./src/screen/Home";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <View>
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
              <View>
               <Image source={require('./assets/Subtract.png')} />
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
