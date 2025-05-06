"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const SwitchLang = () => {
  const router = useRouter();

  function handleChange(lang: string): void {
    document.cookie = `locale=${lang}; path=/`;
    router.refresh();
  }

  return (
    <>
      <div className="flex gap-2 ">
        <Button
          className="w-25 h-10 bg-gray-500 p-1 rounded-lg cursor-pointer hover:bg-gray-700 transition-all"
          onClick={() => handleChange("ru")}
        >
          RU
        </Button>
        <Button
          className="w-25 h-10 bg-gray-500 p-1 rounded-lg cursor-pointer hover:bg-gray-700 transition-all"
          onClick={() => handleChange("en")}
        >
          ENG
        </Button>
      </div>
    </>
  );
};

export default SwitchLang;
