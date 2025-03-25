import React from 'react';
import { Link } from 'react-router-dom';
import img from './assets/img.png';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="flex flex-row justify-between items-center w-full h-full">
        <div className="text-left ml-20 w-1/2 p-8">
          <h1 className="text-7xl font-serif font-semibold text-green-400 mb-6">
            Welcome to BetSmart!
          </h1>
          <p className="text-lg font-medium">
            BetSmart is a platform that helps you make informed decisions when it comes to betting. Our calculator tool allows you to calculate the stakes and potential winnings for different betting scenarios.<br/><br/>
            <span className='font-bold text-3xl font-serif'>MAKE THE MOST OUT OF <span className='text-orange-500'>STAKE EARLY SIX OFFER...</span>  </span> <br/><br/>
            <Link to="/BetCalculator">
              <button
                className="w-[100px] py-3 bg-green-500 text-white rounded-md hover:bg-green-400 transition"
              > Win </button>
            </Link>
          </p>
        </div>
        <img
          src={img}
          alt="ravi bhai Image"
          className="w-1/3 h-full mr-20 object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default Home;