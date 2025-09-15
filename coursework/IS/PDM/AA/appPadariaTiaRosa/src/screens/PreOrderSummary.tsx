import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'PreOrderSummary'>;

export default function PreOrderSummary({ route, navigation }: Props) {
  const { order } = route.params;

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Resumo da Pré-Encomenda</Text>
      <Text>Nome: {order.name}</Text>
      <Text>Telefone: {order.phone}</Text>
      <Text>Hora: {order.time}</Text>

      <Text style={{ marginTop: 12, fontWeight: '600' }}>Itens</Text>
      {order.items.map((it: any) => (
        <Text key={it.id}>{it.id} x {it.qty}</Text>
      ))}

      <Button title="Concluir" onPress={() => navigation.popToTop()} />
    </View>
  );
}
