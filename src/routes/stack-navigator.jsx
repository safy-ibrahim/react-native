import React from "react";
import TasksHome from "../pages/tasks-home";
import TaskDetails from "../pages/task-details";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="tasks-home" component={TasksHome} />
      <Stack.Screen name="task-details" component={TaskDetails} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
