import { Card } from "@/components/ui/card";
import prisma from "@/src/lib/prisma";
import { getLocale, getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("HomePage");
  const products = await prisma.product.findMany();
  console.log(products);
  const locale = await getLocale();

  const getLocalized = (product: any) => ({
    ...product,
    name: locale === "ru" ? product.nameRu : product.nameEn,
    content: locale === "ru" ? product.contentRu : product.contentEn,
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-10 mt-5">{t("title")}</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => {
          const p = getLocalized(product);
          return (
            <Card
              className="flex flex-col p-5 items-center justify-center bg-gray-500 rounded-xl shadow-md boder-2 border-gray-600 text-black cursor-pointer hover:bg-gray-700 transition-all hover:text-white hover:scale-105"
              key={product.id}
            >
              <h2>{p.name}</h2>
              <p>{p.content}</p>
              <p>{product.price}</p>
              <img
                className="w-100 rounded-xl"
                src={product.imageUrl ?? ""}
                alt={p.name}
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
}
