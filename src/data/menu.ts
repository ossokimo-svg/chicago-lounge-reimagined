import food from "@/assets/cat-food.jpg";
import desserts from "@/assets/cat-desserts.jpg";
import cold from "@/assets/cat-cold.jpg";
import fruit from "@/assets/cat-fruit.jpg";
import hot from "@/assets/cat-hot.jpg";
import pizza from "@/assets/cat-pizza.jpg";
import gourmet from "@/assets/cat-gourmet.jpg";

export type MenuItem = { name: string; desc?: string; price: string };
export type MenuCategory = { id: string; label: string; tagline: string; image: string; items: MenuItem[] };

export const menu: MenuCategory[] = [
  {
    id: "mat",
    label: "Mat",
    tagline: "Burgare, buckets & local food",
    image: food,
    items: [
      { name: "Chicago Burgare", desc: "170g nötfärs, krispig sallad, chilimajonnäs, rödlök, jalapeño, cheddar, pommes, dippsås", price: "149 kr" },
      { name: "Miami Burgare", desc: "170g nötfärs, krispig sallad, Miami-dressing, tomat, rödlök, cheddar, pommes, dippsås", price: "149 kr" },
      { name: "Super Hot Zinger", desc: "Zinger-kyckling, 2 hotwings, sriracha, jalapeño, cheddar, pommes, dippsås", price: "159 kr" },
      { name: "Chicago Bucket", desc: "8 crispy, 12 hot wings, 20 popcorn, 2 pommes, 2 dippsås", price: "289 kr" },
      { name: "Big Mix", desc: "12 crispy strips, 16 hot wings, 30 popcorn, 4 pommes, 4 dippsås", price: "389 kr" },
      { name: "Mix Tallrik", desc: "Kebab och kyckling, gurka, tomat, lök, sallad, pepperoni, pommes, sås", price: "139 kr" },
    ],
  },
  {
    id: "gourmet",
    label: "Gourmet",
    tagline: "Chefens favoriter",
    image: gourmet,
    items: [
      { name: "Chefens krämiga svampkyckling", desc: "Saftig kyckling i krämig sås med färska champinjoner. Serveras med ris, pommes eller grönsaker", price: "—" },
      { name: "Lax med krämig svampsås", desc: "Ugnsbakad lax serverad med len svampsås", price: "—" },
      { name: "Chefens Biff Stroganoff", desc: "Saftiga bitar av nötkött i en len och krämig stroganoffsås", price: "—" },
      { name: "Färsk pasta med oxfilé", desc: "Färsk pasta med grillad oxfilé i rik krämig svampsås", price: "—" },
      { name: "Räkor i krämig svampsås", desc: "Saftiga räkor – elegant och full av smak", price: "—" },
      { name: "Spaghetti Bolognese", desc: "Färsk spaghetti med långkokt köttfärssås", price: "—" },
    ],
  },
  {
    id: "pizza",
    label: "Pizza",
    tagline: "Stenugnsbakad i lyx",
    image: pizza,
    items: [
      { name: "Margarita", desc: "Tomat, ost, basilika", price: "119 kr" },
      { name: "Vesuvio", desc: "Ost, kalkon", price: "119 kr" },
      { name: "Paradise", desc: "Ost, räkor, champinjoner", price: "139 kr" },
      { name: "Kebab Pizza", desc: "Ost, kebab", price: "139 kr" },
      { name: "Oxfilé", desc: "Ost, champinjoner, lök, oxfilé, bearnaisesås", price: "159 kr" },
      { name: "Gorgonzola Oxfilé", desc: "Oxfilé, gorgonzola, champinjoner, bearnaisesås", price: "159 kr" },
    ],
  },
  {
    id: "desserter",
    label: "Desserter",
    tagline: "Waffles & söt magi",
    image: desserts,
    items: [
      { name: "Chicago Waffle", desc: "KitKat / Lion / Oreo / Lotus", price: "89 kr" },
      { name: "Chocolate Bomb", desc: "Smältande chokladbomb med glass", price: "89 kr" },
      { name: "Kunafa", desc: "Klassisk orientalisk dessert", price: "89 kr" },
      { name: "Waffle & Ice Cream", desc: "Krispig våffla med vaniljglass", price: "79 kr" },
      { name: "Pancakes Nutella", desc: "Amerikanska pannkakor, Nutella, frukt & grädde", price: "99 kr" },
      { name: "Ice Cream", desc: "Tre kulor av husets favoriter", price: "49 kr" },
    ],
  },
  {
    id: "fruktbakelser",
    label: "Fruktbakelser",
    tagline: "Färsk frukt & lyxig grädde",
    image: fruit,
    items: [
      { name: "Pancakes med honung", desc: "Honung, frukt & grädde", price: "99 kr" },
      { name: "Pancakes med jam", desc: "Sylt, färsk frukt & grädde", price: "99 kr" },
      { name: "Vit choklad-bakelse", desc: "Vit choklad, frukt & grädde", price: "99 kr" },
      { name: "Waffle & Fruit", desc: "Krispig våffla toppad med säsongens frukter", price: "79 kr" },
    ],
  },
  {
    id: "varma",
    label: "Varma drycker",
    tagline: "Bryggda med kärlek",
    image: hot,
    items: [
      { name: "Espresso", desc: "Singel / dubbel", price: "39 / 44 kr" },
      { name: "Cappuccino", desc: "Klassisk italiensk", price: "44 / 54 kr" },
      { name: "Caffè Latte", desc: "Caramel / Hazelnut / Vanilla", price: "44 / 54 kr" },
      { name: "Matcha Latte", desc: "Ceremoniell matcha", price: "59 kr" },
      { name: "Chai Latte", desc: "Kryddig & värmande", price: "59 kr" },
      { name: "Arabica", desc: "Husets signatur", price: "69 kr" },
    ],
  },
  {
    id: "kalla",
    label: "Kalla drycker",
    tagline: "Frappés, mojitos & shakes",
    image: cold,
    items: [
      { name: "Greek Frappé", desc: "Caramel / Mocha / Hazelnut / Vanilla", price: "64 kr" },
      { name: "Mojito", desc: "Klassisk, jordgubb, kiwi, passion eller mango", price: "64 kr" },
      { name: "Avocado & Pistachio", desc: "Husets premium-smoothie", price: "79 kr" },
      { name: "Milkshake", desc: "Lotus, Nutella, Oreo, Kinder, Snickers, Bounty…", price: "64 kr" },
      { name: "Spanish Latte", desc: "Iskaffe med kondenserad mjölk", price: "64 kr" },
      { name: "Blue Lagoon", desc: "Husets signatur-mocktail", price: "64 kr" },
    ],
  },
];
