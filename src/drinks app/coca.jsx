import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Importing Font Awesome Icon

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

  // Function to add items to the cart
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

    // Add item to cart and save back to localStorage
    cart.push(item);
    localStorage.setItem('coca', JSON.stringify(cart));

    // Provide user feedback
    alert(`${name} has been added to the cart.`);
  };

  return (
    <div
    style={{
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      backgroundImage: 'url("https://cdn.pixabay.com/photo/2017/05/30/05/46/goa-2355886_1280.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed', /* Keeps the image fixed while scrolling */
      minHeight: '100vh',
    }}
    >
      {/* Top-right navigation buttons */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          display: 'flex',
          gap: '10px',
        }}
      >
        {/* Back to Home Button */}
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

        {/* Cart Icon Button */}
        <button
          onClick={() => navigate('/Cart')}
          style={{
            backgroundColor: '#f39c12',
            color: '#fff',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FaShoppingCart style={{ marginRight: '5px' }} />
          Cart
        </button>
      </div>

      <h1 style={{ textAlign: 'center', color: 'black' }}>Soft Drinks</h1>
      {loading ? (
        <p style={{ textAlign: 'center', color: '#fff' }}>Loading...</p>
      ) : (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
            // opacity:0.8,
            // background-color: rgb(0 0 0 / 0.5),
            
          }}
        >
          {drinks.map((drink) => (
            <div
              key={drink.idDrink}
              style={{
                color:"whitesmoke",
                background: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
                border: '1px solid #ddd',
                padding: '10px',
                borderRadius: '8px',
                width: '200px',
                textAlign: 'center',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease',
                backgroundColor:"rgb(0 0 0 / 0.5)"
                
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <h3 style={{ fontSize: '18px', color: 'white' }}>
                {drink.strDrink}
              </h3>
              <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                style={{ width: '100%', borderRadius: '8px' }}
              />
              <p style={{ marginTop: '10px'}}>
                ₹ {Math.floor(Math.random() * (500 - 200 + 1) + 200)}
              </p>
             <div 
             style={{
              display: 'flex',
              flexWrap: "inherit",
              gap: '20px',
              justifyContent: 'center',
             }}>
             <button
                onClick={() => {
                  navigate('/Paybuy');
                  Buynow(Math.floor(Math.random() * (500 - 200 + 1) + 200));
                }}
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
              <button
                onClick={() =>
                  addToCart(
                    drink.strDrink,
                    drink.strDrinkThumb,
                    Math.floor(Math.random() * (500 - 200 + 1) + 200)
                  )
                }
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
             </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Ccoa;
