import { useEffect, useState } from "react";
import Title from "./images/title.svg";
import DollarIcon from "./images/icon-dollar.svg";
import PersonIcon from "./images/icon-person.svg";

import "./App.css";

function App() {
  const [Bill, setBill] = useState("");
  const [Percentage, setPercentage] = useState("");
  const [NumberOfPeople, setNumberOfPeople] = useState("");

  let tip = (Bill * (Percentage / 100)) / NumberOfPeople;
  tip = tip.toFixed(2);

  let total =
    Bill / NumberOfPeople + (Bill * (Percentage / 100)) / NumberOfPeople;
  total = total.toFixed(2);

  let error;

  if (isNaN(tip) || total === "Infinity") {
    tip = "0.00";
    total = "0.00";
  }

  if (NumberOfPeople === "0") {
    error = "It can't be zero";
  }

  useEffect(() => {
    if (NumberOfPeople === "0") {
      document.getElementById("number-of-people").style.border =
        "2px solid rgb(255, 109, 73)";
    } else {
      document.getElementById("number-of-people").style.border = "none";
    }
  });

  useEffect(() => {
    if (tip === "0.00" || total === "0.00") {
      document.getElementById("button").disabled = true;
    } else {
      document.getElementById("button").disabled = false;
    }
  });

  const resetValues = (e) => {
    document.getElementById("main-form").reset();
    setBill((e.target.value = 0));
  };

  return (
    <>
      <div className="title-logo">
        <p className="title">
          <img src={Title} alt="logo" />
        </p>
      </div>

      <div className="main-container">
        <div className="right-side">
          <form action="#" id="main-form">
            <div className="set">
              <label>
                <h5>Bill</h5>
              </label>

              <span>
                <img className="dollar-bill" src={DollarIcon} alt="dollar" />
              </span>
              <input
                className="bil-value-input inp"
                dir="rtl"
                id="bill"
                type="number"
                placeholder="0.00"
                onChange={(e) => setBill(e.target.value)}
              />
            </div>

            <div className="set">
              <label>
                <h5>Select Tip %</h5>
              </label>
              <div className="select-tip">
                <input
                  label="5%"
                  type="radio"
                  id="5-percent"
                  name="percent"
                  value="5"
                  onChange={(e) => setPercentage(e.target.value)}
                />
                <input
                  label="10%"
                  type="radio"
                  id="10-percent"
                  name="percent"
                  value="10"
                  onChange={(e) => setPercentage(e.target.value)}
                />
                <input
                  label="15%"
                  type="radio"
                  name="percent"
                  id="15-percent"
                  value="15"
                  onChange={(e) => setPercentage(e.target.value)}
                />
                <input
                  label="25%"
                  type="radio"
                  id="25-percent"
                  name="percent"
                  value="25"
                  onChange={(e) => setPercentage(e.target.value)}
                />
                <input
                  label="50%"
                  type="radio"
                  id="50-percent"
                  name="percent"
                  value="50"
                  onChange={(e) => setPercentage(e.target.value)}
                />
                <input
                  className="custom"
                  dir="rtl"
                  type="number"
                  name="percent"
                  id="custom"
                  placeholder="Custom"
                  onChange={(e) => setPercentage(e.target.value)}
                />
              </div>
            </div>

            <div className="set">
              <label className="label-error">
                <h5>Number of People</h5>
                <p>{error}</p>
              </label>

              <span>
                <img className="person" src={PersonIcon} alt="dollar" />
              </span>

              <input
                className="number-of-people inp"
                dir="rtl"
                id="number-of-people"
                type="number"
                placeholder="0"
                name="number-of-people"
                onChange={(e) => setNumberOfPeople(e.target.value)}
                required
              />
            </div>
          </form>
        </div>

        <div className="left-side">
          <div className="results">
            <div>
              <h5>Tip Amount</h5>
              <p>/ person</p>
            </div>
            <h1 className="tip-amount">
              <img className="dollar" alt="dollar" src={DollarIcon} />
              {tip}
            </h1>
          </div>

          <div className="results">
            <div>
              <h5>Total</h5>
              <p>/ person</p>
            </div>
            <h1 className="total-amount">
              <img className="dollar" alt="dollar" src={DollarIcon} />
              {total}
            </h1>
          </div>

          <button
            type="button"
            id="button"
            className="button"
            value="0"
            onClick={resetValues}
          >
            RESET
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
