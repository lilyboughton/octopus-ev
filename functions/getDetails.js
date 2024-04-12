export const getCar = (slug, carsData) => {
    let carToReturn = {
        "id": 'unknown',
        "slug": "unknown",
        "name": "Car not found",
        "image": "unknown"
    }

    carsData.forEach(car => {
        if (car.slug === slug) carToReturn = car
    });
    return carToReturn
}

export const getCarRates = (id, mileage, term, ratesData) => {
    let rentalToReturn = 'Error, rental cannot be calculated';

    ratesData.forEach(rate => {
        if (parseInt(rate.carId) === parseInt(id)
            && parseInt(rate.mileage) === parseInt(mileage)
            && parseInt(rate.term) === parseInt(term)) {
            rentalToReturn = rate.rental;
        }
    })

    return rentalToReturn;
}

export const calculateMonthlyRental = (rental, term, initialRental) => {
    let monthlyRental = 'Error, rental cannot be calculated';

    if (parseInt(rental) && parseInt(term) && parseInt(initialRental)) {
        monthlyRental = (parseInt(rental) * parseInt(term)) / (parseInt(term) + parseInt(initialRental) - 1);
    }

    return monthlyRental
}
