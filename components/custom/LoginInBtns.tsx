"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginBtns = () => {
  const router = useRouter();
  const session = useSession();
  // Fix the bug with btns
  return (
    <>
      <div className="flex gap-2">
        {session && (
          <>
            <button
              onClick={() => signOut()}
              className="w-25 h-10 bg-gray-500 p-1 rounded-lg cursor-pointer hover:bg-gray-700 transition-all"
            >
              Sign Out
            </button>
            <button
              onClick={() => router.push("/admin")}
              className="w-25 h-10 bg-gray-500 p-1 rounded-lg cursor-pointer hover:bg-gray-700 transition-all"
            >
              Go to Admin
            </button>
          </>
        )}
        {!session && (
          <button
            onClick={() => signIn()}
            className="w-25 h-10 bg-gray-500 p-1 rounded-lg cursor-pointer hover:bg-gray-700 transition-all"
          >
            Sign In
          </button>
        )}
      </div>
    </>
  );
};

export default LoginBtns;
