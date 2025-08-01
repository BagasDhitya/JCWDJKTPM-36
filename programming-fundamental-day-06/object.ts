interface FlightSchedule {
    flightNumber: string,
    airline: string,
    departureAirport: string,
    arrivalAirport: string,
    departureTime: string,
    arrivalTime: string,
    gate?: string,
    status: 'On Time' | 'Delayed' | 'Cancelled' | 'Boarding'
}

const flightToday: FlightSchedule = {
    flightNumber: 'GA-215',
    airline: 'Garuda Indonesia',
    departureAirport: 'CGK - Soekarno Hatta International Airport',
    arrivalAirport: 'DPS - Ngurah Rai International Airport',
    departureTime: '2025-07-31 07:00',
    arrivalTime: '2025-07-31 08.00',
    gate: 'D12',
    status: 'Boarding'
}

// accessing property (pakai dot .)
console.log('access gate : ', flightToday.gate);
console.log('access status : ', flightToday.status);

// accessing property (pakai value [])
console.log('access airline : ', flightToday['airline']);
console.log('access flight number : ', flightToday['flightNumber']);

// add new property
(flightToday as any).type = 'Airbus'
console.log('access type : ', (flightToday as any).type)

// delete new property
delete flightToday.gate
console.log('after gate deleted : ', flightToday)

// update property
flightToday.flightNumber = 'CT-340'
flightToday.airline = 'Citilink Indonesia'
console.log('after update flight number & airline : ', flightToday)

// ----------------------------------------------------------------
console.log(' -------------------------------------- ')

interface Detail {
    brand: string,
    model: string,
    year: number
}

interface MyCar {
    licensePlate: string,
    isElectric: boolean,
    mileage: number,
    detail: Detail
}

const myCar: MyCar = {
    licensePlate: 'B 1234 CD',
    isElectric: false,
    mileage: 32750,
    detail: {
        brand: 'Toyota',
        model: 'Yaris',
        year: 2019
    }
}

// -- mengakses semua key dari object myCar
function accessAllKey(data: MyCar) {
    for (const item in data) {
        console.log(`list key : ${item} - ${data[item as keyof typeof data]}`)
    }
}

// accessAllKey(myCar)

// -- mengakses semua key menggunakan Object.keys
const keys = Object.keys(myCar)
console.log('keys : ', keys)

interface PrivateVehicle {
    brand: string,
    type: string,
    year: number
}

interface Person {
    name: string,
    age: number,
    info: {
        address: string,
        hobbies: string[],
        vehicles: PrivateVehicle[]
    }
}

const personal: Person = {
    name: 'Bob',
    age: 26,
    info: {
        address: 'Jl. Sudirman, Jakarta Selatan',
        hobbies: ['coding', 'singing', 'gaming'],
        vehicles: [
            {
                brand: 'Honda Vario 150',
                type: 'Motorcycle',
                year: 2024
            },
            {
                brand: 'Toyota Yaris',
                type: 'Car',
                year: 2019
            }
        ]
    }
}

console.log('access hobby : ', personal.info.hobbies[2])
console.log('access year 2019 on vehicles : ', personal.info.vehicles[1].year)

// ----------------------------------------------------------------
console.log(' -------------------------------------- ')

// -- MUTABLE & IMMUTABLE
// MUTABLE -> bisa dimodifikasi nilainya dan propertinya (add, update, dan remove)
// IMMUTABLE -> tidak bisa dimodifikasi, kalau ingin berubah harus buat salinan baru

// - contoh mutable (data non primitive)
const vehicle: any = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020
}

// mutable : bisa kita ubah langsung
vehicle.year = 2022 // update
vehicle.color = 'black' // add
delete vehicle.brand // delete

// - contoh immutable (data primitive)
let personName: string = 'John Doe'
// personName[0] = 'M' -> tidak akan mengubah string

// solusi : buat string baru
personName = 'M' + personName.slice(1)
console.log(personName)

// ----------------------------------------------------------------
console.log(' -------------------------------------- ')

// -- DESTRUCTURING ASSIGNMENT
// mengambil property secara langsung

interface Smartphone {
    brand: string,
    model: string,
    storage: number,
    color: string,
    is5G: boolean,
    isRinging: () => string
}

const smartphone: Smartphone = {
    brand: 'Samsung',
    model: 'Galaxy S23',
    storage: 256,
    color: 'Phantom Black',
    is5G: true,
    isRinging: function () {
        return `Phone is ringing`
    }
}

const { brand, model, storage, color, is5G } = smartphone // destructuring assignment

console.log('brand : ', brand)
console.log('model : ', model)
console.log('storage : ', storage)

// -- SPREAD OPERATOR
// duplikat objek
const updatedPhone: any = {
    ...smartphone,
    color: 'Cream',
    storage: 512
}

console.log('updated : ', updatedPhone) // versi terbaru dengan color 'Cream' dan storage 512
console.log('ringing : ', updatedPhone.isRinging())

// -- this Keyword
const motorcycle: any = {
    brand: 'Honda Vario 150',
    year: 2024,
    getInfo: function () {
        return `This is a ${this.brand} with ${this.year}`
    }
}

console.log(motorcycle.getInfo())