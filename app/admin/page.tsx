import { getTranslations } from "next-intl/server";
import AdminBtns from "@/components/custom/AdminBtns";
import prisma from "@/src/lib/prisma";
import ProductList from "@/components/custom/ProductList";
import Form from "./NewClient";

export default async function AdminPage() {
  const t = await getTranslations("AdminPage");
  const products = await prisma.product.findMany();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
      <p className="mb-2">{t("description")}</p>
      <AdminBtns />
      {/* <ProductForm /> */}
      <Form />
      <ProductList products={products} />
    </div>
  );
}
