"use client";
import { ShoppingBasket } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartItem from "../../cart-item/cart-item";
import { use } from "react";
import { CartContext } from "@/context/product-context";
import EmptyCart from "./empty-cart";

export default function Header() {
  const cartContext = use(CartContext);
  if (!cartContext) {
    throw new Error("cartContext is undefined");
  }
  const { cart } = cartContext;
  const isCartEmpty = cart.length === 0;
  return (
    <header className="flex justify-end relative">
      <Sheet>
        <SheetTrigger>
          <span className="absolute -top-3 right-7">{cart.length}</span>
          <ShoppingBasket size={32} className="cursor-pointer" />
        </SheetTrigger>
        {!isCartEmpty ? (
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Cart</SheetTitle>
            </SheetHeader>
            <CartItem />
          </SheetContent>
        ) : (
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Cart</SheetTitle>
            </SheetHeader>
            <EmptyCart/>
          </SheetContent>
        )}
      </Sheet>
    </header>
  );
}
