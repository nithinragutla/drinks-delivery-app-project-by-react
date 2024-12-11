import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Loginpage from "./drinksapp/login";
import HomePage from "./drinksapp/home";
import Ccoa from "./drinksapp/coca";
import Cocktails from "./drinksapp/tails";
import Cart from "./drinksapp/cart";
import { useState } from "react";
import PaymentPage from "./drinksapp/pay";
import AlcoholBrands from "./drinksapp/alcohol";
import Paybuy from "./drinksapp/paybuy";
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
