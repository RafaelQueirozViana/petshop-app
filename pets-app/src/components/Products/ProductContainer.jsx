import { StyleSheet, Text, View, ScrollView } from "react-native";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Ração 10kg",
    price: "R$ 189,90",
    image: require("../../../assets/images/produto1.webp"),
  },
  {
    id: 2,
    name: "Arranhador",
    price: "R$ 129,99",
    image: require("../../../assets/images/produto2.jpg"),
  },
  {
    id: 3,
    name: "Brinquedo Pet",
    price: "R$ 19,90",
    image: require("../../../assets/images/produto3.jpg"),
  },
];

const ProductContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MAIS VENDIDOS</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.productContainer}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductContainer;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
    marginHorizontal: 16,
    color: "#D69C00",
  },

  productContainer: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 16,
  },
});
