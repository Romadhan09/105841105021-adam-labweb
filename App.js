import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "red",
        }}
      ></View>
      <View
        style={{
          flex: 1,
          backgroundColor: "blue",
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({});