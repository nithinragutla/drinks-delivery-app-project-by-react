import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon
import '../styles/cocktails.css'; // Import the CSS file

const Cocktails = ({ addToCart, setView }) => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const Buynow = (price) => {
    localStorage.setItem('price', JSON.stringify(price));
  };

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const response = await axios.get(
          'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
        );
        setCocktails(response.data.drinks);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the cocktails:', error);
        setLoading(false);
      }
    };
    fetchCocktails();
  }, []);

  const handleAddToCart = (name, img, price) => {
    const item = { name, img, price };
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const isItemInCart = cart.some(
      (cartItem) => cartItem.name === name && cartItem.img === img && cartItem.price === price
    );
    if (isItemInCart) {
      alert(`${name} is already in the cart.`);
      return;
    }

    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} has been added to the cart.`);
  };

  return (
    <div className="cocktails-container">
      <div className="top-bar">
        <button onClick={() => navigate('/HomePage')} className="btn-back-home">
          Back to Home
        </button>
        <button onClick={() => navigate('/Cart')} className="btn-cart">
          <FaShoppingCart size={20} />
        </button>
      </div>

      <h1 className="header">Cocktails</h1>
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <div className="cocktails-grid">
          {cocktails.map((cocktail) => (
            <div key={cocktail.idDrink} className="cocktail-card">
              <h3 className="cocktail-name">{cocktail.strDrink}</h3>
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="cocktail-img" />
              <p className="cocktail-price">₹ {Math.floor(Math.random() * (500 - 200 + 1) + 200)}</p>

              <button
                onClick={() =>
                  handleAddToCart(
                    cocktail.strDrink,
                    cocktail.strDrinkThumb,
                    Math.floor(Math.random() * (500 - 200 + 1) + 200)
                  )
                }
                className="btn-add-to-cart"
              >
                Add to Cart
              </button>

              <button
                onClick={() => {
                  navigate('/Paybuy');
                  Buynow(Math.floor(Math.random() * (500 - 200 + 1) + 200));
                }}
                className="btn-buy-now"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cocktails;
