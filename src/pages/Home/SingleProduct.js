import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  SafeAreaView,
  Image,
  View,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';

const SingleProduct = ({ route, navigation }) => {
  const { product } = route.params;
  console.log(product);
  return (
    <ScrollView style={styles.productHeader}>
      <TouchableOpacity
        style={styles.backArrow}
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          resizeMode="contain"
          style={styles.backArrowImage}
          source={require('../../../assets/left-arrow.png')}
        />
      </TouchableOpacity>

      <Image style={styles.productImage} source={{ uri: product.image }} />
      <View style={[styles.productImageOverlay, styles.productImage]} />
      <SafeAreaView>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{product.name}</Text>
          <Text>{product.price}</Text>
          <Text>{product.description}</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SingleProduct;

const styles = StyleSheet.create({
  productHeader: {
    flex: 1,
  },
  backArrow: {
    position: 'absolute',
    top: 50,
    left: 12,
    zIndex: 20,
  },
  backArrowImage: {
    height: 25,
    width: 25,
  },
  productImage: {
    width: '100%',
    height: 300,
  },
  productImageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'black',
    opacity: 0.4,
    zIndex: 10,
  },
  contentContainer: {
    padding: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});
