import React, { useRef, useState } from "react";
import { Animated, Pressable, Text } from "react-native";

function Home() {
  const [open, setOpen] = useState(false);
  const heightAnim = useRef(new Animated.Value(50)).current;

  const handleOpen = () => {
    Animated.timing(heightAnim, {
      toValue: open ? 50 : 500,
      duration: 500,
      useNativeDriver: false,
    }).start();
    setOpen(!open);
  };
  return (
    <Pressable
      onPress={handleOpen}
      className={`w-full transition-all   bg-slate-500 absolute bottom-5 `}
    >
      <Animated.View style={{ height: heightAnim, backgroundColor: "red" }}>
        <Text className="text-center text-2xl">Hello Wordld</Text>
      </Animated.View>
    </Pressable>
  );
}

export default Home;
