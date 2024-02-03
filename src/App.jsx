import React from "react";
import { View,StyleSheet,SafeAreaView,ScrollView } from "react-native";
import PasswordGenerater from "./components/PasswordGenerater";
import TodoList from "./components/TodoList";
import TicTacToe from "./components/TicTacToe";


export default function App(){
  return(
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView>
       <TicTacToe/>
      </SafeAreaView>
    </ScrollView>
  )
}