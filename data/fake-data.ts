import Category from "../models/category.model";
import ProductType from "../models/product-type.model";
import Product from "../models/product.model";
import Order from "../models/order.model";
import CartItem from "../models/cart-item.model";

const souvenirCategory = "c1";
const wineCategory = "c2";
const otherCategory = "c3";

const postcardType = "t1";
const paintingType = "t2";
const redWineType = "t3";
const whiteWineType = "t4";
const oliveOilType = "t5";
const scentType = "t6";

export const cartItems = [
  new CartItem(
    "ci1",
    "Razglednica",
    9.99,
    16,
    213.86,
    "https://source.unsplash.com/200x200/?nature,water"
  ),
  new CartItem(
    "ci2",
    "Maslinovo ulje",
    16.66,
    2,
    33.86,
    "https://source.unsplash.com/200x200/?nature,water"
  ),
  new CartItem(
    "ci3",
    "Slika",
    34.6,
    23,
    54.86,
    "https://source.unsplash.com/200x200/?nature,water"
  ),
  new CartItem(
    "ci4",
    "Biska",
    6.99,
    6,
    23.86,
    "https://source.unsplash.com/200x200/?nature,water"
  ),
  new CartItem(
    "ci5",
    "Osvježivač zraka",
    19.99,
    6,
    13.86,
    "https://source.unsplash.com/200x200/?nature,water"
  ),
];

// export const orders = [
//   new Order(
//     "o1",
//     new Date(),
//     ["Razglednica", "Slika"],
//     200,
//     20,
//     160,
//     true,
//     "b1",
//     [
//       new CartItem(
//         "ci2",
//         "Maslinovo ulje",
//         16.66,
//         2,
//         33.86,
//         "https://source.unsplash.com/200x200/?nature,water"
//       ),
//       new CartItem(
//         "ci3",
//         "Slika",
//         34.6,
//         23,
//         54.86,
//         "https://source.unsplash.com/200x200/?nature,water"
//       ),
//       new CartItem(
//         "ci4",
//         "Biska",
//         6.99,
//         6,
//         23.86,
//         "https://source.unsplash.com/200x200/?nature,water"
//       ),
//       new CartItem(
//         "ci5",
//         "Osvježivač zraka",
//         19.99,
//         6,
//         13.86,
//         "https://source.unsplash.com/200x200/?nature,water"
//       ),
//     ]
//   ),
//   new Order(
//     "o2",
//     new Date(),
//     ["Bijelo vino", "Maslinovo ulje"],
//     500,
//     20,
//     430,
//     false,
//     "b2",
//     [
//       new CartItem(
//         "ci2",
//         "Maslinovo ulje",
//         16.66,
//         2,
//         33.86,
//         "https://source.unsplash.com/200x200/?nature,water"
//       ),
//       new CartItem(
//         "ci3",
//         "Slika",
//         34.6,
//         23,
//         54.86,
//         "https://source.unsplash.com/200x200/?nature,water"
//       ),
//       new CartItem(
//         "ci4",
//         "Biska",
//         6.99,
//         6,
//         23.86,
//         "https://source.unsplash.com/200x200/?nature,water"
//       ),
//       new CartItem(
//         "ci5",
//         "Osvježivač zraka",
//         19.99,
//         6,
//         13.86,
//         "https://source.unsplash.com/200x200/?nature,water"
//       ),
//     ]
//   ),
//   new Order("o3", new Date(), ["Razglednica"], 100, 20, 80, true, "b1"),
//   new Order("o4", new Date(), ["Maslinovo ulje"], 250, 20, 110, false, "b1"),
//   new Order(
//     "o5",
//     new Date(),
//     ["Crno vino", "Maslinovo ulje"],
//     1000,
//     20,
//     890,
//     true,
//     "b3"
//   ),
//   new Order(
//     "o6",
//     new Date(),
//     ["Razglednica", "Maslinovo ulje", "Crno vino"],
//     430,
//     20,
//     332,
//     false,
//     "b4"
//   ),
//   new Order("o7", new Date(), ["Lavanda", "Medica"], 100, 5, 80, true, "b4"),
//   new Order("o8", new Date(), ["Lopta", "Kiwi"], 100, 5, 80, false, "b2"),
//   new Order(
//     "o9",
//     new Date(),
//     ["Dres Hajduka", "Kifla"],
//     100,
//     5,
//     80,
//     true,
//     "b2"
//   ),
//   new Order(
//     "o10",
//     new Date(),
//     ["Japanke", "Sladoled"],
//     100,
//     5,
//     80,
//     false,
//     "b2"
//   ),
//   new Order(
//     "o11",
//     new Date(),
//     ["Davor Šuker", "Sveta voda", "Kikiriki"],
//     100,
//     5,
//     80,
//     true,
//     "b3"
//   ),
//   new Order("o12", new Date(), ["Lavanda", "Pivo"], 100, 5, 80, false, "b4"),
//   new Order(
//     "o13",
//     new Date(),
//     ["Macaklin", "Maslina, cijela"],
//     100,
//     5,
//     80,
//     true,
//     "b2"
//   ),
// ];

