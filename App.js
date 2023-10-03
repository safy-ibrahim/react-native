import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigator from "./src/routes/bottom.navigator";
import { Provider } from "react-redux";
import tasksStore from "./src/redux/store/store";

export default function App() {
  const bottomNav = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={tasksStore}>
      <NavigationContainer>
        <BottomNavigator />
      </NavigationContainer>
    </Provider>
  );
}
