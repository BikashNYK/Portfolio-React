import React from 'react';
import Content from './Content';
import Spline from '@splinetool/react-spline';
import './Main.css';

const Main = () => {
  return (
    <>
      <main className='main'>
        <section className='section' id='about'>
          {/* image */}
          <div className='image-container'>
            <div className='spline-container'>
              {/* <img src="/bikash.jpg" alt="bikash-img" className='img' /> */}
              <Spline scene="https://prod.spline.design/mK8DvtaJ0TVjixlA/scene.splinecode" />
            </div>
          </div>
          {/* content box */}
          <Content />
        </section>
      </main>
    </>
  );
};

export default Main;
