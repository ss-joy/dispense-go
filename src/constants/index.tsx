import { CustomIconHandler, IconHandler } from "../utils/icon";

export const PaddingX = ` !px-mobile m:!px-tablet xl:!px-desktop `;
export const PaddingXL = ` pl-mobile m:pl-tablet xl:pl-desktop `;
export const PaddingXR = ` pr-mobile m:pr-tablet xl:pr-desktop `;

export const Links = [
  {
    text: "all",
    icon: <CustomIconHandler name="box-icon" />,
    href: "/category?filter=all",
  },
  {
    text: "deals",
    icon: <CustomIconHandler name="tag-icon" />,
    href: "/category?filter=deals",
  },
  {
    text: "flowers",
    icon: <CustomIconHandler name="canabis-icon" />,
    href: "/category?filter=flowers",
  },
  {
    text: "edibles",
    icon: <CustomIconHandler name="candy-icon" />,
    href: "/category?filter=edibles",
  },
  {
    text: "concentrates",
    icon: <CustomIconHandler name="wave-icon" />,
    href: "/category?filter=concentrates",
  },
  {
    text: "accessories",
    icon: <CustomIconHandler name="panel-icon" />,
    href: "/category?filter=accessories",
  },
  {
    text: "brands",
    icon: <CustomIconHandler name="crown-icon" />,
    href: "/category?filter=brands",
  },
  {
    text: "stores",
    icon: <CustomIconHandler name="store-icon" />,
    href: "/category?filter=stores",
  },
];

export const Categories = [
  {
    text: "all",
    imageURL: "/assets/category/search/1.png",
  },
  {
    text: "flowers",
    imageURL: "/assets/category/search/2.png",
  },
  {
    text: "CONCEN TRATES",
    imageURL: "/assets/category/search/3.png",
  },
  {
    text: "EDIBLES",
    imageURL: "/assets/category/search/4.png",
  },
  {
    text: "CBD",
    imageURL: "/assets/category/search/5.png",
  },
  {
    text: "PRE-ROLLS",
    imageURL: "/assets/category/search/6.png",
  },
  {
    text: "ACCES- SORIES",
    imageURL: "/assets/category/search/7.png",
  },
];

export const Products = [
  {
    title: "Capsules 1:10 CBD Reserve - 300mg - 30 Count",
    price: 21.25,
    rating: 4,
    type: "hybrid",
    sale: 10,
    image: ["/assets/products/cbd-capsules.jpg"],
  },
  {
    title: "Sea Star - 3.5g Indoor",
    price: 21.25,
    rating: 4,
    type: "hybrid",
    sale: 15,
    image: ["/assets/products/flower-blue-dream.jpg"],
  },
  {
    title: "E85 - 7g Smediums",
    price: 21.25,
    rating: 4,
    type: "sativa",
    sale: 20,
    image: ["/assets/products/flower-organic-1.jpg"],
  },
  {
    title: "E85 - 7g Smediums",
    price: 21.25,
    rating: 4,
    type: "indica",
    image: ["/assets/products/flower-medical-2.jpg"],
  },
  {
    title: "E85 - 7g Smediums",
    price: 21.25,
    rating: 4,
    type: "sativa",
    sale: 13,
    image: ["/assets/products/flower-organic-3.jpg"],
  },
  {
    title: "E85 - 7g Smediums",
    price: 21.25,
    rating: 4,
    type: "indica",
    image: ["/assets/products/flower-purple.jpg"],
  },
  {
    title: "E85 - 7g Smediums",
    price: 21.25,
    rating: 4,
    type: "sativa",
    image: ["/assets/products/flower-medical-1.jpg"],
  },
  {
    title: "E85 - 7g Smediums",
    price: 21.25,
    rating: 4,
    type: "indica",
    image: ["/assets/products/flower-organic-2.jpg"],
  },
  {
    title: "E85 - 7g Smediums",
    price: 21.25,
    rating: 4,
    type: "sativa",
    image: ["/assets/products/flower-organic-1.jpg"],
  },
  {
    title: "E85 - 7g Smediums",
    price: 21.25,
    rating: 4,
    type: "indica",
    image: ["/assets/products/flower-medical-2.jpg"],
  }

]
