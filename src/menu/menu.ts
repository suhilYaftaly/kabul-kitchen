export type MenuItem = {
  name: string;
  price: number;
  description?: string;
  imgUrl?: string;
};

export const mainDishes: MenuItem[] = [
  {
    name: "Chicken Shawarma Wrap",
    price: 11.49,
    description:
      "Finely carved chicken shawarma from the rotisserie and grilled to perfection. Served in a pita wrap with the WORKS, topped with Osmow's signature Garlic Sauce and Tahini. (540/870 Cals)",
    imgUrl: "https://i.imgur.com/90QXCtJ.jpeg",
  },
  {
    name: "Crispy Chicken Shawarma Wrap",
    price: 12.99,
    description:
      "Perfectly bite-sized pieces of breaded & fried chicken breast that has been marinated in our Osmow’s unique shawarma spices and served in a pita with the WORKS, topped with Garlic or OzPotle Sauce.",
    imgUrl:
      "https://tb-static.uber.com/prod/image-proc/processed_images/00272d45c1ca434ba06006d074574248/5143f1e218c67c20fe5a4cd33d90b07b.jpeg",
  },
  {
    name: "Crispy Chicken Shawarma Bites",
    price: 9.5,
    description:
      "Crispy Chicken Bites are perfectly bite-sized pieces of breaded & fried chicken breast that has been marinated in our Osmow’s unique shawarma spices. Served with your choice of Garlic or OzPotle Sauce on the side",
    imgUrl:
      "https://tb-static.uber.com/prod/image-proc/processed_images/6b9b120da400d8c9fb3c2a128db32f99/5143f1e218c67c20fe5a4cd33d90b07b.jpeg",
  },
  {
    name: "Beef Shawarma Saj Box",
    price: 15.65,
    description:
      "Beef Shawarma SAJ cut into 4 pieces, served with your choice of either ROCKS (rice), STIX (fries) or Salad.",
    imgUrl:
      "https://tb-static.uber.com/prod/image-proc/processed_images/9ce71b028c623ce5da2f0b8e9cd7e1e1/a19bb09692310dfd41e49a96c424b3a6.jpeg",
  },
];

export const drinks: MenuItem[] = [
  {
    name: "Can - Coke",
    price: 2.19,
    imgUrl:
      "https://tb-static.uber.com/prod/image-proc/processed_images/40dd3b392b216c234f9e49a94c663d81/5143f1e218c67c20fe5a4cd33d90b07b.jpeg",
  },
  {
    name: "Can - Gingerale",
    price: 2.55,
    imgUrl:
      "https://tb-static.uber.com/prod/image-proc/processed_images/6357b34b670a1c9d23f9320b2083a336/5143f1e218c67c20fe5a4cd33d90b07b.jpeg",
  },
  {
    name: "Mango Juice",
    price: 5.65,
    imgUrl:
      "https://tb-static.uber.com/prod/image-proc/processed_images/e0781c0a802ce5cee694e7c37dc56a62/5143f1e218c67c20fe5a4cd33d90b07b.jpeg",
  },
  {
    name: "Dough (Yogurt) drink",
    price: 6.55,
  },
];
