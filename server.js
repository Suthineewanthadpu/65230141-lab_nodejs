const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
const cors = require("cors");

const fullname = "Hello API ,65230141 Suthinee Wantha";
//  data
const products = [
  {
    id: "1",
    name: "Apple Watch series 8",
    category: "Apple",
    price: 15000,
    cover:
      "https://www.flashfly.net/wp/wp-content/uploads/2022/05/FTX1B5hWIAA6GRr-2-800x600.jpeg",
  },
  {
    id: "2",
    name: "Iphone 14 PRO",
    category: "Apple",
    price: 35000,
    cover:
      "https://promotions.co.th/wp-content/uploads/2022/09/iphone14-pro-max.jpg",
  },
  {
    id: "3",
    name: "จอมอนิเตอร์ 27นิ้ว จอคอม 75HZ หน้าจอโค้ง จอเกมมิ่ง LED Gaming monitor จอมอนิเตอร์เกมมิ่ง VGA HDMI จอมอนิเตอ สปอตสินค้า",
    category: "LG",
    price: 5600,
    cover:
      "https://www.techmoblog.com/uploads/content_images/201610/img_1476165152_81877887513b.jpg",
  },
  {
    id: "4",
    name: "HEADSET (หูฟัง) ONIKUMA K9 - 3.5 MM (PINK)",
    category: "ONIKUMA ",
    price: 990,
    cover:
      "https://www.jib.co.th/img_master/product/original/20210803092821_41661_66_1.jpg",
  },
  {
    id: "5",
    name: "Apple iPad Gen 9 | iStudio by copperwired",
    category: "Apple",
    price: 12900,
    cover:
      "https://store.ais.co.th/media/catalog/product/i/p/ipad_10.2_inch_wi-fi_space_gray_pdp_image_position-1b__th_2.jpg",
  },
  {
    id: "6",
    name: "Honda",
    category: "Car",
    price: 10000000,
    cover:
    "https://www.autoinfo.co.th/wp-content/uploads/2022/02/82.2-HONDA-CIVIC.jpg",
  },
  {
    id: "7",
    name: "Nissan",
    category: "Car",
    price: 12000000,
    cover:
    "https://wieck-nissanao-production.s3.amazonaws.com/photos/cf78e64ca2e9342974fab9d6f49aff4bc8145243/preview-928x522.jpg",
  },
  {
    id: "8",
    name: "Toyota",
    category: "Car",
    price: 11000000,
    cover:
    "https://images.autofun.co.th/file1/0cdc751c1d894dea904a98b6ca91b690_324x216.jpg",
  },
  {
    id: "9",
    name: "Mitsubishi",
    category: "Car",
    price: 11500000,
    cover:
    "https://www.siamcardeal.com/assets/offers/1151/1619846475_w85_135_20montero_sport-05-r-front-r_sm.png",
  },
];

app.use(express.json(), cors());
// app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: fullname });
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const result = products.find((product) => product.id === id);
  res.json(result);
});

app.listen(port, () => {
  console.log("Application is running on port 9000");
});
