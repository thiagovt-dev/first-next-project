import CartTable from "@/components/CartComponents/CartTable";
import CartTotal from "@/components/CartComponents/CartTotal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart",
  description: "My shopping cart",
};

export default function Cart() {
  return (
    <>
      <main className="container mb-5">
        <h1 className="my-5">Cart Content</h1>

        <CartTable />
        <CartTotal />
      </main>
    </>
  );
}
