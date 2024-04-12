import React from "react"
import { getCar, getCarRates } from "../functions/getDetails"
import { useRouter } from "next/router";

const RatesCalculationCard = (props) => {

    const router = useRouter();
    const slug = router.query.slug;
    const carData = require('../data/cars.json');
    const ratesData = require('../data/rates.json')

    const currencyFormatter = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
        maximumFractionDigits: 0,
    });

    const car = (getCar(slug, carData));
    const carId = car.id;
    const mileage = props.annualMileage;
    const term = props.lengthOfContract;
    const initialRentalLength = props.initialRental;

    const monthlyRental = getCarRates(carId, mileage, term, ratesData);
    const initialRental = monthlyRental * initialRentalLength;

    return (
        <div className="ratesCalculationCard">
            <div>
                <p>Initial rental (exc VAT)</p>
                <p>{currencyFormatter.format(initialRental)}</p>
            </div>
            <div>
                <p>Monthly rental (exc VAT)</p>
                <p>{currencyFormatter.format(monthlyRental)}</p>
            </div>
            <button>Choose your build</button>
        </div>
    )
}

export default RatesCalculationCard