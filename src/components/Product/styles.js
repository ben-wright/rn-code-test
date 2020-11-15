import { StyleSheet } from 'react-native';

export const ProductStyles = StyleSheet.create({
  productContainer: {
    aspectRatio: 4 / 3,
  },
  productImage: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    height: '100%',
    width: '100%',
    borderRadius: 8,
  },
  productInfoBar: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(40,40,40,0.8)',
    borderRadius: 8,
    padding: 8,
  },
  productInfoContainer: { flex: 1 },
  productMainText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  productPriceContainer: {
    flexDirection: 'row',
  },
  productDiscountedText: {
    textDecorationLine: 'line-through',
    marginLeft: 5,
  },
  productDesc: {
    color: '#BDBDBD',
    fontSize: 12,
    fontWeight: 'normal',
  },
  productProfilePic: {
    width: 24,
    height: 24,
    borderRadius: 24,
  },
});
