"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { VariantSize } from "@atelier-inkstar/catalog";

export type CartItem = {
  productId: string;
  name: string;
  image: string;
  baseSku: string;
  size: VariantSize;
  sku: string;
  price: number;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (sku: string) => void;
  setQuantity: (sku: string, quantity: number) => void;
  clearCart: () => void;
  hydrated: boolean;
};

const STORAGE_KEY = "atelier-inkstar-shop-cart";

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[];
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {
      // ignore corrupt storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const addItem = useCallback(
    (item: Omit<CartItem, "quantity">, quantity = 1) => {
      setItems((current) => {
        const existing = current.find((entry) => entry.sku === item.sku);
        if (existing) {
          return current.map((entry) =>
            entry.sku === item.sku
              ? { ...entry, quantity: entry.quantity + quantity }
              : entry,
          );
        }
        return [...current, { ...item, quantity }];
      });
    },
    [],
  );

  const removeItem = useCallback((sku: string) => {
    setItems((current) => current.filter((entry) => entry.sku !== sku));
  }, []);

  const setQuantity = useCallback((sku: string, quantity: number) => {
    setItems((current) =>
      current
        .map((entry) =>
          entry.sku === sku ? { ...entry, quantity: Math.max(0, quantity) } : entry,
        )
        .filter((entry) => entry.quantity > 0),
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    return {
      items,
      itemCount,
      subtotal,
      addItem,
      removeItem,
      setQuantity,
      clearCart,
      hydrated,
    };
  }, [items, addItem, removeItem, setQuantity, clearCart, hydrated]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
