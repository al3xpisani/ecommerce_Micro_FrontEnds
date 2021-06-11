import faker from "faker";

const mountProducts = (el) => {
  let products = "";

  for (let i = 0; i < 11; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
  console.log("entering dev env for product tests");

  const element = document.querySelector("#dev-products");

  //Assuming the Container project does not have a div id = dev-products
  if (element) mountProducts(element);
}

export { mountProducts };
