//javaScripts Object Notation ==> JSON

const user = { id: 11, name: "Gorib amir", job: "actor" };
const stringigied = JSON.stringify(user);

// console.log(user);
// console.log(stringigied);

const shop = {
  name: "Alia Store",
  address: "Ranbir road",
  profit: 15000,
  products: ["laptop", "mobile", "pepsi"],
  owener: {
    name: "Alia Bhatt",
    profession: "Actore",
  },
  isExpensive: false,
};

const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(stringigied);
// Conver Stringify to Object
const converted = JSON.parse(shopStringified);
console.log(converted);
