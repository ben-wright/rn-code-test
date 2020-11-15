import React, { useState } from 'react';
import {
  Image,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import { ProductStyles as styles } from './styles';
import { getProductPrice } from './helper';

const Product = props => {
  const { data, navigation } = props;
  const [imageZoom, setImageZoom] = useState(new Animated.Value(1));

  const onPressIn = () => {
    Animated.spring(imageZoom, {
      toValue: 2,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(imageZoom, {
      toValue: 1,
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      style={styles.productContainer}
      onPress={() => {
        navigation.navigate('Market', {
          screen: 'SingleProduct',
          params: {
            product: data,
          },
        });
      }}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      <View style={[styles.productContainer, styles.productInnerContainer]}>
        <View style={styles.productImageContainer}>
          <Animated.Image
            resizeMode="cover"
            style={[styles.productImage, { transform: [{ scale: imageZoom }] }]}
            source={{
              uri: data.image,
            }}
          />
        </View>
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
    </TouchableWithoutFeedback>
  );
};

export default Product;
