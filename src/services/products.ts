export type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  inStock: number;
};

export async function fetchProducts() {
  const products: ProductType[] = await fetch(
    `http://localhost:3000/api/products`
  ).then((res) => res.json());
  return products;
}
export async function fetchProduct(id: string | number) {
  const product: ProductType = await fetch(
    `http://localhost:3000/api/products/${id}`,
    {
      next: { revalidate: 10 },
    }
  ).then((res) => res.json());
  // console.log(id)
  return product;
}
