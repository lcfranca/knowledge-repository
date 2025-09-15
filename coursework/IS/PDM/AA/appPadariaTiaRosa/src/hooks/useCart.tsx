import React, { createContext, useContext, useState, ReactNode, ReactElement } from 'react';
import { Produto } from '../types/product';

type CartItem = Produto & { quantidade: number };

type CartContextType = {
  items: CartItem[];
  addToCart: (produto: Produto) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  setQuantity: (id: string, quantidade: number) => void;
  total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }): ReactElement {
  const [items, setItems] = useState<CartItem[]>([]);

  function addToCart(produto: Produto) {
    setItems(prev => {
      const existing = prev.find(p => p.id === produto.id);
      if (existing) {
        return prev.map(p =>
          p.id === produto.id ? { ...p, quantidade: p.quantidade + 1 } : p
        );
      }
      return [...prev, { ...produto, quantidade: 1 }];
    });
  }

  function removeFromCart(id: string) {
    setItems(prev => prev.filter(p => p.id !== id));
  }

  function setQuantity(id: string, quantidade: number) {
    setItems(prev => {
      if (quantidade <= 0) return prev.filter(p => p.id !== id);
      const exists = prev.find(p => p.id === id);
      if (exists) {
        return prev.map(p => p.id === id ? { ...p, quantidade } : p);
      }
      return prev;
    });
  }

  function clearCart() {
    setItems([]);
  }

  const total = items.reduce((sum, p) => sum + p.preco * p.quantidade, 0);
  // prefer precoOferta when present
  const totalWithOffers = items.reduce((sum, p) => {
    const price = (p as any).precoOferta ?? p.preco;
    return sum + price * p.quantidade;
  }, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, setQuantity, total: totalWithOffers }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart deve estar dentro de CartProvider');
  return context;
}
