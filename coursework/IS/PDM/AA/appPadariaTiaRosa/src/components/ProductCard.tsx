import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Produto } from '../types/product';
import formatCurrency from '../utils/currency';
import { colors, spacing } from '../theme/theme';

type ProductCardProps = {
  produto: Produto;
  onPress: () => void;
  onAdd: () => void;
  onRemove?: () => void;
  getQuantity?: (id: string) => number;
  onSetQuantity?: (id: string, quantidade: number) => void;
  compact?: boolean;
};

export default function ProductCard({ produto, onPress, onAdd, onRemove, getQuantity, onSetQuantity, compact = false }: ProductCardProps) {
  const quantity = getQuantity ? getQuantity(produto.id) : 0;
  const hasOffer = (produto as any).oferta === true && (produto as any).precoOferta;
  const oldPrice = hasOffer ? (produto as any).preco : null;
  const offerPrice = hasOffer ? (produto as any).precoOferta : null;

  return (
    <View style={[styles.card, compact && styles.cardCompact]}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <Image source={{ uri: produto.imagem }} style={[styles.image, compact && styles.imageCompact]} />
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <Text style={[styles.nome, compact && styles.nomeCompact]} numberOfLines={1}>
          {produto.nome}
        </Text>
        {hasOffer ? (
          <View>
            <Text style={{ textDecorationLine: 'line-through', color: '#999' }}>{formatCurrency(oldPrice as number)}</Text>
            <Text style={{ color: '#d9534f', fontWeight: '700' }}>{formatCurrency(offerPrice as number)}</Text>
          </View>
        ) : (
          <Text>{formatCurrency(produto.preco)}</Text>
        )}
        {!compact && <Text style={styles.descricao}>{produto.descricao}</Text>}
      </View>
      {compact ? (
        <TouchableOpacity style={[styles.addButton, compact && styles.addButtonCompact]} onPress={onAdd}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>+</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.stepperContainer}>
          <TouchableOpacity style={styles.stepperButton} onPress={onRemove} disabled={!onRemove || quantity <= 0}>
            <Text style={styles.stepperText}>-</Text>
          </TouchableOpacity>
          {onSetQuantity ? (
            <TextInput
              value={String(quantity)}
              onChangeText={(t) => {
                const n = parseInt(t || '0', 10) || 0;
                onSetQuantity(produto.id, n);
              }}
              keyboardType="number-pad"
              style={styles.quantityInput}
            />
          ) : (
            <Text style={styles.quantityText}>{quantity}</Text>
          )}
          <TouchableOpacity style={styles.stepperButton} onPress={onAdd}>
            <Text style={styles.stepperText}>+</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.m,
    backgroundColor: '#fff',
    padding: spacing.m,
    borderRadius: 8,
    elevation: 2,
  },
  cardCompact: {
    padding: spacing.s / 2,
    marginRight: spacing.s,
    width: 220,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 6,
    marginRight: spacing.m,
  },
  imageCompact: {
    width: 72,
    height: 72,
    borderRadius: 8,
    marginRight: spacing.m / 2,
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  nomeCompact: {
    fontSize: 14,
  },
  descricao: {
    color: '#555',
    fontSize: 12,
  },
  addButton: {
    backgroundColor: colors.primary,
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonCompact: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  stepperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepperButton: {
    backgroundColor: colors.primary,
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepperText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  quantityText: {
    marginHorizontal: 8,
    minWidth: 20,
    textAlign: 'center',
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: '#eee',
    paddingHorizontal: 6,
    paddingVertical: 4,
    minWidth: 44,
    textAlign: 'center',
    marginHorizontal: 8,
    borderRadius: 6,
  },
});
