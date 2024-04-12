import React from "react"
import { useRouter } from 'next/router'
import { getCar } from "../functions/getDetails"

const CarCard = () => {

    const router = useRouter();
    const slug = router.query.slug;
    const carData = require('../data/cars.json');
    const car = (getCar(slug, carData));
    const image = `/${car.image}`

    return (
        <div className="carCard">
            <h1>Your {car.name}</h1>
            <img src={image} alt={car.name} />
        </div>
    )
}

export default CarCard