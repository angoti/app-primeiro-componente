import { StyleSheet, Text, View } from "react-native";
const DetalheProduto = ({ route }) => {
  const { titulo } = route.params;
  return (
    <View>
      <Text>{titulo}</Text>
    </View>
  );
};
export default DetalheProduto;
const styles = StyleSheet.create({});
