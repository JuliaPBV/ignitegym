import { View, StatusBar } from "react-native";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import React from "react";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <GluestackUIProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparente"
        translucent
      />

      {fontsLoaded ? <View /> : <View />}
    </GluestackUIProvider>
  );
}
