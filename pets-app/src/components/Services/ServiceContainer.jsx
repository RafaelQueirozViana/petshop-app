import { StyleSheet, Text, View } from "react-native";
import ServiceCard from "./ServiceCard";

const services = [
  {
    id: 1,
    name: "Banho",
    image: require("../../assets/images/banho.png"),
  },
  {
    id: 2,
    name: "Tosa",
    image: require("../../assets/images/tosa.png"),
  },
  {
    id: 3,
    name: "Hidratação",
    image: require("../../assets/images/hidratacao.png"),
  },
  {
    id: 4,
    name: "Leva e traz",
    image: require("../../assets/images/leva-e-traz.png"),
  },
];

const ServiceContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SERVIÇOS</Text>

      <View style={styles.serviceContainer}>
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service.name}
            imageLocal={service.image}
          />
        ))}
      </View>
    </View>
  );
};

export default ServiceContainer;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#D69C00",
  },

  serviceContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
  },
});