import ShoppingCart from "./ShoppingCart";

export default function Header(){
    return (
        <header>
            <a href="index.html">
                <img src="images/LD_logo.svg" alt="LEGO-DUDES" />
            </a>
            <figure id="cart" role="button" onClick="toggleCart()">
                <span className="label">0</span>
                <img src="images/legocart.svg" alt="Handlekurv" />
            </figure>
            <ShoppingCart />
        </header>
    )
}