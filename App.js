import { FlatList, StatusBar, StyleSheet, View } from "react-native";
import Card from "./src/components/Card";
import { getItens } from "./src/services/mock";

const App = () => {
  const dados = getItens();
  return (
    <View style={styles.container}>
      <StatusBar />
      <FlatList
        data={dados}
        renderItem={({ item }) => (
          <Card
            descrição={item.descricao}
            imagem={item.imagem}
            informações={item.valor}
            titulo={item.titulo}
          />
        )}
      />
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
