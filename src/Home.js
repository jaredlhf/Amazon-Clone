import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" 
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg" 
                alt=""/>

                <div className="home__row">

                    <Product 
                        id="12341231"
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" 
                        price={29.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg' 
                        rating={5}
                    />
                    <Product 
                        id="450694003"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)"
                        price={1129.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg"
                        rating={5}
                        />
                </div>
                <div className="home__row">
                    <Product 
                        id="124534225"
                        title="SAMSUNG: EVO Select 128GB MicroSDXC UHS-I U3 100MB/s Full HD"
                        price={23.05}
                        image="https://images-na.ssl-images-amazon.com/images/I/81axmUuRHrL._AC_SL1500_.jpg"
                        rating={5}
                        />
                    <Product 
                        id="23532542"
                        title="Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor Black"
                        price={166.85}
                        image="https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_SL1500_.jpg"
                        rating={4}
                        />
                    <Product 
                        id="543523523"
                        title="AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler"
                        price={277.20}
                        image="https://images-na.ssl-images-amazon.com/images/I/71WPGXQLcLL._AC_SL1384_.jpg"
                        rating={5}
                        />
                </div>
                <div className="home__row">
                    <Product 
                        id="413254363"
                        title="GuoTonG Warm LED Strip Lights, Waterproof cuttable 300 SMD 2835 LED Tape, 3000K 12V 16.4ft/5m Flexible Ribbon, Kitchen Cabinet Lighting, Outdoor/Indoor"
                        price={13.55}
                        image="https://images-na.ssl-images-amazon.com/images/I/71pnSfy-oLL._AC_SL1258_.jpg"
                        rating={3}
                        />
                </div>
            </div>
        </div>
    );
}

export default Home;
