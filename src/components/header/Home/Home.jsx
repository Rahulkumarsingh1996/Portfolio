import React, { useEffect } from 'react';
import "./home.css";
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';

const Home = ({ blackAndWhite }) => {
  useEffect(() => {
    // console.log("blackAndWhite in Home component:", blackAndWhite);
  }, [blackAndWhite]);
  return (
    <section className='home section ' id='home'>
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social blackAndWhite={blackAndWhite} />

          <div className="home__img-wrapper">
            <div className="home__img-glow"></div>
            <div className="home__img"></div>
          </div>

          <Data theamLight={blackAndWhite} />

        </div>
        <ScrollDown theamLight={blackAndWhite} />
      </div>
    </section>
  )
}

export default Home