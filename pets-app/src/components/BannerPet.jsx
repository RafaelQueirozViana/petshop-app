import { StyleSheet, Text, View, Image, Pressable } from "react-native";

const BannerPet = () => {
  return (
    <View style={styles.bannerContainer}>
      <Image
        source={require("../../assets/images/background.jpg")}
        style={styles.image}
      />

      <View style={styles.overlay} />

      <View style={styles.content}>
        <Text style={styles.title}>Banho, tosa e tudo para seu pet.</Text>

        <Pressable
          style={styles.button}
          onPress={() => console.log("Agendar banho")}
        >
          <Text style={styles.buttonText}>Agendar banho →</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default BannerPet;

const styles = StyleSheet.create({
  bannerContainer: {
    height: 360,
    justifyContent: "flex-end",
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#333333",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },

  content: {
    padding: 20,
    gap: 14,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    maxWidth: 320,
  },

  button: {
    height: 48,
    backgroundColor: "#F2AE12",
    justifyContent: "center",
    paddingHorizontal: 18,
    alignSelf: "flex-start",
    borderRadius: 8,
  },

  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#222222",
  },
});
