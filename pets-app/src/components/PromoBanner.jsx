import { View, Text, Pressable, StyleSheet } from "react-native";

const PromoBanner = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seu pet limpinho{"\n"}ainda hoje.</Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Chame no WhatsApp →</Text>
      </Pressable>
    </View>
  );
};

export default PromoBanner;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5C928",
    padding: 20,
    gap: 12,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  button: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    padding: 12,
    alignItems: "flex-start",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
  },
});
