import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import React from "react";
import { Loading } from "@/src/components/Loading";
import { THEME } from "../../src/theme";
import { SignUp } from "@/src/screens/SignUp";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparente"
        translucent
      />

      {fontsLoaded ? <SignUp /> : <Loading />}
    </NativeBaseProvider>
  );
}
