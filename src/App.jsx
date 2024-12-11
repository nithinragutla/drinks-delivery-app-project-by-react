import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Loginpage from "./drinks app/login";
import HomePage from "./drinks app/home";
import Ccoa from "./drinks app/coca";
import Cocktails from "./drinks app/tails";
import Cart from "./drinks app/cart";
import { useState } from "react";
import PaymentPage from "./drinks app/pay";
import AlcoholBrands from "./drinks app/alcohol";
import Paybuy from "./drinks app/paybuy";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (name, img) => {
    {console.log(name)}
    setCartItems((prevItems) => [...prevItems, { name, img }]);
  };
  return (
   <BrowserRouter>
    
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Ccoa" element={<Ccoa />} />
        <Route path="/Cocktails" element={<Cocktails />} />
        <Route path="/AlcoholBrands" element={<AlcoholBrands />} />
        <Route path="/Cart" element={<Cart cartItems={cartItems} />} />
        <Route path="//PaymentPage" element={<PaymentPage />} />
        <Route path="/Paybuy" element={<Paybuy/>}/>
        <Route path="/" element={<Loginpage />} />
      </Routes>
   
   {/* <Ccoa/> */}
    </BrowserRouter>
 
    
  );
}

export default App;
