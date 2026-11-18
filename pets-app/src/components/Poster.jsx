import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Poster = () => {
  return (
    <View style={styles.posterContainer}>
      <Image
        source={require("../../assets/images/poster-petshop.jpg")}
        style={styles.posterImage}
      />
    </View>
  );
};

export default Poster;

const styles = StyleSheet.create({
  posterContainer: {
    position: "relative",
  },
  posterImage: {
    window: "100%",
    position: "absolute",
  },
});
