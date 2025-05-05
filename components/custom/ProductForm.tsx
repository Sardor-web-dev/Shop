"use client";
import { useState } from "react";

export default function ProductForm() {
  const [form, setForm] = useState({
    name: "",
    content: "",
    price: "",
    imageUrl: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(form),
    });
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <input
        className="w-full p-2 border rounded"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        className="w-full p-2 border rounded"
        placeholder="Content"
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
        required
      />
      <input
        className="w-full p-2 border rounded"
        placeholder="Price"
        type="number"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
        required
      />
      <input
        className="w-full p-2 border rounded"
        placeholder="Image URL"
        value={form.imageUrl}
        onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Добавить продукт
      </button>
    </form>
  );
}
