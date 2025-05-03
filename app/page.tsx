import prisma from "@/src/lib/prisma";
import { Product } from "@/types/product";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("HomePage");
  const products = await prisma.product.findMany();
  console.log(products);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-blue-500">
      <h1>{t("title")}</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product: Product) => (
          <div
            className="flex flex-col items-center justify-center p-4 bg-white rounded shadow-md boder-2 border-gray-600 text-black"
            key={product.id}
          >
            <h2>{product.name}</h2>
            <p>{product.content}</p>
            <p>{product.price}</p>
            <img src={product.imageUrl ?? ""} alt={product.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
