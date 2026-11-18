import { StyleSheet, Text, View } from "react-native";
import ServiceCard from "./ServiceCard";

const services = [
  {
    id: 1,
    name: "Banho",
    image: require("../../../assets/images/banho.jpg"),
  },
  {
    id: 2,
    name: "Tosa",
    image: require("../../../assets/images/cachorroTosa.jpg"),
  },
  {
    id: 3,
    name: "Hidratação",
    image: require("../../../assets/images/hidratacao.jpg"),
  },
  {
    id: 4,
    name: "Leva e traz",
    image: require("../../../assets/images/transporteCachorro.jpg"),
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
    display: "grid",
    gridTemplateColumns: "1fr 1fr",

    gap: 12,
  },
});
