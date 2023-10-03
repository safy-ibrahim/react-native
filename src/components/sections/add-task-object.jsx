import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from "../../styles/styles";

const AddTaskObject = ({
  onTaskAdd,
  onChangeTaskTitle,
  onChangeTaskDescription,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Task"
        onChangeText={onChangeTaskTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Your Task Description"
        onChangeText={onChangeTaskDescription}
      />
      <Pressable onPress={onTaskAdd}>
        <Text style={styles.button}>{"+"}</Text>
      </Pressable>
    </View>
  );
};

export default AddTaskObject;
