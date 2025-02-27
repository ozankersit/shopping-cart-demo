"use client";
import React from "react";
import { CartProvider } from "./context/product-context";

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return <CartProvider>{children}</CartProvider>;
}
