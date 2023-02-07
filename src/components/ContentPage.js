import products from '../products.json'
import Product from './Product'
export default function ContentPage({name}){
    return (
        <main>
            <h1>{name}</h1>
            <div id="product-list">
            {products.map((product) =>{
             return(
                <Product key={product.prodid} name={product.title} price={product.price} cat={product.category} />
                )
                } 
            )}
            </div>
        </main>
    )
}