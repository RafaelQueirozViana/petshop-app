import { StyleSheet, Text, View, Image, Pressable } from "react-native";

const ProductCard = ({ name, price, image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>

        <Text style={styles.price}>{price}</Text>

        <Pressable
          style={styles.button}
          onPress={() => console.log(`Produto selecionado: ${name}`)}
        >
          <Text style={styles.buttonText}>Comprar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    width: 180,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },

  image: {
    width: "100%",
    height: 160,
    resizeMode: "contain",
    backgroundColor: "#FFFFFF",
  },

  info: {
    padding: 12,
    gap: 8,
  },

  name: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333333",
  },

  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#D69C00",
  },

  button: {
    backgroundColor: "#F2AE12",
    padding: 10,
    alignItems: "center",
    borderRadius: 6,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
