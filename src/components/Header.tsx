import Link from "next/link";
import { Nav, Navbar } from "reactstrap";

export default function Header(){
    return (
        <Navbar>
            <Link href="/" passHref>
                <a className="navbar-brand">
                    Inicio
                </a>
            </Link>
            <Nav className="flex-row">
                <Link href="/products">
                    <a className="nav-link">Products</a>
                </Link>
                <Link href="/cart">
                    <a className="nav-link">
                        Carrinho
                    </a>
                </Link>
            </Nav>
        </Navbar>
    )
}