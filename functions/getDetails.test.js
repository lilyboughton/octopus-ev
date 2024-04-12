import { calculateMonthlyRental, getCar, getCarRates } from './getDetails';

describe('getDetails', () => {

    describe('getCar', () => {

        const testCars = [
            {
                "id": "test1",
                "slug": "test-car-1",
                "name": "Test Car 1",
                "image": "test1"
            },
            {
                "id": "test2",
                "slug": "test-car-2",
                "name": "Test Car 2",
                "image": "test1"
            }
        ];

        it('returns correct data given a valid slug', () => {
            const expectedResult =
            {
                "id": "test1",
                "slug": "test-car-1",
                "name": "Test Car 1",
                "image": "test1"
            };

            expect(getCar('test-car-1', testCars)).toEqual(expectedResult);
        })

        it('gracefully fails if an invalid slug is supplied', () => {
            const expectedResult =
            {
                "id": "unknown",
                "slug": "unknown",
                "name": "Car not found",
                "image": "unknown"
            };

            expect(getCar('invalid-slug', testCars)).toEqual(expectedResult);
        })

    })

    describe('getCarRates', () => {

        const testRates = [
            {
                "carId": 1,
                "mileage": 5000,
                "term": 24,
                "rental": 503
            },
            {
                "carId": 2,
                "mileage": 5000,
                "term": 24,
                "rental": 521
            },
        ];

        it('returns the rental when provided valid parameters', () => {
            expect(getCarRates(2, 5000, 24, testRates)).toEqual(521);
        })

        it('gracefully fails if invalid carId is supplied', () => {
            expect(getCarRates(3, 5000, 24, testRates)).toEqual('Error, rental cannot be calculated');
        })

        it('gracefully fails if invalid mileage is supplied', () => {
            expect(getCarRates(2, 7000, 24, testRates)).toEqual('Error, rental cannot be calculated');
        })

        it('gracefully fails if invalid term is supplied', () => {
            expect(getCarRates(2, 5000, 25, testRates)).toEqual('Error, rental cannot be calculated');
        })
    })

    describe('calculateMonthlyRental', () => {

        it('calculates the monthly rental when given valid parameters', () => {
            expect(calculateMonthlyRental(503, 24, 9)).toEqual(377.25);
        })

        it('calculates the monthly rental when given valid parameters passed as strings', () => {
            expect(calculateMonthlyRental('503', '24', '9')).toEqual(377.25);
        })

        it('gracefully fails if invalid rental is supplied', () => {
            expect(calculateMonthlyRental('invalid rental', 24, 9)).toEqual('Error, rental cannot be calculated');
        })

        it('gracefully fails if invalid term is supplied', () => {
            expect(calculateMonthlyRental(503, 'invalid term', 9)).toEqual('Error, rental cannot be calculated');
        })

        it('gracefully fails if invalid initial term is supplied', () => {
            expect(calculateMonthlyRental(503, 24, 'invalid initial term')).toEqual('Error, rental cannot be calculated');
        })
    })
})