'use client'
import { useEffect, useState } from "react"
import CartTableRow, { CartEntry } from "./CartTableRow"
import { useCart } from "@/hooks/useCart"
import { Table } from "reactstrap"

 const CartTable = () => {
    const [cartEntries, setCartEntries] = useState<CartEntry[]>([])
    const {cart} = useCart()

    useEffect(() => {
      const entriesList = cart.reduce((list, product) => {
        const entryIndex = list.findIndex(
          (entry) => entry.product.id === product.id
        );
        if(entryIndex === -1){
            return[
                ...list,{
                    product,
                    quantity: 1
                }
            ]
        }
        list[entryIndex].quantity++
        return list     
        
      }, [] as CartEntry[]);
      setCartEntries(entriesList)

    }, [cart]);

    return (
      <Table  className="align-middle" style={{ minWidth: "32rem" }}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Qty.</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartEntries.map((entry) => (
            <CartTableRow key={entry.product.id} entry={entry} />
          ))}
        </tbody>
      </Table>
    );
}

export default CartTable