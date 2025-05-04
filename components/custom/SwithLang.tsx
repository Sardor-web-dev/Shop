"use client";
import { useRouter } from "next/navigation";

const SwitchLang = () => {
  const router = useRouter();

  function handleChange(lang: string): void {
    document.cookie = `locale=${lang}; path=/`;
    router.refresh();
  }

  return (
    <>
      <div className="flex gap-2 ">
        <button
          className="w-25 h-10 bg-gray-500 p-1 rounded-lg cursor-pointer hover:bg-gray-700 transition-all"
          onClick={() => handleChange("ru")}
        >
          ru
        </button>
        <button
          className="w-25 h-10 bg-gray-500 p-1 rounded-lg cursor-pointer hover:bg-gray-700 transition-all"
          onClick={() => handleChange("en")}
        >
          en
        </button>
      </div>
    </>
  );
};

export default SwitchLang;
