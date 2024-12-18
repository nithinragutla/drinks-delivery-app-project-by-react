import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Importing Font Awesome Icon
import { FaHome } from 'react-icons/fa';
import '../styles/soft.css'; // Import the CSS file

const Ccoa = () => {
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const Buynow = (price) => {
    localStorage.setItem('price', JSON.stringify(price));
  };

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const response = await axios.get(
          'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
        );
        setDrinks(response.data.drinks);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the drinks:', error);
        setLoading(false);
      }
    };
    fetchDrinks();
  }, []);

  const addToCart = (name, img, price) => {
    const item = { name, img, price };
    const cart = JSON.parse(localStorage.getItem('coca')) || [];
    const isItemInCart = cart.some(
      (cartItem) =>
        cartItem.name === name && cartItem.img === img && cartItem.price === price
    );
    if (isItemInCart) {
      alert(`${name} is already in the cart.`);
      return;
    }

    cart.push(item);
    localStorage.setItem('coca', JSON.stringify(cart));
    alert(`${name} has been added to the cart.`);
  };

  return (
    <div className="ccoa-container">
      <div className="navigation">
      <button className="home-button" onClick={() => navigate('/HomePage')}>
      <FaHome/> {/* Home icon with spacing */}
    </button>
        <button className="cart-button" onClick={() => navigate('/Cart')}>
          <FaShoppingCart className="cart-icon" />
          Cart
        </button>
      </div>

      <h1 className="heading">Soft Drinks</h1>
      {loading ? (
        <p className="loading-message">Loading...</p>
      ) : (
        <div className="drinks-grid">
          {drinks.map((drink) => (
            <div className="drink-card" key={drink.idDrink}>
              <h3>{drink.strDrink}</h3>
              <img src={drink.strDrinkThumb} alt={drink.strDrink} />
              <p>₹ {Math.floor(Math.random() * (500 - 200 + 1) + 200)}</p>
              <div className="button-group">
                <button
                  onClick={() => {
                    navigate('/Paybuy');
                    Buynow(Math.floor(Math.random() * (500 - 200 + 1) + 200));
                  }}
                >
                  Buy Now
                </button>
                <button
                  onClick={() =>
                    addToCart(
                      drink.strDrink,
                      drink.strDrinkThumb,
                      Math.floor(Math.random() * (500 - 200 + 1) + 200)
                    )
                  }
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Ccoa;
