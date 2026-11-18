import { StyleSheet, View, ScrollView, StatusBar } from "react-native";

import Header from "../components/Header";
import BannerPet from "../components/BannerPet";
import ServiceContainer from "../components/Services/ServiceContainer";
import ProductContainer from "../components/Products/ProductContainer";
import Poster from "../components/Poster";
import PromoBanner from "../components/PromoBanner";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <Header />

      <ScrollView showsVerticalScrollIndicator={false}>
        <BannerPet />

        <ServiceContainer />

        <ProductContainer />

        <Poster />

        <PromoBanner />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
