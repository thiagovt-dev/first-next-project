import { Metadata } from "next"

export const metadata: Metadata ={
    title: 'Products',
    description:'Products main page'
}
export default function Products(){
    return(
        <main>
            <h1>Our Products</h1>
        </main>
    )
}