export const categories = [
  new Category("c1", "Souvenirs"),
  new Category("c2", "Wines"),
  new Category("c3", "Other"),
];

export const productTypes = [
  new ProductType("t1", "Postcard", [souvenirCategory]),
  new ProductType("t2", "Painting", [souvenirCategory]),
  new ProductType("t3", "Red Wine", [wineCategory]),
  new ProductType("t4", "White Wine", [wineCategory]),
  new ProductType("t5", "Olive Oil", [otherCategory]),
  new ProductType("t6", "Scent", [otherCategory]),
];

export const products = [
  new Product(
    "p1",
    [postcardType],
    [souvenirCategory],
    "Zadar Postcard 1",
    36.14,
    "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    "https://source.unsplash.com/200x200/?nature,water"
  ),
  new Product(
    "p2",
    [postcardType],
    [souvenirCategory],
    "Zadar Postcard 2",
    36.14,
    "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    "https://source.unsplash.com/200x200/?nature,water"
  ),
  new Product(
    "p3",
    [paintingType],
    [souvenirCategory],
    "Zadar Painting 1",
    36.14,
    "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    "https://source.unsplash.com/200x200/?nature,water"
  ),
  new Product(
    "p4",
    [paintingType],
    [souvenirCategory],
    "Zadar Painting 2",
    36.14,
    "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    "https://source.unsplash.com/200x200/?nature,water"
  ),
  new Product(
    "p5",
    [redWineType],
    [wineCategory],
    "Zadar Red Wine 1",
    36.14,
    "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    "https://source.unsplash.com/200x200/?nature,water"
  ),
  new Product(
    "p6",
    [redWineType],
    [wineCategory],
    "Zadar Red Wine 2",
    36.14,
    "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    "https://source.unsplash.com/200x200/?nature,water"
  ),
  new Product(
    "p7",
    [whiteWineType],
    [wineCategory],
    "Zadar White Wine 1",
    36.14,
    "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    "https://source.unsplash.com/200x200/?nature,water"
  ),
  new Product(
    "p8",
    [whiteWineType],
    [wineCategory],
    "Zadar White Wine 2",
    36.14,
    "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    "https://source.unsplash.com/200x200/?nature,water"
  ),
  new Product(
    "p9",
    [oliveOilType],
    [otherCategory],
    "Zadar Olive Oil 1",
    36.14,
    "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    "https://source.unsplash.com/200x200/?nature,water"
  ),
  new Product(
    "p10",
    [oliveOilType],
    [otherCategory],
    "Zadar Olive Oil 2",
    36.14,
    "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    "https://source.unsplash.com/200x200/?nature,water"
  ),
  new Product(
    "p11",
    [scentType],
    [otherCategory],
    "Zadar Scent 1",
    36.14,
    "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    "https://source.unsplash.com/200x200/?nature,water"
  ),
  new Product(
    "p12",
    [scentType],
    [otherCategory],
    "Zadar Scent 2",
    36.14,
    "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    "https://source.unsplash.com/200x200/?nature,water"
  ),
];
