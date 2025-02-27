import { use } from "react";
import { CartContext } from "@/context/product-context";
import { Minus, Plus, X } from "lucide-react";

export default function CartItem() {
  const cartContext = use(CartContext);

  if (!cartContext) {
    throw new Error("cartContext is undefined");
  }
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    cartContext;

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedPrice = new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(totalPrice);

  const isCartEmpty = cart.length === 0;

  return (
    <div className="p-4 flex flex-col gap-2">
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center border-b border-t justify-between py-1 flex-wrap"
        >
          <X
            onClick={() => removeFromCart(item.id)}
            size={16}
            className="cursor-pointer"
          />
          <span className="whitespace-nowrap">{item.name}</span>
          <span className="border p-1">{item.price}</span>
          <div className="flex items-center gap-2">
            <Plus
              onClick={() => increaseQuantity(item.id)}
              size={16}
              className="cursor-pointer"
            />
            <span>{item.quantity}</span>
            <Minus
              onClick={() => decreaseQuantity(item.id)}
              size={16}
              className="cursor-pointer"
            />
          </div>
        </div>
      ))}
      {!isCartEmpty ? <div className="group mt-3">
        <span>Total:</span>
        <span className="group-hover:underline">{formattedPrice}</span>
      </div> : null}
    </div>
  );
}
