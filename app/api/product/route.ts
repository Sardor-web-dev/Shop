import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/src/lib/prisma";

export async function POST(request: Request) {
  const { nameRu, nameEn, contentRu, contentEn, price, imageUrl } =
    await request.json();

  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin: any = await prisma.admin.findUnique({
    where: {
      email: session.user?.email || "",
    },
  });
  if (!admin) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  if (!nameRu || !nameEn || !contentRu || !contentEn) {
    return NextResponse.json(
      { error: "Title and content are required" },
      { status: 400 }
    );
  }

  try {
    const post = await prisma.product.create({
      data: {
        nameRu,
        nameEn,
        contentRu,
        contentEn,
        price,
        imageUrl,
        adminId: admin.id,
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Server error:", error); // ← добавь это
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
