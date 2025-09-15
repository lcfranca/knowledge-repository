import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation';
import { navigationRef } from './navigation/rootNavigation';
import { StatusBar } from 'expo-status-bar';
import { CartProvider } from './hooks/useCart';

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer ref={navigationRef}>
        <StatusBar style="auto" />
        <Navigation />
      </NavigationContainer>
    </CartProvider>
  );
}
