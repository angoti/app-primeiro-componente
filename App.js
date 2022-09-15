import { StatusBar, StyleSheet, View } from "react-native";
import TelaProdutos from "./src/screens/TelaProdutos";
import DetalheProduto from "./src/screens/DetalheProduto";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="produtos" component={TelaProdutos} />
          <Stack.Screen name="detalhe" component={DetalheProduto} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
