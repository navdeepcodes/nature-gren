"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface CartItem {
  id: string;
  slug: string;
  name: string;
  image_url: string | null;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];

  addItem: (
    item: Omit<CartItem, "quantity">
  ) => void;

  removeItem: (id: string) => void;

  updateQuantity: (
    id: string,
    quantity: number
  ) => void;

  clear: () => void;
}

const CartContext =
  createContext<CartContextType | null>(null);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");

    if (stored) {
      setItems(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(items)
    );
  }, [items]);

  function addItem(
    item: Omit<CartItem, "quantity">
  ) {
    setItems((current) => {
      const existing = current.find(
        (p) => p.id === item.id
      );

      if (existing) {
        return current.map((p) =>
          p.id === item.id
            ? {
                ...p,
                quantity: p.quantity + 1,
              }
            : p
        );
      }

      return [
        ...current,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  }

  function removeItem(id: string) {
    setItems((items) =>
      items.filter((i) => i.id !== id)
    );
  }

  function updateQuantity(
    id: string,
    quantity: number
  ) {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }

    setItems((items) =>
      items.map((i) =>
        i.id === id
          ? {
              ...i,
              quantity,
            }
          : i
      )
    );
  }

  function clear() {
    setItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clear,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}