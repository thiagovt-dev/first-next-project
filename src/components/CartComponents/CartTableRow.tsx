"use client";
import { useCart } from "@/hooks/useCart";
import { ProductType } from "@/services/products";
import Image from "next/image";
import { Button, Col, Row } from "reactstrap";

export type CartEntry = {
  product: ProductType;
  quantity: number;
};

const CartTableRow = (params: { entry: CartEntry }) => {
  const { addProduct, removeProduct } = useCart();
 //
  return (
    <tr>
      <td>
        <Row className="align-items-center">
          <Col xs={4} md={2} lg={4}>
            <Image
              src={params.entry.product.imageUrl}
              alt={params.entry.product.name}
              height={80}
              width={90}
            />
          </Col>
          <Col xs={8} md={10} lg={8}>
            {params.entry.product.name}
          </Col>
        </Row>
      </td>
      <td>{params.entry.product.price}</td>
      <td>{params.entry.quantity}</td>
      <td>{params.entry.product.price * params.entry.quantity}</td>
      <td>
        <Button
          color="primary"
          size="sm"
          onClick={() => addProduct(params.entry.product)}>
          +
        </Button>{" "}
        <Button
          color="danger"
          size="sm"
          onClick={() => removeProduct(params.entry.product.id)}>
          -
        </Button>
      </td>
    </tr>
  );
};

export default CartTableRow;
