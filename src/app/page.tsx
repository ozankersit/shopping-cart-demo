import Products from "@/components/products";
import SkeletonLoader from "@/components/skeleton-loader/skeleton-loader";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<SkeletonLoader/>}>
      <Products/>
    </Suspense>
    
  );
}
