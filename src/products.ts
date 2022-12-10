interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
  { name: "Monitor", price: 250 },
  { name: "Graphics Card", price: 1000 },
  { name: "Ram", price: 200 },
];

function calcAverageProductPrice(products: Product[]): number {
  if (products.length === 0) {
    return 0;
  } else {
    let totalPrice = 0;
    for (let product of products) {
      totalPrice += product.price;
    }
    return totalPrice / products.length;
  }
}

console.log(calcAverageProductPrice(products).toFixed(2));
export { Product, calcAverageProductPrice };
