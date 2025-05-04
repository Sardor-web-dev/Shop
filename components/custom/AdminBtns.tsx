"use client"
import { useRouter } from "next/navigation";

const AdminBtns = () => {
    const router = useRouter();
    return (
      <>
        <button
          onClick={() => router.push("/")}
          className="w-25 h-10 bg-gray-500 p-1 rounded-lg cursor-pointer hover:bg-gray-700 transition-all"
        >
          Go to Home
        </button>
      </>
    );
}
 
export default AdminBtns;