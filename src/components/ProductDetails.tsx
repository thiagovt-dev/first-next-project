"use client"
import { ProductType } from "@/services/products";
import Image from "next/image";
import { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import SuccessToast from "./SuccessToast";

type ProductDetailsProps = {
  product: ProductType;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [toastIsOpen, setToastIsOpen] = useState(false);
  function handleToast() {
    setToastIsOpen(true);
    setTimeout(() => setToastIsOpen(false), 3000);
  }
  console.log(product);
  return (
    <Row>
      <Col lg={6}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          height={500}
          width={600}
        />
        <h1>{product.name}</h1>

        <h2 className="text-muted">R$ {product.price}</h2>

        <p className="my-3">
          <span className="d-block font-weight-bold">Descrição:</span>
          {product.description}
        </p>

        <p className="text-muted">Em estoque: {product.inStock}</p>

        <Button color="dark" className="my-3 pb-2" onClick={()=>handleToast()}>
          Compre agora
        </Button>

        <SuccessToast toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen}/>
      </Col>
    </Row>
  );
};

export default ProductDetails;
