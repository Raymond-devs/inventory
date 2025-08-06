// 🛍️ 2. Personal Store Inventory Manager
// Concept: Build a program to manage items in a small shop.
// Requirements:
// - Use an array of objects to represent each item (name, price, inStock)
// - Create functions to:
// - Display all items
// - Add new items
// - Update stock levels
// - Add a feature to filter only available (in-stock) item

let table = document.querySelector("table");

let new_products = [];
let Gadgets = JSON.parse(localStorage.getItem("inventory")) || [
  { name: "keyboard", price: 100, quantityAvail: 20, inStock: "in stock" },
  { name: "phone", price: 50, quantityAvail: 10, inStock: "in stock" },
  { name: "mouse", price: 50, quantityAvail: 0, inStock: "out of stock" },
];

Gadgets.forEach((gadget, index) => {
  let item = ` 
      <tr>
          <td>${gadget.name}</td>
          <td>${gadget.price}</td>
          <td>${gadget.quantityAvail}</td>
          <td>${gadget.inStock}</td>
          <td onclick="openModal('modal-2')" style="color: blue; cursor: pointer; text-decoration: underline;">Edit</td>
        </tr>`;
  table.innerHTML += item;
});

// function displayItems(stock) {
//   stock.forEach((item) => {
//     console.log(item);
//   });
// }

function addItem() {
  event.preventDefault();
  // e.preventDefault();
  let prod_name = document.getElementById("prod-name").value;
  let prod_price = document.getElementById("prod-price").value;
  let prod_quantity = document.getElementById("prod-quantity").value;
  let prod_status = document.getElementById("prod-status").value;

  if (
    prod_name.trim() == "" ||
    prod_price.trim() === "" ||
    prod_quantity.trim() === ""
  ) {
    document.getElementById("error").textContent = "input cannot be empty";
  } else {
    if (prod_quantity > 0) {
      prod_status = "In stock";
    } else {
      prod_status = "Out of Stock";
    }

    const newProducts = {
      name: prod_name,
      price: Number(prod_price),
      quantityAvail: Number(prod_quantity),
      inStock: prod_status,
    };
    Gadgets.push(newProducts);
    let toString = JSON.stringify(Gadgets);
    console.log(toString);
    displayNewProduct(newProducts);
    localStorage.setItem("inventory", toString);
    console.log(Gadgets);
  }
}

function displayNewProduct(product) {
  const new_prod = ` 
      <tr>
          <td>${product.name}</td>
          <td>${product.price}</td>
          <td>${product.quantityAvail}</td>
          <td>${product.inStock}</td>
          <td style="color: blue; cursor: pointer; text-decoration: underline;">Edit</td>
        </tr>`;
  table.innerHTML += new_prod;
}

// function updateStockLevel(stock, index, value) {
//   stock[index].inStock = value;
//   console.log(stock);
// }

// function updateQuantity(stock, index, value) {
//   stock[index].quantityAvail = value;
//   console.log(stock[index]);
// }

// function availableStock(stock) {
//   stock.forEach((item) => {
//     if (item.inStock === true) {
//       console.log(item);
//     }
//   });
// }
function availableStock(stock) {
  stock.filter((item) => {
    item.inStock === true;
    console.log(item);
  });
}

// displayItems(Gadgets);
// addItem(Gadgets, { name: "flash drive", price: 30, inStock: true });
// addItem(Gadgets, { name: "hard drive", price: 30, inStock: false });
// updateStockLevel(Food_Stuff, 1, true);
// updateQuantity(Gadgets, 1, 8);
// availableStock(Gadgets);
