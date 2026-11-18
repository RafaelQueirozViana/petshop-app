import { StyleSheet, Text, View, Image } from "react-native";

const ServiceCard = ({ service, imageLocal }) => {
  return (
    <View style={styles.card}>
      <Image source={imageLocal} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.serviceName}>{service}</Text>
      </View>
    </View>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },

  image: {
    width: "100%",
    height: 130,
    resizeMode: "cover",
  },

  info: {
    padding: 12,
    alignItems: "center",
  },

  serviceName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333333",
  },
});
