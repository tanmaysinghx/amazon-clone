import React from "react";
import "./Home.css";
import Product from "./Product";


function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
        <Product title='OnePlus 8 Pro (Glacial Green 12GB RAM+256GB Storage)' price={87.99} image="https://images-eu.ssl-images-amazon.com/images/I/41vqgX0c5EL._AC_US240_FMwebp_QL65_.jpg" rating={4}/>
        <Product title='Sony Bravia 138.8 cm (55 inches) 4K Ultra HD Smart LED TV KD-55X7002G (Black)' price={99.99} image="https://images-eu.ssl-images-amazon.com/images/I/51Y0UPkomKL._AC_US327_FMwebp_QL65_.jpg" rating={2}/>
        </div>

        <div className="home__row">
        <Product title='Mi TV 4A PRO 80 cm (32 inches) HD Ready Android LED TV (Black) | With Data Saver' price={49.99} image="https://images-eu.ssl-images-amazon.com/images/I/51usZonCf7L._AC_US327_FMwebp_QL65_.jpg" rating={5}/>
        <Product title='The Lean Start UP' price={99.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5}/>
        <Product title='Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)' price={29.99} image="https://images-eu.ssl-images-amazon.com/images/I/41+xWzgV8jL._AC_US240_FMwebp_QL65_.jpg" rating={1}/>
        </div>

        <div className="home__row">
        <Product title='OnePlus 8 (Onyx Black 12GB RAM+256GB Storage)' price={80.00} image="https://images-eu.ssl-images-amazon.com/images/I/41QtZi2JNnL._AC_US240_FMwebp_QL65_.jpg" rating={5}/>
        <Product title='Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)' price={29.99} image="https://images-eu.ssl-images-amazon.com/images/I/41+xWzgV8jL._AC_US240_FMwebp_QL65_.jpg" rating={1}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
