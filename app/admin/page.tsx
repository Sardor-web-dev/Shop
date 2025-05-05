import { getTranslations } from "next-intl/server";
import AdminBtns from "@/components/custom/AdminBtns";
import prisma from "@/src/lib/prisma";
import ProductForm from "@/components/custom/ProductForm";
import ProductList from "@/components/custom/ProductList";

export default async function AdminPage() {
  const t = await getTranslations("AdminPage");
  const products = await prisma.product.findMany();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
      <p className="mb-2">{t("description")}</p>
      <AdminBtns />
      <ProductForm />
      <ProductList products={products} />
    </div>
  );
}
