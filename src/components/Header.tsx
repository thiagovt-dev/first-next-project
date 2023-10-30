"use client"
import Link from "next/link";
import { Nav, Navbar } from "reactstrap";

export default function Header(){
    return (
      <Navbar>
        <Link href="/" className="navbar-brand text-light">
          Inicio
        </Link>
        <Nav className="flex-row">
          <Link href="/products" className="nav-link text-light">
            Products
          </Link>
          <Link href="/cart" className="nav-link text-light">
            Carrinho
          </Link>
        </Nav>
      </Navbar>
    );
}