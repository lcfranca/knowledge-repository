import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import { useCart } from '../hooks/useCart';
import mockProdutos from '../../assets/mock.json';
import { Produto } from '../types/product';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

export default function PreOrder() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [time, setTime] = useState('');
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // only show products with preorder flag
  const options = (mockProdutos as Produto[]).filter((p) => (p as any).preorder === true);

  function changeQty(id: string, delta: number) {
    setQuantities((q) => ({ ...q, [id]: Math.max(0, (q[id] || 0) + delta) }));
  }

  function submit() {
    const order = {
      name,
      phone,
      time,
      items: Object.entries(quantities).filter(([, qty]) => qty > 0).map(([id, qty]) => ({ id, qty })),
    };
    navigation.navigate('PreOrderSummary', { order });
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Pré-Encomenda</Text>
      <TextInput placeholder="Nome" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Telefone" value={phone} onChangeText={setPhone} style={styles.input} />
      <TextInput placeholder="Hora desejada (ex: 09:30)" value={time} onChangeText={setTime} style={styles.input} />

      <Text style={[globalStyles.title, { marginTop: 12 }]}>Opções para encomenda</Text>
      <FlatList
        data={options}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text>{item.nome} - R$ {item.preco}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Button title="-" onPress={() => changeQty(item.id, -1)} />
              <Text style={{ marginHorizontal: 8 }}>{quantities[item.id] || 0}</Text>
              <Button title="+" onPress={() => changeQty(item.id, 1)} />
            </View>
          </View>
        )}
      />

      <Button title="Enviar Pré-Encomenda" onPress={submit} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: { borderWidth: 1, borderColor: '#eee', padding: 8, marginVertical: 6, borderRadius: 6 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 8 },
});
