import React from 'react'
import Nav from './comp/nav'
import Rout from './comp/rout';
import Footer from './comp/footer';
import { BrowserRouter} from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Rout/>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
