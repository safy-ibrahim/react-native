import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import StackNavigator from "./stack-navigator";
import CompletedTasks from "../pages/completed-tasks";

const BottomNavigator = () => {
  const bottomNav = createBottomTabNavigator();

  return (
    <bottomNav.Navigator
      initialRouteName="stack"
      screenOptions={{ headerTitle: "To Do App" }}
    >
      <bottomNav.Screen name="stack" component={StackNavigator} />
      <bottomNav.Screen name="completed-tasks" component={CompletedTasks} />
    </bottomNav.Navigator>
  );
};

export default BottomNavigator;
