import { PrismaClient } from "../src/app/generated/prisma";
const prisma = new PrismaClient();

async function main() {
  await prisma.admin.create({
    data: {
      name: "Admin One",
      email: "admin@example.com",
      password: "securepassword",
      products: {
        create: [
          {
            nameEn: "iPhone 16 Pro Max",
            nameRu: "Айфон 16 Про Макс",
            contentEn: "The latest model from Apple",
            contentRu: "Последняя модель от Apple",
            price: 1499.99,
            imageUrl:
              "https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75",
          },
          {
            nameEn: "Samsung Galaxy S25 Ultra",
            nameRu: "Самсунг Галакси S25 Ультра",
            contentEn: "Samsung's latest flagship smartphone",
            contentRu: "Флагман от Samsung",
            price: 1399.99,
            imageUrl:
              "https://www.myg.in/images/detailed/107/61isPIHrHgL._SL1500_-removebg-preview.png",
          },
          {
            nameEn: "MacBook Pro 16",
            nameRu: "Макбук Про 16",
            contentEn: "Apple's flagship laptop",
            contentRu: "Флагманский ноутбук от Apple",
            price: 2399.99,
            imageUrl:
              "https://mac-center.com/cdn/shop/files/MacBook_Pro_16-in_Silver_PDP_Image_Position-1__ESES_533x.jpg?v=1700303935",
          },
          {
            nameEn: "MacBook Air 16",
            nameRu: "Макбук Эйр 16",
            contentEn: "Lightweight and powerful Apple laptop",
            contentRu: "Лёгкий и мощный ноутбук от Apple",
            price: 1899.99,
            imageUrl:
              "https://yi-files.yellowimages.com/products/1539000/1539036/2478398-cover.jpg",
          },
          {
            nameEn: "Galaxy Tab S9",
            nameRu: "Галакси Таб S9",
            contentEn: "High-end tablet by Samsung",
            contentRu: "Планшет от Samsung",
            price: 999.99,
            imageUrl:
              "https://res-2.cloudinary.com/grover/image/upload/v1690306399/hvrpvrqcq2u7bz6vr5mr.png",
          },
          {
            nameEn: "Apple Watch Ultra 2",
            nameRu: "Эппл Вотч Ультра 2",
            contentEn: "Advanced smart watch by Apple",
            contentRu: "Смарт-часы с расширенными функциями",
            price: 799.99,
            imageUrl:
              "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-ultra2-cell-titanium-orange-trail-loop?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1692936875352",
          },
          {
            nameEn: "iPad Pro 12.9 M2",
            nameRu: "Айпад Про 12.9 M2",
            contentEn: "Powerful tablet for work and play",
            contentRu: "Мощный планшет для работы и развлечений",
            price: 1099.99,
            imageUrl:
              "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-1-202210?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1664577264133",
          },
          {
            nameEn: "Sony WH-1000XM5",
            nameRu: "Сони WH-1000XM5",
            contentEn: "Premium noise-canceling headphones",
            contentRu: "Премиум-наушники с шумоподавлением",
            price: 449.99,
            imageUrl:
              "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg",
          },
          {
            nameEn: "PlayStation 5",
            nameRu: "Плейстейшн 5",
            contentEn: "Next-gen gaming console from Sony",
            contentRu: "Консоль нового поколения от Sony",
            price: 499.99,
            imageUrl:
              "https://m.media-amazon.com/images/I/619BkvKW35L._SL1500_.jpg",
          },
          {
            nameEn: "Xbox Series X",
            nameRu: "Иксбокс Сериес Х",
            contentEn: "Flagship console from Microsoft",
            contentRu: "Флагманская консоль от Microsoft",
            price: 499.99,
            imageUrl:
              "https://m.media-amazon.com/images/I/61JGKhqxHxL._SL1500_.jpg",
          },
          {
            nameEn: "DJI Mavic Air 2",
            nameRu: "Дрон DJI Mavic Air 2",
            contentEn: "Compact 4K camera drone",
            contentRu: "Компактный дрон с камерой 4K",
            price: 899.99,
            imageUrl:
              "https://cdn.dji-official.com/sites/default/files/styles/800_800/public/2020-04/mavic-air-2%402x.png",
          },
          {
            nameEn: "GoPro HERO12 Black",
            nameRu: "ГоПро HERO12 Black",
            contentEn: "Action camera for extreme sports",
            contentRu: "Экшн-камера для активного отдыха",
            price: 399.99,
            imageUrl:
              "https://gopro.com/content/dam/gopro/en/en/products/cameras/hero12-black/gallery/hero12-black-gallery-1.png",
          },
          {
            nameEn: "Apple AirPods Pro 2",
            nameRu: "Эппл АирПодс Про 2",
            contentEn: "Wireless earbuds with noise canceling",
            contentRu: "Беспроводные наушники с шумоподавлением",
            price: 249.99,
            imageUrl:
              "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83_AV1?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1660803972362",
          },
          {
            nameEn: "Lenovo Legion 7",
            nameRu: "Леново Легион 7",
            contentEn: "Gaming laptop with RTX 4080",
            contentRu: "Игровой ноутбук с RTX 4080",
            price: 2699.99,
            imageUrl:
              "https://www.lenovo.com/medias/lenovo-laptop-legion-7-16-intel-front.png?context=bWFzdGVyfHJvb3R8MjM5ODg2fGltYWdlL3BuZ3xoZTgvaDY1LzE1MzI5NjQ0NTI4NzE4LnBuZ3xmNjFjYjExMTdlY2YxZjIzNmI2M2VjODk4NDI1NmRhYmIzZDViMTA5NDA3MzlmODRmNzJmYzMwMjNkYjNmN2Uw",
          },
          {
            nameEn: "ASUS ROG Zephyrus G14",
            nameRu: "АСУС ROG Зефир Г14",
            contentEn: "Lightweight and powerful gaming laptop",
            contentRu: "Лёгкий и мощный игровой ноутбук",
            price: 2199.99,
            imageUrl:
              "https://dlcdnwebimgs.asus.com/files/media/34DF8DF5-AE3C-4AB8-9449-58D57052F8F2/v1/img/kv/g14.png",
          },
        ],
      },
    },
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
