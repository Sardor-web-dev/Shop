"use client";

const Form = () => {
  const postData = async (e: any) => {
    e.preventDefault();

    const fm = new FormData(e.currentTarget);
    const nameRu = fm.get("nameRu");
    const nameEn = fm.get("nameEn");
    const contentRu = fm.get("contentRu");
    const contentEn = fm.get("contentEn");
    const priceStr = fm.get("price");
    const price = parseInt(priceStr as string);
    const imageUrl = fm.get("imageUrl");

    const response = await fetch("/api/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nameRu,
        nameEn,
        contentRu,
        contentEn,
        price,
        imageUrl,
      }),
    });

    if (response.ok) {
      console.log("Post created successfully");
    } else {
      const error = await response.json();
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Create post by client side</h1>
      <form onSubmit={postData} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-lg mb-2">
            Загаловок или название(на русском)
          </label>
          <input
            type="text"
            id="nameRu"
            name="nameRu"
            placeholder="Enter your post title"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="title" className="block text-lg mb-2">
            Title or name(on english)
          </label>
          <input
            type="text"
            id="nameEn"
            name="nameEn"
            placeholder="Enter your post title"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-lg mb-2">
            Контент(на русском)
          </label>
          <textarea
            id="contentRu"
            name="contentRu"
            placeholder="Write your post content here..."
            rows={6}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-lg mb-2">
            Content(on english)
          </label>
          <textarea
            id="contentEn"
            name="contentEn"
            placeholder="Write your post content here..."
            rows={6}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-lg mb-2">
            Цена(Price)
          </label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Write your post content here..."
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-lg mb-2">
            Image
          </label>
          <input
            id="ImageUrl"
            name="imageUrl"
            placeholder="Write your post content here..."
            type="string"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default Form;
