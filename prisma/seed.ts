import { PrismaClient } from "../src/app/generated/prisma";
const prisma = new PrismaClient();

async function main() {
  await prisma.admin.create({
    data: {
      name: "Admin One",
      email: "admin@example.com",
      password: "securepassword", // В реальном проекте обязательно хэшируй
      products: {
        create: [
          {
            name: "iPhone 16 Pro Max",
            content: "Последняя модель от Apple",
            price: 1499.99,
            imageUrl:
              "https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75",
          },
          {
            name: "Samsung Galaxy S25 Ultra",
            content: "Флагман от Samsung",
            price: 1399.99,
            imageUrl:
              "https://www.myg.in/images/detailed/107/61isPIHrHgL._SL1500_-removebg-preview.png",
          },
          {
            name: "Mackbook Pro 16",
            content: "Флагман от Apple",
            price: 1399.99,
            imageUrl:
              "https://mac-center.com/cdn/shop/files/MacBook_Pro_16-in_Silver_PDP_Image_Position-1__ESES_533x.jpg?v=1700303935",
          },
          {
            name: "Mackbook Air 16",
            content: "Флагман от Mac",
            price: 1399.99,
            imageUrl:
              "https://yi-files.yellowimages.com/products/1539000/1539036/2478398-cover.jpg",
          },
          {
            name: "Galaxy Tab S9",
            content: "Флагман от Samsung",
            price: 1399.99,
            imageUrl:
              "https://res-2.cloudinary.com/grover/image/upload/v1690306399/hvrpvrqcq2u7bz6vr5mr.png",
          },
        ],
      },
    },
  });

  console.log("Админ и продукты успешно созданы.");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
