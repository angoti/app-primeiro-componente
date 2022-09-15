import { StyleSheet, Text, View, Image } from "react-native";

const Card = ({ imagem, informações, descrição, titulo = "padrão" }) => {
  return (
    <View style={styles.seção}>
      <Image style={styles.imagem} source={imagem} resizeMode="contain" />
      <View style={styles.seçãoTexto}>
        <Text style={styles.texto}>{titulo}</Text>
        <Text style={styles.texto}>{descrição}</Text>
        <Text style={styles.texto}>{informações}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  texto: {},
  imagem: {
    flex: 1,
    height: 200,
  },
  seção: {
    flexDirection: "row",
  },
  seçãoTexto: {
    flex: 1,
  },
});
