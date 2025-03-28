import ProductCard, {
  ProductProps,
} from "@/components/product-card/product-card";
import { Suspense } from "react";
import SkeletonLoader from "./skeleton-loader/skeleton-loader";

export default async function Products() {
  const WEB_URL = process.env.NEXT_LOCAL_WEB_URL;
  async function getProducts(): Promise<ProductProps[]> {
    const res = await fetch(`${WEB_URL}/api/products`, { cache: "no-store" });
    const data = await res.json();
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return data.products;
  }
  const data = await getProducts();
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-5">
      <Suspense fallback={<SkeletonLoader />}>
        {data.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      </Suspense>
    </div>
  );
}
