"use client"
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { use } from "react";
import { CartContext } from "@/context/product-context";

export type ProductProps = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};

export default function ProductCard({
  id,
  name,
  price,
  description,
  imageUrl,
}: ProductProps) {

  const formattedPrice = new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(price);

  const cartContext = use(CartContext)

  if (!cartContext) {
    throw new Error("cartContext is undefined");
  }

  const { addToCart } = cartContext;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="mx-auto">
        <Image src={imageUrl} width={300} height={300} alt={name} />
      </CardContent>
      <CardFooter className="flex justify-between flex-wrap">
        {/* <Button variant="outline">View</Button> */}
        <Button variant={"ghost"}>{formattedPrice}</Button>
        <Button onClick={() => addToCart({id:Number(id), name, price})}>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
