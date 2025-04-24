import "./App.css";
import InputBox from "./components/InputBox";
import useCurrencyinfo from "./hooks/useCurrencyinfo";
import { useState } from "react";
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyinfo = useCurrencyinfo(from);
  const options = Object.keys(currencyinfo);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  const convert = () => {
    setConvertedAmount(amount * currencyinfo[to]);
  };
  return (
    <div
      className="w-full h-screen flex  flex-wrap justify-center items-center gap-[50px] bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://media.istockphoto.com/id/1470430315/vector/dollar-sign-grunge-background.jpg?s=612x612&w=0&k=20&c=-c6Q4XT7o00W28aEOFkbdBOaY9CItflQzi2eZdrOq2k=')`,
      }}
    >
      <div className="currency_image w-[20%] h-[70%]">
        <img
          src="https://purepng.com/public/uploads/large/purepng.com-green-dollar-signobjectsgreen-dollar-signmoney-cash-dollar-sign-object-currency-631522323982mojdw.png"
          alt="currency image"
        />
      </div>
      <div className="card">
        <div className="w-full max-w-md border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-green-500/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  setFrom(currency);
                }}
                selectedCurrency={from}
                onAmountChange={(amount) => {
                  setAmount(amount);
                }}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-green-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
