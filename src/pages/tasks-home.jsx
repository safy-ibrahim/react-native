import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ShowTasksList from "../components/sections/show-tasks-list";
import AddTaskObject from "../components/sections/add-task-object";
import { useDispatch, useSelector } from "react-redux";
import { addTask, setTasksList } from "../redux/reducers/task-slice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../styles/styles";

const TasksHome = () => {
  let tasksList = useSelector((state) => state.task.tasksList);
  console.log(tasksList, "new tasks");

  let dispatchAction = useDispatch();

  async function setDataToStorage(key, data) {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  }
  async function getDataFromStorage(key) {
    return JSON.parse(await AsyncStorage.getItem(key));
  }

  useEffect(() => {
    console.log(tasksList, "tasks list");

    if (tasksList.length == 0) {
      console.log("empty");

      getDataFromStorage("tasksList").then((data) => {
        console.log(data, "data from storage");
        if (data != null) {
          dispatchAction(setTasksList(data));
        }
      });
      console.log(tasksList, "list after get");
    } else {
      setDataToStorage("tasksList", tasksList);
    }
  }, [tasksList]);

  let [taskObject, setTaskObjectData] = useState({
    id: 0,
    title: "",
    description: "",
    completed: false,
  });

  function onChangeTaskTitle(title) {
    setTaskObjectData({ ...taskObject, title });
  }

  function onChangeTaskDescription(description) {
    setTaskObjectData({ ...taskObject, description });
  }

  function onTaskAdd() {
    console.log("button pressed");
    dispatchAction(
      addTask({
        ...taskObject,
        id: new Date().getTime(),     
      })

    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%" }}>
        <Text style={styles.text}>{"To Do App"}</Text>
        <AddTaskObject
          onTaskAdd={onTaskAdd}
          onChangeTaskTitle={onChangeTaskTitle}
          onChangeTaskDescription={onChangeTaskDescription}
        />
        <ShowTasksList tasksList={tasksList} />
      </ScrollView>
    </View>
  );
};

export default TasksHome;
