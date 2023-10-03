import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../styles/styles";
import { View } from "react-native-web";

const TaskCard = ({ task }) => {
  const navigator = useNavigation();
  return (
    <View style={styles.items}>
      <View style={styles.itemsLeft}>
        <TouchableOpacity
          style={styles.task}
          onPress={() => navigator.navigate("task-details", task)}
         >
         <Text
          // style={{
          // fontSize: "20px",
          // textAlign: "center",
          // color: task.completed ? "green" : "white",
          // }}
          style={styles.itemsText}
          >
          {task.title}
         </Text>
        </TouchableOpacity>
      </View>
    </View>
 
  );
};




export default TaskCard;



