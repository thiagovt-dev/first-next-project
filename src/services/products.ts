
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
      `${process.env.NEXT_PUBLIC_APIURL}/api/prducts`
    ).then(res=>res.json());
    return products
}