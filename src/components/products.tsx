// import ProductCard, {
//   ProductProps,
// } from "@/components/product-card/product-card";

// export default async function Products() {
//   const WEB_URL = process.env.NEXT_LOCAL_WEB_URL;
//   async function getProducts(): Promise<ProductProps[]> {
//     const res = await fetch(`http://localhost:3000/api/products`);
//     const data = await res.json();
//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     return data.products;
//   }
//   const data = await getProducts();
//   return (
//     <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-5">
//       {data.map((item) => (
//         <ProductCard
//           id={item.id}
//           key={item.id}
//           name={item.name}
//           price={item.price}
//           description={item.description}
//           imageUrl={item.imageUrl}
//         />
//       ))}
//     </div>
//   );
// }
