import { View, Text, Image, StyleSheet } from "react-native";

const AboutPet = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/poster-petshop.jpg")}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text style={styles.title}>Desde 2012 no bairro.</Text>

        <Text style={styles.description}>
          Espaço amplo para você e seu pet.
        </Text>
      </View>
    </View>
  );
};

export default AboutPet;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
  },

  image: {
    width: "100%",
    height: 220,
  },

  content: {
    padding: 16,
    gap: 5,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222222",
  },

  description: {
    fontSize: 13,
    color: "#666666",
  },
});
