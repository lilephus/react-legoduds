import Form from "./Form";
import ProductCategory from "./ProductCategory";
import ProductPrice from "./ProductPrice";
import ProductTitle from "./ProductTitle";



export default function Product({name, cat, price, img, proid, cartItem, setCartItem, setAmount}){

    const handleClick = () =>{
            setCartItem((prev) => [
                {title: name, price: price, proid: proid}, ...prev
            ])
            console.log(cartItem)
            setAmount((prev) => prev + price)
           
    }
    return (
        <article className="product-card">
            <img src={"./images/PROD_"+img} alt={"Produktbilde av " + name} />
            <ProductTitle name={name}  />
            <ProductCategory cat={cat} />
            <ProductPrice price={price} />
            <Form name={name} handleClick={handleClick}/>
        </article>
    )
}