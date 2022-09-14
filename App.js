import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import img1 from "./assets/products/aspirador.jpg";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.seção}>
        <Image style={styles.imagem} source={img1} resizeMode="contain" />
        <View style={styles.seçãoTexto}>
          <Text style={styles.texto}>Textos</Text>
          <Text style={styles.texto}>Textos</Text>
          <Text style={styles.texto}>Textos</Text>
        </View>
      </View>
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  texto: {},
  imagem: {
    flex: 1,
    height: 200,
  },
  container: {
    flex: 1,
  },
  seção: {
    flexDirection: "row",
  },
  seçãoTexto: {
    flex: 1,
  },
});
