import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import Navbar from "./nav";

const HomePage = () => {
    const navigate = useNavigate();
  return (
    <>
    
    <Navbar/>
    <div className="homepage"  >
      
      <div className="card-container" >
        <div className="card">
          <h2>Soft Drinks</h2>
          <p>Refreshing soft drinks for every occasion.</p>
          <button className="see-more"  onClick={()=> navigate("/Ccoa")}>See More</button>
        </div>
        <div className="card">
          <h2>Cocktails</h2>
          <p>Exquisite cocktails crafted for taste and style.</p>
          <button className="see-more" onClick={()=> navigate("/Cocktails")}>See More</button>
        </div>
        <div className="card">
          <h2>Alcohol</h2>
          <p>A wide selection of alcoholic beverages to enjoy.</p>
          <button className="see-more" onClick={()=> navigate("/AlcoholBrands")}>See More</button>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default HomePage;
