import { FlatList, StyleSheet, View } from "react-native";
import Card from "../components/Card";
import { getItens } from "../services/mock";

const TelaProdutos = ({ navigation }) => {
  const dados = getItens();

  const cardClik = (titulo) => navigation.navigate("detalhe", { titulo });

  return (
    <View>
      <FlatList
        data={dados}
        renderItem={({ item }) => (
          <Card
            descrição={item.descricao}
            imagem={item.imagem}
            informações={item.valor}
            titulo={item.titulo}
            onPress={cardClik}
          />
        )}
      />
    </View>
  );
};
export default TelaProdutos;
const styles = StyleSheet.create({});
