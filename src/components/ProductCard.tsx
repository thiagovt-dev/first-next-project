"use client"
import { ProductType } from "@/services/products";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button, Card, CardBody, CardSubtitle } from "reactstrap";
import SuccessToast from "./SuccessToast";

type ProductCardProps = {
  product: ProductType;
};

 const ProductCard:React.FC<ProductCardProps> =({ product })=> {
  const { id, name, imageUrl, price } = product;
  const [toastIsOpen, setToastIsOpen] = useState(false)

  function handleToast(){
    setToastIsOpen(true)
    setTimeout(()=> setToastIsOpen(false), 3000)
  }
  return (
    <>
      {" "}
      <Card>
        <Link href={`/products/${id}`}>
          <Image
            className="card-img-top"
            src={imageUrl}
            width={500}
            height={600}
            alt="Picture of the author"
          />
        </Link>
        <CardBody>
          <Link href={`/products/${id}`}>
            <h5 className="card-title" style={{ cursor: "pointer" }}>
              {name}
            </h5>
          </Link>
          <CardSubtitle className="mb-3 text-muted" tag="h6">
            R$ {price}
          </CardSubtitle>
          <Button
            color="dark"
            className="pb-2"
            block
            onClick={() => handleToast}>
            Adicionar ao Carrinho
          </Button>
        </CardBody>
      </Card>
      <SuccessToast toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen}/>
    </>
  );
}
export default ProductCard