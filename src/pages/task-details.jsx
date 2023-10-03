import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { doneTask, removeTask } from "../redux/reducers/task-slice";
import { useNavigation } from "@react-navigation/native";
 import { styles } from "../styles/styles";

const TaskDetails = () => {
  const params = useRoute().params;

  const dispatchAction = useDispatch();
  const navigator = useNavigation();

  function onTaskDone() {
    console.log("done task");
    dispatchAction(doneTask(params));
    navigator.navigate("tasks-home");
  }

  function onTaskRemove() {
    dispatchAction(removeTask(params));
    navigator.navigate("tasks-home");
  }

  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text style={styles.task}>{`Task Title: \n\n${params.title}`}</Text>
      <Text style={styles.task}>
        {`Task Description: \n\n${params.description}`}
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Pressable onPress={onTaskDone}>
          <Text style={styles.button}>{"Done"}</Text>
        </Pressable>
        <Pressable onPress={onTaskRemove}>
          <Text style={styles.button}>{"Remove"}</Text>
        </Pressable>
      </View>
    </View>
  );
};


export default TaskDetails;
