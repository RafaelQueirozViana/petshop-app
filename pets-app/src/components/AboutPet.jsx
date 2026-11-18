import { StyleSheet, Text, View } from "react-native";

const AboutPet = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SOBRE A PETFLASH</Text>

      <Text style={styles.description}>
        Cuidamos do seu pet com carinho, atenção e qualidade. Nosso objetivo é
        proporcionar o melhor cuidado, garantindo conforto e bem-estar para seu
        melhor amigo.
      </Text>
    </View>
  );
};

export default AboutPet;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFF8E8",
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#D69C00",
    marginBottom: 12,
  },

  description: {
    fontSize: 14,
    lineHeight: 22,
    color: "#555555",
  },
});
