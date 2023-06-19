import React, { useState } from 'react';
import '../App.css';
// images
import ImgVucut from '../img/vucut.png';
import ImgTable from '../img/pngaaa.com-5585465.png';
// images

function Mainpage() {
  // veriables
  const [length, setLength] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(0);
  const [showResult, setShowResult] = useState(false);
  // veriables

  // functions
  const handleLengthChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setLength(value);
  };

  const handleWeightChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setWeight(value);
  };

  const handleCalculate = () => {
    if (length > 0 && weight > 0) {
      const heightInMeters = length / 100;
      const calculatedBmi = weight / (heightInMeters * heightInMeters);
      setBmi(calculatedBmi);
      setShowResult(true);
    } else {
      alert('Please enter valid length and weight values.');
    }
  };

  const getBmiCategory = () => {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return 'Normal';
    } else if (bmi >= 25 && bmi <= 29.9) {
      return 'Overweight';
    } else if (bmi >= 30 && bmi <= 34.9) {
      return 'Obese';
    } else if (bmi >= 35) {
      return 'Extremely Obese';
    }
    return '';
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCalculate();
    }
  };
  // functions


  return (
    <>
      <div className="container d-flex align-items-center justify-content-center vh-100">
        <div className="row">
          <div className="col-lg-4">
            <img src={ImgVucut} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 text-center">
            <h1 className="mb-5">BMI Calculator</h1>
            {showResult ? (
              <div className="mb-5">
                <img src={ImgTable} className='img-fluid mb-5' alt="" />
                <h2>Your BMI: {bmi.toFixed(2)}</h2>
                <h3>Category: {getBmiCategory()}</h3>
                <button onClick={() => {setShowResult(false)}} className='btn btn-warning btn-lg mt-3'>Recalculate</button>
              </div>
            ) : (
              <>
                <div className="mb-5">
                  <label>Your Length: &nbsp;&nbsp;</label>
                  <input
                    className="form-control-lg"
                    value={length}
                    type="text"
                    onChange={handleLengthChange}
                    onKeyDown={handleKeyPress}
                  />
                </div>
                <div className="mb-5">
                  <label>Your Weight: &nbsp;&nbsp;</label>
                  <input
                    className="form-control-lg"
                    value={weight}
                    type="text"
                    onChange={handleWeightChange}
                    onKeyDown={handleKeyPress}
                  />
                </div>
                <div>
                  <button
                    onClick={handleCalculate}
                    type="button"
                    className="btn btn-warning btn-lg"
                  >
                    Calculate
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}


export default Mainpage;
