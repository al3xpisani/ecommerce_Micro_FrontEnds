import faker from "faker";

const mountCart = (el) => {
  const cartText = `<div>You have ${faker.datatype.number()} items in your cart</div>`;

  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#dev-cart");

  if (element) {
    mountCart(element);
  }
}

export { mountCart };
