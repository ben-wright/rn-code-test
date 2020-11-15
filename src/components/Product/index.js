import React from 'react';
import { Image, Text, View } from 'react-native';
import { ProductStyles as styles } from './styles';
import { getProductPrice } from './helper';

const Product = props => {
  const { data } = props;

  return (
    <View style={styles.productContainer}>
      <Image
        resizeMode="cover"
        style={styles.productImage}
        source={{
          uri: data.image,
        }}
      />
      <View style={styles.productInfoBar}>
        <View style={styles.productInfoContainer}>
          <Text style={styles.productMainText}>{data.name}</Text>
          {getProductPrice(data)}
          <Text style={styles.productDesc}>{data.short_description}</Text>
        </View>
        <Image
          style={styles.productProfilePic}
          source={require('../../../assets/person.png')}
        />
      </View>
    </View>
  );
};

export default Product;
