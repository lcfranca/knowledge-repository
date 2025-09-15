import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import { useCart } from '../hooks/useCart';
import productService from '../services/productService';
import { Produto } from '../types/product';
import mockProdutos from '../../assets/mock.json';
import { spacing } from '../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

export default function Home() {
  const { addToCart, removeFromCart, items } = useCart();
  const { setQuantity } = useCart();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [produtos, setProdutos] = useState<Produto[] | null>(null);
  const [loading, setLoading] = useState(true);

  // keep a small highlights carousel for marketing, but show business info instead of full list
  useEffect(() => {
    let mounted = true;
    productService
      .getProdutos()
      .then((res) => {
        if (!mounted) return;
        // prefer service results when non-empty, otherwise fallback to bundled mock
        setProdutos((res && res.length > 0) ? res : (mockProdutos as any));
      })
      .catch(() => {
        if (!mounted) return;
        setProdutos(mockProdutos as any);
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
      <View style={[globalStyles.container, { justifyContent: 'center', alignItems: 'center' }]}> 
        <ActivityIndicator size="large" color="#c0392b" />
      </View>
    );
  }

  const list: Produto[] = (produtos && produtos.length > 0) ? produtos : (mockProdutos as any);
  const destaques = list.slice(0, 4);

  // Offer banner + compacto destaques
  const ofertas = list.filter((p) => (p as any).oferta === true);

  return (
    <View style={globalStyles.container}>
  <Image source={{ uri: 'https://ricca.com.br/files/2023/03/passos-para-criar-uma-vitrine-de-padaria-irresistivel_1920x1080.png' }} style={{ width: '100%', height: 160, borderRadius: 10, marginBottom: spacing.m }} />

      <Text style={[globalStyles.title, { textAlign: 'left' }]}>Ofertas da Semana</Text>
      <View style={{ marginBottom: spacing.m }} />
      <FlatList
        data={ofertas}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={globalStyles.text}>Nenhuma oferta no momento.</Text>}
        renderItem={({ item }) => (
          <View style={{ flex: 1, padding: spacing.s / 2 }}>
            <ProductCard
              produto={item}
              onPress={() => navigation.navigate('Product', { product: item })}
              onAdd={() => addToCart(item)}
              compact={false}
              getQuantity={(id) => items.find((it) => it.id === id)?.quantidade ?? 0}
              onSetQuantity={setQuantity}
            />
          </View>
        )}
        numColumns={2}
        contentContainerStyle={{ paddingVertical: spacing.s }}
      />

      <TouchableOpacity style={{ marginTop: 16, backgroundColor: '#2ecc71', padding: 12, borderRadius: 8, alignItems: 'center' }} onPress={() => navigation.navigate('PreOrder')}>
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Fazer Encomenda</Text>
      </TouchableOpacity>

    </View>
  );
}
