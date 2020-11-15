import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text, View } from 'react-native';
import Product from '../../components/Product';
import products from '../../../assets/products.json';

const Market = () => {
  let productCategories = {};
  products.forEach(product => {
    if (product.category in productCategories) {
      productCategories[product.category].splice(product.order, 0, product);
    } else {
      productCategories[product.category] = [product];
    }
  });

  const renderProductCategory = ({ item }) => {
    return (
      <View style={styles.categoryRowContainer}>
        <Text style={styles.categoryTitle}>{item[0].category}</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={item}
          renderItem={data => <Product data={data.item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={Object.values(productCategories)}
        renderItem={renderProductCategory}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default Market;

const styles = StyleSheet.create({
  categoryRowContainer: {
    flex: 1,
    height: 320,
    marginBottom: 14,
    paddingLeft: 6,
  },
  categoryTitle: {
    fontSize: 20,
    marginBottom: 4,
    marginLeft: 6,
    fontWeight: 'bold',
  },
});
