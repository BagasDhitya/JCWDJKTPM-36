// -- OBJECT
interface Vehicle {
    brand: string,
    model: string,
    year: string
}

interface Car extends Vehicle {
    fuelType?: string, // membuat property jadi opsional (tidak wajib diisi)
    transmission: 'manual' | 'automatic'
}

const car: Car = {
    brand: 'Toyota',
    model: 'Yaris',
    year: '2019',
    fuelType: 'Petrol',
    transmission: 'automatic'
}

console.log('car : ', car)
console.log('accessing brand & model : ', car.brand + " " + car.model)
console.log('accessing fuelType : ', car.fuelType)

car.brand = 'BYD'
car.model = 'Sealion'

console.log('car after modify : ', car)
console.log('accessing brand & model after modify : ', car.brand + " " + car.model)