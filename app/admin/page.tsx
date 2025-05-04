import { getTranslations } from "next-intl/server";

export default async function AdminPage() {
  const t = await getTranslations("AdminPage");

  return (
    <>
      <div>
        <h1>{t("title")}</h1>
        <p>{t("description")}</p>
        <p>{t("addProduct")}</p>
        <form></form>
      </div>
    </>
  );
}
