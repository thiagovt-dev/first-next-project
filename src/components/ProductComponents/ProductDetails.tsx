"use client";
import { ProductType } from "@/services/products";
import Image from "next/image";
import { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import SuccessToast from "../SuccessToast";
import { useCart } from "@/hooks/useCart";

type ProductDetailsProps = {
  product: ProductType;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const { addProduct } = useCart();

  function handleClick() {
    addProduct(product);
    setToastIsOpen(true);
    setTimeout(() => setToastIsOpen(false), 3000);
  }
  return (
    <Row>
      <Col md={6}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          height={300}
          width={400}
        />
        <h1>{product.name}</h1>

        <h2 className="text-white">R$ {product.price}</h2>
        <SuccessToast
          toastIsOpen={toastIsOpen}
          setToastIsOpen={setToastIsOpen}
        />
      </Col>
      <Col>
        <p className="my-3">
          <span className="d-block font-weight-bold">Descrição:</span>
          {product.description}
        </p>

        <p className="text-primary">Em estoque: {product.inStock}</p>

        <Button
          className="btn btn-light my-3 pb-2"
          onClick={() => handleClick()}>
          Compre agora
        </Button>
      </Col>
    </Row>
  );
};

export default ProductDetails;
