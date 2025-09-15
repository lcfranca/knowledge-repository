import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Menu from '../screens/Menu';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';
import Product from '../screens/Product';
import OrderSummary from '../screens/OrderSummary';
import PreOrder from '../screens/PreOrder';
import PreOrderSummary from '../screens/PreOrderSummary';
import { Produto } from '../types/product';

export type RootStackParamList = {
  Tabs: undefined;
  Product: { product: Produto };
  OrderSummary: { order?: { items: { id: string; nome: string; preco: number; precoOferta?: number; quantidade: number }[]; total: number } } | undefined;
  PreOrder: undefined;
  PreOrderSummary: { order: { name: string; phone: string; time: string; items: { id: string; qty: number }[] } };
};

import { useCart } from '../hooks/useCart';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function TabNavigator() {
  // read cart to display badge count
  const { items } = useCart();
  const count = items.reduce((s, it) => s + it.quantidade, 0);
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Início" component={Home} />
      <Tab.Screen name="Cardápio" component={Menu} />
      <Tab.Screen name="Carrinho" component={Cart} options={{ tabBarBadge: count > 0 ? count : undefined }} />
      <Tab.Screen name="Sobre Nós" component={Profile} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Tabs">
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{ title: 'Detalhes do Produto' }}
      />
      <Stack.Screen
        name="OrderSummary"
        component={OrderSummary}
        options={{ title: 'Resumo do Pedido' }}
      />
      <Stack.Screen name="PreOrder" component={PreOrder} options={{ title: 'Pré-Encomenda' }} />
      <Stack.Screen name="PreOrderSummary" component={PreOrderSummary} options={{ title: 'Resumo Pré-Encomenda' }} />
    </Stack.Navigator>
  );
}