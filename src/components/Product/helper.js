import React from 'react';
import { Text, View } from 'react-native';
import { ProductStyles as styles } from './styles';

export const formatPrice = price => {
  return '£' + String((price / 100).toFixed(2));
};

export const getProductPrice = (productData, styleOverride) => {
  let priceToReturn = productData.price;

  if (productData.discount) {
    if (productData.discount_type === 'percentage') {
      priceToReturn -= (productData.price * productData.discount) / 100;
    } else if (productData.discount_type === 'amount') {
      priceToReturn -= productData.discount;
    }
    if (priceToReturn) {
      return (
        <View style={styles.productPriceContainer}>
          <Text style={[styles.productMainText, styleOverride]}>
            {formatPrice(priceToReturn)}
          </Text>
          <Text
            style={[
              styles.productMainText,
              styles.productDiscountedText,
              styleOverride,
            ]}>
            {formatPrice(productData.price)}
          </Text>
        </View>
      );
    } else {
      <Text style={styles.productMainText}>Free</Text>;
    }
  }

  priceToReturn = priceToReturn ? formatPrice(priceToReturn) : 'Free';
  return (
    <Text style={[styles.productMainText, styleOverride]}>{priceToReturn}</Text>
  );
};
