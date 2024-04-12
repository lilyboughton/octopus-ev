import React, { useState } from "react"
import RatesCalculationCard from "./ratesCalculationCard";

const RatesSelectionCard = () => {

    //This code is not very DRY. I would definitely look to refactor as part of next steps.

    const [initialRental, setInitialRental] = useState(1);
    const [annualMileage, setAnnualMileage] = useState(5000);
    const [lengthOfContract, setLengthOfContract] = useState(24);

    const handleRentalChange = (e) => {
        setInitialRental(e.target.value);
    };

    const handleMileageChange = (e) => {
        setAnnualMileage(e.target.value);
    };

    const handleLengthOfContractChange = (e) => {
        setLengthOfContract(e.target.value);
    };

    return (
        <>
            <form className="ratesSelectionCard">
                <div>
                    <label>Initial rental</label>
                    <select value={initialRental} onChange={handleRentalChange}>
                        <option value="1">1 month</option>
                        <option value="3">3 months</option>
                        <option value="6">6 months</option>
                        <option value="9">9 months</option>
                    </select>
                </div>
                <div>
                    <label>Annual mileage</label>
                    <select value={annualMileage} onChange={handleMileageChange}>
                        <option value="5000">5,000</option>
                        <option value="10000">10,000</option>
                        <option value="15000">15,000</option>
                    </select>
                </div>
                <div>
                    <label>Length of contract</label>
                    <select value={lengthOfContract} onChange={handleLengthOfContractChange}>
                        <option value="24">2 years</option>
                        <option value="36">3 years</option>
                        <option value="48">4 years</option>
                    </select>
                </div>
            </form>
            <RatesCalculationCard initialRental={initialRental} annualMileage={annualMileage} lengthOfContract={lengthOfContract} />
        </>
    )
}

export default RatesSelectionCard