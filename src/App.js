import './App.css'
import Product from './components/Product'
import './css/main.css'
import products from './products.json'


function App() {
  return (
    <div className="App">
      <div className='content-container'>
      <main className='content'>
        {products.map((product) =>{
          return(
          <Product key={product.prodid} name={product.title} price={product.price} cat={product.category} />
          )
        } 
        )}
     </main>
     </div>
    </div>
  );
}

export default App;
