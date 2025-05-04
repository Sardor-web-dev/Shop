"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginBtns = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex gap-2">
        <button
          onClick={() => signIn()}
          className="w-25 h-10 bg-gray-500 p-1 rounded-lg cursor-pointer hover:bg-gray-700 transition-all"
        >
          Sign In
        </button>
        <button
          onClick={() => router.push("/admin")}
          className="w-25 h-10 bg-gray-500 p-1 rounded-lg cursor-pointer hover:bg-gray-700 transition-all"
        >
          Go to Admin
        </button>
      </div>
    </>
  );
};

export default LoginBtns;
