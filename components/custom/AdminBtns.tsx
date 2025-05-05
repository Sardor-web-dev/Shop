"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

const AdminBtns = () => {
  const t = useTranslations("HomePage");
  const router = useRouter();
  return (
    <>
      <Button
        onClick={() => router.push("/")}
        className="w-35 h-10 bg-gray-500 text-white p-1 rounded-lg cursor-pointer hover:bg-gray-700 transition-all"
      >
        {t("btn4")}
      </Button>
    </>
  );
};

export default AdminBtns;
