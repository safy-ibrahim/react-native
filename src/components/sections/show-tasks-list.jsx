import React from "react";
import { View } from "react-native";
import TaskCard from "../reusable/task-card";
import { useNavigation } from "@react-navigation/native";

const ShowTasksList = ({ tasksList }) => {
  const navigator = useNavigation();
  return (
    <View
      style={{
        width: "100%",
        textAlign: "center",
        alignItems: "center",
        margin: 10,
      }}
    >
      {tasksList.map((item, index) => (
        <TaskCard key={`task-${index}`} task={item} />
      ))}
    </View>
  );
};

export default ShowTasksList;
