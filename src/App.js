import React, {useState} from 'react'
import Nav from './comp/nav'
import Rout from './comp/rout';
import Footer from './comp/footer';
import { BrowserRouter} from 'react-router-dom';
import Productdetail from './comp/productdetails';

const App = () => {
  const [product, setProduct] = useState(Productdetail)
  const searchbtn = (product) =>
    {
      const change = Productdetail.filter((x) =>
      {
        return x.Cat === product
      })
      setProduct(change)
    }
    
  return (
    <>
      <BrowserRouter>
        <Nav searchbtn={searchbtn}/>
        <Rout product={product} setProduc={setProduct} />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
