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
