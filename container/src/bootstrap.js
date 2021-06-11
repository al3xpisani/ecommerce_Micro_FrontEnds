import { mountProducts } from "products/ProductsIndex";
import { mountCart } from "cart/CartShow";

mountProducts(document.querySelector("#dev-products"));
mountCart(document.querySelector("#dev-cart"));

console.log("products loaded");
console.log("cart loaded");
