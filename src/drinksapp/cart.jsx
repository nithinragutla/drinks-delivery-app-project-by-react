import { useEffect, useState } from "react";
import '../styles/cart.css';
import { useNavigate } from "react-router-dom";

function Cart() {
    const navigate = useNavigate();
    const [cartData, setCartData] = useState({
        cart: [],
        coca: [],
        alcohol: []
        
    });

    useEffect(() => {
        // Load all data from localStorage on component mount
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        const storedCoca = JSON.parse(localStorage.getItem('coca')) || [];
        const storedAlcohol = JSON.parse(localStorage.getItem('alcohol')) || [];
        setCartData({ cart: storedCart, coca: storedCoca, alcohol: storedAlcohol });
    }, []);

    const handleDelete = (type, itemName, itemImg, itemPrice) => {
        const updatedItems = cartData[type].filter(
            item => item.name !== itemName || item.img !== itemImg || item.price !== itemPrice
        );
        const updatedCartData = { ...cartData, [type]: updatedItems };
        setCartData(updatedCartData);
        localStorage.setItem(type, JSON.stringify(updatedItems));
    };

    // Destructure cartData for cleaner usage
    const { cart, coca, alcohol } = cartData;

    // Calculate totals
    const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);
    const cocaTotal = coca.reduce((sum, item) => sum + item.price, 0);
    const alcoholTotal = alcohol.reduce((sum, item) => sum + item.price, 0);

    const overallTotal = cartTotal + cocaTotal + alcoholTotal;

    // Save overall total to localStorage
    useEffect(() => {
        localStorage.setItem('overallTotal', JSON.stringify(overallTotal));
    }, [overallTotal]);

    return (
        <div className="niiiii">
        <div className="cart-container">
        <div className="headers">
            <h1>Your Cart</h1>
            <button
                className="home-button"
                onClick={() => (window.location.href = "/HomePage")}
            >
                Back to Home
            </button>
        </div>
        {cart.length > 0 || coca.length > 0 || alcohol.length > 0 ? (
            <>
                <table className="cart-table">
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={`cart-${index}`}>
                                <td>{item.name}</td>
                                <td>
                                    <img src={item.img} alt={item.name} />
                                </td>
                                <td>${item.price}</td>
                                <td>
                                    <button
                                        onClick={() =>
                                            handleDelete('cart', item.name, item.img, item.price)
                                        }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {coca.map((item, index) => (
                            <tr key={`coca-${index}`}>
                                <td>{item.name}</td>
                                <td>
                                    <img src={item.img} alt={item.name} />
                                </td>
                                <td>₹{item.price}</td>
                                <td>
                                    <button
                                        onClick={() =>
                                            handleDelete('coca', item.name, item.img, item.price)
                                        }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {alcohol.map((item, index) => (
                            <tr key={`alcohol-${index}`}>
                                <td>{item.name}</td>
                                <td>
                                    <img src={item.img} alt={item.name} />
                                </td>
                                <td>${item.price}</td>
                                <td>
                                    <button
                                        onClick={() =>
                                            handleDelete('alcohol', item.name, item.img, item.price)
                                        }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="totals">
                    <p>Cocktails Total: ₹{cartTotal}</p>
                    <p>soft drink Total: ₹{cocaTotal}</p>
                    <p>Alcohol Total: ₹{alcoholTotal}</p>
                    <h2>Overall Total: ₹{overallTotal}</h2>
                </div>
                <div className="pay-now-container">
                    <button
                        className="pay-now-button"
                        onClick={() => navigate('/PaymentPage')}
                    >
                        Pay Now
                    </button>
                </div>
            </>
        ) : (
            <p className="empty-cart">Your cart is empty!</p>
        )}
    </div>
    </div>
    )}    

export default Cart;
