import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { globalStyles } from '../styles/global';
import { useCart } from '../hooks/useCart';
import formatCurrency from '../utils/currency';
import mockProdutos from '../../assets/mock.json';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'OrderSummary'>;

export default function OrderSummary({ route }: Props) {
  const { items: cartItems, total: cartTotal, clearCart } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [payment, setPayment] = useState<'Dinheiro' | 'Cartão' | 'Pix'>('Dinheiro');

  // allow the parent to pass an order snapshot
  const snapshot = route.params?.order;
  const items = snapshot?.items ?? cartItems;
  const total = snapshot?.total ?? cartTotal;

  function itemPrice(it: any) {
    // if the product has precoOferta use it
    const prod = (mockProdutos as any).find((p: any) => p.id === it.id) || {};
    return prod.precoOferta ?? it.preco;
  }

  const calculatedTotal = items.reduce((sum, it) => sum + itemPrice(it) * it.quantidade, 0);

  function confirm() {
    if (items.length === 0) {
      Alert.alert('Carrinho vazio', 'Adicione itens antes de finalizar.');
      return;
    }
    if (!name || !phone) {
      Alert.alert('Dados incompletos', 'Por favor informe nome e telefone.');
      return;
    }
    Alert.alert('Pedido enviado', `Obrigado ${name}. Método: ${payment}`, [
      { text: 'OK', onPress: () => {
        // only clear cart if we used cart snapshot (no snapshot passed)
        if (!snapshot) clearCart();
      } },
    ]);
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Resumo do Pedido</Text>

      {items.length === 0 ? (
        <Text style={globalStyles.text}>Nenhum item no pedido.</Text>
      ) : (
        <>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <Text style={styles.nome}>{item.nome} x{item.quantidade}</Text>
                <Text>{formatCurrency(itemPrice(item) * item.quantidade)}</Text>
              </View>
            )}
          />

          <Text style={[globalStyles.title, { marginTop: 12 }]}>Total: {formatCurrency(calculatedTotal)}</Text>

          <Text style={{ marginTop: 12, fontWeight: '600' }}>Dados do cliente</Text>
          <TextInput placeholder="Nome" value={name} onChangeText={setName} style={styles.input} />
          <TextInput placeholder="Telefone" value={phone} onChangeText={setPhone} style={styles.input} />

          <Text style={{ marginTop: 12, fontWeight: '600' }}>Método de Pagamento (mock)</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 }}>
            <Button title="Dinheiro" onPress={() => setPayment('Dinheiro')} color={payment === 'Dinheiro' ? '#27ae60' : undefined} />
            <Button title="Cartão" onPress={() => setPayment('Cartão')} color={payment === 'Cartão' ? '#27ae60' : undefined} />
            <Button title="Pix" onPress={() => setPayment('Pix')} color={payment === 'Pix' ? '#27ae60' : undefined} />
          </View>

          <Button title="Confirmar Pedido" onPress={confirm} color="#2ecc71" />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  nome: { fontWeight: 'bold' },
  input: { borderWidth: 1, borderColor: '#eee', padding: 8, marginVertical: 6, borderRadius: 6 },
});
