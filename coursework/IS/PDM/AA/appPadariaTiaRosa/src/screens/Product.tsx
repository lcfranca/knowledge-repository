import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation';
import { useCart } from '../hooks/useCart';
import { spacing, fontSizes, colors } from '../theme/theme';
import formatCurrency from '../utils/currency';

type RouteProps = RouteProp<RootStackParamList, 'Product'>;

export default function Product() {
  const { params } = useRoute<RouteProps>();
  const { addToCart } = useCart();

  return (
    <View style={styles.container}>
      <Image source={{ uri: params.product.imagem }} style={styles.image} />
      <Text style={styles.name}>{params.product.nome}</Text>
      <Text style={styles.price}>{formatCurrency(params.product.preco)}</Text>
      <Text style={styles.description}>{params.product.descricao}</Text>

      <Button
        title="Adicionar ao Carrinho"
        onPress={() => addToCart(params.product)}
        color={colors.primary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.m,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: spacing.m,
  },
  name: {
    fontSize: fontSizes.large,
    fontWeight: 'bold',
    marginBottom: spacing.s,
  },
  price: {
    fontSize: fontSizes.medium,
    marginBottom: spacing.s,
    color: colors.secondary,
  },
  description: {
    fontSize: fontSizes.small,
    color: colors.muted,
    marginBottom: spacing.m,
  },
});
