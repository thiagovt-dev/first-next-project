'use client'
import { Button, Toast, ToastBody } from "reactstrap";

export default function SuccessToast(props: {
  toastIsOpen: boolean;
  setToastIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <Toast
      className="bg-success text-white fixed-bottom ms-auto me-4 mb-4"
      isOpen={props.toastIsOpen}
      fade>
        <ToastBody className="d-flex justify-content-between">
            The product was added to the cart.
            <Button close className="btn-close-white" onClick={()=>props.setToastIsOpen(false)}>
            </Button>

        </ToastBody>
      </Toast>
  );
}
