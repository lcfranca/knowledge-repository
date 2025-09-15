import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import { useCart } from '../hooks/useCart';
import { navigate } from '../navigation/rootNavigation';
import { TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import formatCurrency from '../utils/currency';

export default function Cart() {
  const { items, removeFromCart, total, setQuantity } = useCart();

  const { clearCart } = useCart();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Seu Carrinho</Text>
      {items.length === 0 ? (
        <Text style={globalStyles.text}>Nenhum item adicionado ainda.</Text>
      ) : (
        <>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              const unitPrice = (item as any).precoOferta ?? item.preco;
              return (
                <View style={styles.item}>
                  <View>
                    <Text style={styles.nome}>{item.nome}</Text>
                    {(item as any).precoOferta ? (
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ textDecorationLine: 'line-through', color: '#999', marginRight: 8 }}>
                          {formatCurrency(item.preco)}
                        </Text>
                        <Text style={{ color: '#d9534f', fontWeight: '700' }}>{formatCurrency((item as any).precoOferta)}</Text>
                      </View>
                    ) : null}
                    <View style={{ marginTop: 6, flexDirection: 'row', alignItems: 'center' }}>
                      <Text>Quantidade: </Text>
                      <TextInput
                        value={String(item.quantidade)}
                        onChangeText={(t) => {
                          const n = parseInt(t || '0', 10) || 0;
                          setQuantity(item.id, n);
                        }}
                        keyboardType="number-pad"
                        style={{ borderWidth: 1, borderColor: '#eee', padding: 6, width: 64, textAlign: 'center' }}
                      />
                    </View>
                  </View>
                  <View style={{ alignItems: 'flex-end' }}>
                    <Text>{formatCurrency(unitPrice * item.quantidade)}</Text>
                    <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                      <Text style={styles.remover}>Remover</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
          <Text style={styles.total}>Total: {formatCurrency(total)}</Text>
          <View style={{ marginTop: 12 }}>
            <Button
              title="Finalizar Compra"
              color="#2ecc71"
              onPress={() => {
                const order = {
                  items: items.map(it => ({ id: it.id, nome: it.nome, preco: it.preco, precoOferta: (it as any).precoOferta, quantidade: it.quantidade })),
                  total,
                };

                // web: use native confirm dialog to ensure the flow continues
                if (typeof window !== 'undefined' && typeof window.confirm === 'function') {
                  const ok = window.confirm('Deseja finalizar a compra e ir para o resumo do pedido?');
                  if (ok) {
                    if (typeof navigate === 'function') navigate('OrderSummary', { order });
                    else navigation.navigate('OrderSummary', { order });
                  }
                  return;
                }

                // native fallback
                Alert.alert('Confirmar compra', 'Deseja finalizar a compra e ir para o resumo do pedido?', [
                  { text: 'Cancelar', style: 'cancel' },
                  { text: 'Sim', onPress: () => {
                    if (typeof navigate === 'function') navigate('OrderSummary', { order });
                    else navigation.navigate('OrderSummary', { order });
                  } },
                ]);
              }}
            />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  nome: {
    fontSize: 16,
  },
  remover: {
    color: 'red',
  },
  total: {
    marginTop: 16,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
