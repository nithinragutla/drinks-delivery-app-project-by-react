import React, { useState } from "react";
import "../styles/alcohol.css";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
const AlcoholBrands = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const alcoholBrands = [
    {
      id: 1,
      name: " Black label Whiskey",
      price: 1200,
      image: "https://www.shutterstock.com/image-photo/gomel-belarus-april-042017-johnnie-600nw-617919728.jpg",
    },
    {
      id: 2,
      name: "Vodka",
      price: 800,
      image: "https://c4.wallpaperflare.com/wallpaper/283/309/278/absolut-vodka-wallpaper-preview.jpg",
    },
    {
      id: 3,
      name: "Jamaican Rum ",
      price: 1000,
      image: "https://milroysofsoho.com/cdn/shop/files/JamaicanRumHD2014TheWhiskyJury.jpg?v=1730892142&width=640",
    },
    {
      id: 4,
      name: "Gin",
      price: 900,
      image: "https://mrwallpaper.com/images/hd/exquisite-bottle-of-bombay-dry-gin-89bcyerib3qhzbio.jpg",
    },
    {
      id: 5,
      name: "Tequila",
      price: 1500,
      image: "https://www.kindpng.com/picc/m/160-1609361_tequila-jose-cuervo-especial-hd-png-download.png",
    },
    {
        id: 6,
        name: " kingfisher light beer",
        price: 150,
        image: "https://produits.bienmanger.com/34519-0w470h470_Kingfisher_Premium_Beer_From_India.jpg",
      },
      {
        id: 7,
        name: "kingfisher strong beer",
        price: 200,
        image: "https://digitalcontent.api.tesco.com/v2/media/ghs/95ab2ac8-db7d-4a72-a3f6-b7b97e2955a6/bfcb2969-8739-43da-bb71-8d695019b808_759072045.jpeg?h=960&w=960",
      },
      {
        id: 8,
        name: "Red wine",
        price: 1000,
        image: "https://assets.superliquor.co.nz/thumbs/0011611.jpeg",
      },
      {
        id: 9,
        name: "8pm",
        price: 900,
        image: "https://www.monde-selection.com/wp-content/uploads/2024/06/1043085-768x768.png",
      },
      {
        id: 10,
        name: "budwiser",
        price: 150,
        image: "https://t3.ftcdn.net/jpg/03/56/47/82/360_F_356478205_SORnEpMGWbxFucPqD9Wfk2EDNGHjMC1e.jpg",
      },
      {
        id: 11,
        name: "magic momenent",
        price: 900,
        image: "https://hospitalitybizindia.com/wp-content/uploads/2024/03/Radico-khaitan--scaled.jpg",
      },
      {
        id: 12,
        name: "Dom perignon vintage",
        price: 1200,
        image: "https://delhidutyfree.co.in/media/catalog/product/cache/d58eb6b6cd0b875591a577c8f7a3618e/2/0/2000140_3_pmewktqrht7incmb.jpg",
      },
      {
        id: 13,
        name: "Caption morgan Rum",
        price: 800,
        image: "https://mcprod.spencers.in/media/catalog/product/1/3/1306540.jpg",
      },
      {
        id: 14,
        name: "GLENFIDDICH 12 Year Old",
        price: 1000,
        image: "https://liquorgenie.in/wp-content/uploads/2020/07/Glenfiddich-12-YRS.jpg",
      },
      {
        id: 15,
        name: "JOHNNIE WALKER Blue Label",
        price: 900,
        image: "https://prikeshop.ee/app/uploads/imported-images/johnnie-walker-blue-label-6573c793eff5b.png",
      },
      {
        id: 16,
        name: "TANQUERAY London Dry Gin",
        price: 2890,
        image: "https://cheers.com.np/uploads/products/305639852515295741900027157211145593747597.png",
      },
      {
        id: 17,
        name: "Royal Stag",
        price: 840,
        image: "https://www.spencers.in/media/catalog/product/1/0/1082453_1.jpg",
      },
      {
        id: 18,
        name: "Blenders Pride",
        price: 1320,
        image: "https://wallmart.com.sg/wp-content/uploads/2021/08/BLENDER-PRIDE-WHISKY-750ML.jpg",
      },
      {
        id: 19,
        name: "Mc Dowells no.1",
        price: 320,
        image: "https://www.boozebazaar.co.ke/wp-content/uploads/2022/11/Mc-DOWELLS.jpg",
      },
      {
        id: 20,
        name: "Old Monk",
        price: 750,
        image: "https://madhushalagroup.com/wp-content/uploads/2023/01/Old-Monk.png",
      },
      {
        id: 21,
        name: "Royal Challenge",
        price: 360,
        image: "https://winedeckgoa.com/wp-content/uploads/2021/06/Royal-Challenge.jpg",
      },
      {
        id: 22,
        name: "BREEZER CRANBERRY ",
        price: 150,
        image: "https://www.livcheers.com/static/content/images/liquor/LCIN00342.webp",
      },
      {
        id: 23,
        name: "BREEZER LIME ",
        price: 100,
        image: "https://m.media-amazon.com/images/I/61xC+BPborL.jpg",
      },
      {
        id: 24,
        name: "BREEZER ORANGE ",
        price: 145,
        image: "https://spencers.in/media/catalog/product/1/0/1087243_1.jpg",
      },
      {
        id: 25,
        name: "BREEZER PR BL.BERRY CRUSH",
        price: 100,
        image: "https://www.spencers.in/media/catalog/product/1/2/1244420_1.jpg",
      },
      {
        id: 26,
        name: "BREEZER PR. TROPICAL OR",
        price: 100,
        image: "https://liquorgenie.in/wp-content/uploads/2020/08/Bacardi-Breezer-Punch-Tropical.jpg",
      },
      {
        id: 27,
        name: "HEINEKEN LAGER BEER ",
        price: 185,
        image: "https://www.spencers.in/media/catalog/product/1/2/1244024_1.jpg",
      },
      {
        id: 28,
        name: "GOLDEN EAGLE beer",
        price: 150,
        image: "https://www.monde-selection.com/wp-content/uploads/2019/08/_DSF0916.png",
      },
      {
        id: 29,
        name: "KINGFISHER ULTRA LAGER BEER",
        price: 175,
        image: "https://www.spencers.in/media/catalog/product/1/2/1214398_1.jpg",
      },
      {
        id: 30,
        name: "WAVE PREMIUM BEER STRONG",
        price: 125,
        image: "https://wavelengthdrinks.myshopify.com/cdn/shop/files/5.png?v=1697453440&width=1445",
      },
     
  ];

  const Buynow=(price)=>{
    localStorage.setItem('price', JSON.stringify(price))
  }

  const addToCart = (name, img, price) => {
    const item = { name, img, price };

    let cart = [];
    try {
        cart = JSON.parse(localStorage.getItem('alcohol')) || [];
    } catch (error) {
        console.error('Error parsing local storage data:', error);
        cart = [];
    }

    const isDuplicate = cart.some(cartItem => cartItem.name === name && cartItem.img === img && cartItem.price === price);
    if (isDuplicate) {
        alert("Item is already in the cart");
        return;
    }

    cart.push(item);
    localStorage.setItem('alcohol', JSON.stringify(cart));
    alert(`${name} has been added to your cart`);
  };

  return (
    
    <div
    style={{
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      backgroundImage: 'url("https://cf.bstatic.com/xdata/images/hotel/max1024x768/483603505.jpg?k=ec8fcce3ffa17c8700c362bd51f8537f048fbc5c704f9efaa9617815b03ce79a&o=&hp=1")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed', /* Keeps the image fixed while scrolling */
      minHeight: '100vh',
    }}
    >
    <div className="alcohol-brands-container">
    <h1 className="alcohol-brands-title">Alcohol Brands</h1>
    {/* Back to Home and Cart Icon Buttons */}
    <div className="top-right-buttons">
      <button
        className="back-to-home-button"
        onClick={() => navigate("/HomePage")}
      >
        Back to Home
      </button>
      <button
        className="cart-icon-button"
        onClick={() => navigate("/cart")}
      >
        🛒
      </button>
    </div>

    {/* Alcohol Brands Grid */}
    <div className="alcohol-brands-grid">
      {alcoholBrands.map((brand) => (
        <div key={brand.id} className="alcohol-brand-card">
          <img src={brand.image} alt={brand.name} className="alcohol-brand-image" />
          <h3 className="alcohol-brand-name">{brand.name}</h3>
          <p className="alcohol-brand-price">₹{brand.price}</p>
          <button
            className="add-to-cart-button"
            onClick={() => addToCart(brand.name, brand.image, brand.price)}
          >
            Add to Cart
          </button>
          <button
            className="buy-now-button"
            onClick={() => {Buynow(brand.price) ,navigate("/Paybuy")}}
          >
            Buy Now
          </button>
        </div>
      ))}
      </div>
    </div>
  </div>
  );
};

export default AlcoholBrands;