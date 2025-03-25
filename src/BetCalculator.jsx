import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function BetCalculator() {
  const { register, handleSubmit, setValue } = useForm();
  const [stakeTeamA, setStakeTeamA] = useState(0);
  const [stakeTeamB, setStakeTeamB] = useState(0);
  const [netAmount, setNetAmount] = useState(0);
  const [netProfitLoss, setNetProfitLoss] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);

  const onSubmit = (data) => {
    const totalMoney = Math.floor(parseFloat(data.totalMoney)); // Round down the total money to whole number
    const oddsTeamA = parseFloat(data.oddsTeamA);
    const oddsTeamB = parseFloat(data.oddsTeamB);

    if (totalMoney > 0 && oddsTeamA > 0 && oddsTeamB > 0) {
      const stakeA = Math.floor((totalMoney * oddsTeamB) / (oddsTeamA + oddsTeamB)); // Round stakeA to nearest integer
      const stakeB = totalMoney - stakeA; // Ensure stakeB is also an integer after rounding stakeA

      setStakeTeamA(stakeA);
      setStakeTeamB(stakeB);

      const totalReturnA = stakeA * oddsTeamA;
      const totalReturnB = stakeB * oddsTeamB;


      // Set the highest net amount as the return
      setNetAmount(Math.max(totalReturnA, totalReturnB).toFixed(2));
      setNetProfitLoss((totalReturnA - totalMoney).toFixed(2));

      setIsCalculated(true); // Set flag to show results
    } else {
      alert('Please enter valid numbers for total amount and odds.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-semibold text-center text-green-400 mb-6">BetSmart Calculator</h1>

        {/* Input Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-sm text-gray-400">Total Money:</label>
            <input
              type="number"
              defaultValue={0}
              {...register('totalMoney', { required: true })}
              onFocus={(e) => e.target.select()} // Select the content when focused
              onChange={(e) => setValue('totalMoney', Math.max(0, parseFloat(e.target.value)))}
              min="0"
              step="1" // Only allow integer values
              className="p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-400">Odds for Team A:</label>
            <input
              type="number"
              defaultValue={0}
              {...register('oddsTeamA', { required: true })}
              onFocus={(e) => e.target.select()}
              onChange={(e) => setValue('oddsTeamA', parseFloat(e.target.value))}
              min="0"
              step="0.01"
              className="p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-400">Odds for Team B:</label>
            <input
              type="number"
              defaultValue={0}
              {...register('oddsTeamB', { required: true })}
              onFocus={(e) => e.target.select()}
              onChange={(e) => setValue('oddsTeamB', parseFloat(e.target.value))}
              min="0"
              step="0.01"
              className="p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Calculate Button */}
          <button
            type="submit"
            className="w-full py-3 mt-6 bg-green-500 text-white rounded-md hover:bg-green-400 transition"
          >
            Calculate Bets
          </button>
        </form>

        {/* Results Section - only display after calculation */}
        {isCalculated && (
          <div className="mt-8 text-center bg-gray-700 p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Calculated Stakes</h2>
            <p className="text-lg font-medium">
              Stake on Team A: <span className="font-bold">Rs.{stakeTeamA}</span>
            </p>
            <p className="text-lg font-medium">
              Stake on Team B: <span className="font-bold">Rs.{stakeTeamB}</span>
            </p>

            {/* Net Amount and Profit/Loss */}
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Net Amount You Will Get</h2>
              <p className="text-lg font-medium">
                Net Amount: <span className="font-bold">Rs.{netAmount}</span>
              </p>

              <h2 className="text-xl font-semibold mt-4 mb-2">Net Profit/Loss</h2>
              <p
                className={`text-lg font-medium ${
                  netProfitLoss >= 0 ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {netProfitLoss >= 0
                  ? `Profit: +Rs.${netProfitLoss}`
                  : `Loss: -Rs.${Math.abs(netProfitLoss)}`}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BetCalculator;