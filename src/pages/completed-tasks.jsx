import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import TaskCard from "../components/reusable/task-card";

const CompletedTasks = () => {
  let tasksList = useSelector((state) => state.task.tasksList);

  return (
    <View style={{ textAlign: "center", padding: 20, alignItems: "center" }}>
      {tasksList.map((item, index) =>
        item.completed ? <TaskCard key={`complete-${index}`} task={item} /> : ""
      )}
    </View>
  );
};

export default CompletedTasks;
