import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon

const Cocktails = ({ addToCart, setView }) => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const Buynow=(price)=>{
    localStorage.setItem('price', JSON.stringify(price));
    
  }

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

  const handleBuyNow = (cocktail) => {
    alert(`You have bought ${cocktail.strDrink}!`);
  };

  const handleAddToCart = (name, img, price) => {
    const item = { name, img, price };
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the item already exists in the cart (optional)
    const isItemInCart = cart.some(cartItem => cartItem.name === name && cartItem.img === img && cartItem.price === price);
    if (isItemInCart) {
        alert(`${name} is already in the cart.`);
        return;
    }

    // Add the item to the cart
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} has been added to the cart.`);
};

  return (
    <div
    style={{
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      backgroundImage: 'url("https://images.pexels.com/photos/19533201/pexels-photo-19533201/free-photo-of-drink-by-swimming-pool.jpeg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed', /* Keeps the image fixed while scrolling */
      minHeight: '100vh',
    }}
    >
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      {/* Buttons at the top-right corner */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        display: 'flex',
        gap: '10px',
       
      }}>
        <button
          onClick={() => navigate('/HomePage')}
          style={{
            backgroundColor: '#3498db',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Back to Home
        </button>

        <button
          onClick={() => navigate('/Cart')} // Navigate to the Cart page
          style={{
            backgroundColor: '#f39c12',
            color: '#fff',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '50%',
            cursor: 'pointer',
          }}
        >
          <FaShoppingCart size={20} />
        </button>
      </div>

      <h1 style={{ textAlign: 'center', color: 'black' }}>Cocktails</h1>
      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading...</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {cocktails.map((cocktail) => (
            <div
              key={cocktail.idDrink}
              style={{
                color:"white",
                border: '1px solid #ddd',
                padding: '10px',
                borderRadius: '8px',
                width: '200px',
                textAlign: 'center',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                position: 'relative', // Add position relative to align the buttons inside the card
                transition: 'transform 0.3s ease-in-out', // Smooth transition for scaling
                backgroundColor:"rgb(0 0 0 / 0.5)"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} // Scale up on hover
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} // Reset scale when hover ends
            >
              <h3 style={{ fontSize: '18px', color: 'white' }}>{cocktail.strDrink}</h3>
              <img
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
                style={{ width: '100%', borderRadius: '8px' }}
              />
              <p style={{ marginTop: '10px' }}>₹ {Math.floor(Math.random() * (500 - 200 + 1) + 200)}</p>
               
               
              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(cocktail.strDrink, cocktail.strDrinkThumb, Math.floor(Math.random() * (500 - 200 + 1) + 200))}
                style={{
                  backgroundColor: '#2ecc71',
                  color: '#fff',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginTop: '10px',
                }}
              >
                Add to Cart
              </button>

              {/* Buy Now Button */}
              <button
                 onClick={() => {navigate('/Paybuy'),Buynow(Math.floor(Math.random() * (500 - 200 + 1) + 200))}}
                style={{
                  backgroundColor: '#e74c3c',
                  color: '#fff',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginTop: '10px',
                  marginLeft: '10px',
                }}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default Cocktails;
