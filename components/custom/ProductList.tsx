"use client";

export default function ProductList({ products }: { products: any[] }) {
  const handleDelete = async (id: string) => {
    await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    window.location.reload();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="p-4 border rounded shadow-md flex flex-col gap-2"
        >
          <h2 className="font-bold">{product.name}</h2>
          <p>{product.content}</p>
          <p>${product.price}</p>
          <img
            src={product.imageUrl}
            className="h-40 object-cover"
            alt={product.name}
          />
          <button
            onClick={() => handleDelete(product.id)}
            className="text-red-500 hover:underline"
          >
            Удалить
          </button>
        </div>
      ))}
    </div>
  );
}
