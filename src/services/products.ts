
export type ProductType = {
    id: number
    name: string
    description: string
    price: number
    imageUrl: string
    inStock: number
}

export async function fetchProducts() {
    const products: ProductType[] = await fetch(
      `${process.env.NEXT_PUBLIC_APIURL}/api/products`
    ).then(res=>res.json());
    return products
}
export async function fetchProduct(id:string|number){
  const product: ProductType = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/products/${id}`).then(res=>res.json())
  return product
}   