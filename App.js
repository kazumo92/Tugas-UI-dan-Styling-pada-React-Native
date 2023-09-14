import { SafeAreaView,SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import { CardProfileComponent } from "./Components/CardProfileComponent";

export default function app(){
  return(
    <SafeAreaProvider>
        <SafeAreaView style={{ flex:1, padding:30 }}>
          <CardProfileComponent />
        </SafeAreaView>
    </SafeAreaProvider>

  );
}