import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import productService from '../services/productService';
import { globalStyles } from '../styles/global';
import { Produto } from '../types/product';
import mockProdutos from '../../assets/mock.json';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import { useCart } from '../hooks/useCart';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

export default function Menu() {
  const [produtos, setProdutos] = useState<Produto[] | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart, removeFromCart, items } = useCart();
  const { setQuantity } = useCart();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    let mounted = true;
    productService
      .getProdutos()
      .then((res) => {
        if (!mounted) return;
        // prefer service result, but fallback to bundled mock when empty
        if (res && res.length > 0) setProdutos(res);
        else setProdutos(mockProdutos);
      })
      .catch(() => {
        if (!mounted) return;
        setProdutos([]);
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}> 
        <Text>Carregando cardápio...</Text>
      </View>
    );
  }

  const list = produtos ?? [];

  return (
    <View style={styles.container}>
      <SearchBar onSearch={(q) => handleSearch(q)} />
      <Text style={styles.header}>Nosso Cardápio</Text>
      {list.length === 0 ? (
        <Text style={globalStyles.text}>Nenhum produto encontrado.</Text>
      ) : (
        <FlatList
          data={list}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCard
              produto={item}
              onPress={() => navigation.navigate('Product', { product: item })}
              onAdd={() => addToCart(item)}
              onRemove={() => removeFromCart(item.id)}
              getQuantity={(id) => items.find((it) => it.id === id)?.quantidade ?? 0}
              onSetQuantity={setQuantity}
            />
          )}
        />
      )}
    </View>
  );

  async function handleSearch(q: string) {
    if (!q || q.trim() === '') {
      setProdutos(mockProdutos);
      return;
    }
    try {
      const results = await productService.buscarProdutos(q);
      setProdutos(results || []);
    } catch (err) {
      console.error('[Menu] buscarProdutos error', err);
      setProdutos(mockProdutos.filter((p) => p.nome.toLowerCase().includes(q.toLowerCase())));
    }
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
