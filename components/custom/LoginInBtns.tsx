"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

const LoginBtns = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const t = useTranslations("HomePage");
  return (
    <>
      <div className="flex gap-2">
        {session && (
          <>
            <Button
              onClick={() => signOut()}
              className="w-25 h-10 bg-gray-500 p-1 rounded-lg cursor-pointer hover:bg-gray-700 transition-all"
            >
              {t("btn2")}
            </Button>
            <Button
              onClick={() => router.push("/admin")}
              className="w-30 h-10 bg-gray-500 p-1 rounded-lg cursor-pointer hover:bg-gray-700 transition-all"
            >
              {t("btn3")}
            </Button>
          </>
        )}
        {!session && (
          <Button
            onClick={() => signIn()}
            className="w-25 h-10 bg-gray-500 p-1 rounded-lg cursor-pointer hover:bg-gray-700 transition-all"
          >
            {t("btn1")}
          </Button>
        )}
      </div>
    </>
  );
};

export default LoginBtns;
