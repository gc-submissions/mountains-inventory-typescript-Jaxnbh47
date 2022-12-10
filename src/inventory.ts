import {Product} from "./products";

interface InventoryItem {
  product: Product;
  quantity: number;
}

let inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10.0 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 },
];

function calcInventoryValue(inventory: InventoryItem[]): number {
  let Value = 0;

  for (let Products of inventory) {
    Value += Products.product.price * Products.quantity;
  }

  return Value;
}
console.log(calcInventoryValue(inventory));
export {InventoryItem, calcInventoryValue};
