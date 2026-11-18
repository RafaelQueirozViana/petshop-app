import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";

const BannerPet = () => {
  return (
    <View style={styles.bannerContainer}>
      <Image
        source={require("../../assets/images/background.jpg")}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title}>Banho, tosa e tudo para seu pet.</Text>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Agendar banho →</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default BannerPet;

const styles = StyleSheet.create({
  bannerContainer: {
    height: 340,
    justifyContent: "flex-end",
    overflow: "hidden",
    position: "relative",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },

  content: {
    padding: 16,
    gap: 12,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
  },

  button: {
    height: 48,
    backgroundColor: "#F2AE12",
    justifyContent: "center",
    paddingHorizontal: 16,
    alignSelf: "flex-start",
    borderRadius: 8,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
