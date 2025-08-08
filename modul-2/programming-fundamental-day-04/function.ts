// -- FUNCTION

// name: string -> parameter
function greet(name: string) {
    console.log(`Hello, my name is ${name}`)
}

// Bagas,Ibnu,Hylmi, dst. -> argument
greet('Bagas')
greet('Ibnu')
greet('Hylmi')
greet('Evan')
greet('Ghani')
greet('Ichwan')

console.log(' ------------------- ')

// menghitung total dari dua variabel
function sumBetweenTwoVariable(x: number, y: number) {
    let sum: number = x + y
    return sum // nilai sum dikembalikan dengan return supaya bisa diakses di luar fungsi ini
}

console.log(sumBetweenTwoVariable(5, 5) + 5)
console.log(sumBetweenTwoVariable(5, 5) + 10)
console.log(sumBetweenTwoVariable(5, 5) + 15)

console.log(' ------------------- ')

// menghitung total belanja
function calculateTotal(prices: number[]) {
    let total: number = 0
    for (const price of prices) {
        total = total + price
    }
    return total
}

console.log('total belanja : ', calculateTotal([1200, 1500, 2000, 25000]))

console.log(' ------------------- ')

// undian berhadiah

let hasWon: boolean = false // flag global untuk menandai apakah user sudah menang

function luckyDraw(attempt: number) {
    console.log('Mengundi nomor ...')

    let message: string = ''

    // semakin banyak attempt, semakin kecil peluang menang
    const winChance: number = 1 / (attempt * 2)
    const isWinner: boolean = Math.random() < winChance

    if (isWinner && !hasWon) {
        hasWon = true // tandai sudah pernah menang

        let num: number = Math.ceil(Math.random() * 3) // angka untuk menentukan hadiah

        console.log(`Kamu mendapatkan undian bernomor : ${num}`)
        switch (num) {
            case 1:
                message = `Selamat, kamu mendapatkan hadiah mobil`
                break;
            case 2:
                message = `Selamat, kamu mendapatkan TV`
                break;
            case 3:
                message = `Selamat, kamu mendapatkan voucher belanja`
                break;
        }
    } else {
        message = `Kamu belum beruntung, coba lagi`
    }

    return message
}

// simulasi
for (let i: number = 0; i <= 50; i++) {
    console.log(`Percobaan ke ${i + 1} : `, luckyDraw(i))
}

console.log(' ------------------ ')

// -- FUNCTION HOISTING

// bisa dihoisting jika menggunakan function declaration
sayHello('John Doe')
function sayHello(name: string) {
    console.log(`Hello, ${name}`)
}

// sayHelloWorld() // function expression tidak bisa dihoisting
const sayHelloWorld = function () {
    console.log('Hello World')
}

// -- DEFAULT PARAMETER
function setAlarm(time: string = '07:00') {
    console.log(`Alarm set for ${time}`)
}

setAlarm() // -> jika dicetak akan memunculkan nilai dari default parameter
setAlarm('08:30')

// -- REST PARAMETER
// buat daftar belanja
function shoppingList(name: string, ...items: string[]) {
    console.log(`${name}'s shopping list :`)
    for (const item of items) {
        console.log(` - ${item}`)
    }
}

shoppingList('Dina', 'Milk', 'Bread', 'Eggs')

// kirim pesan broadcast
function broadcastMessage(message: string, ...recipients: string[]) {
    recipients.forEach((receipient) => {
        console.log(`To ${receipient} : ${message}`)
    })
}

broadcastMessage('Kumpul ke ruangan', 'Ibnu', 'Evan', 'Ghani')

// forEach -> menampilkan isi dari array
// map -> menampilkan + mengcopy isi dari array

// contoh perlakuan forEach dan map
function getAllStudents(students: string[]) {
    // const result = students.forEach((student) => student)
    // return result -> menghasilkan undefined karena forEach tidak membentuk array baru sehingga tidak bisa direturn

    const result = students.map((student) => student)
    return result
}

console.log('data semua student : ', getAllStudents(['Hylmi', 'Ghani', 'Evan', 'Ichwan', 'Ibnu']))

console.log(' ------------------ ')

// -- NESTED FUNCTION
// membuat teh
function makeTea() {
    function boilWater() {
        console.log('Boiling water ...')
    }
    function addTeaLeaves() {
        console.log('Adding tea leaves ...')
    }

    boilWater()
    addTeaLeaves()
    console.log('Tea is ready!')
}

makeTea()

// -- CLOSURE FUNCTION
// membuat fungsi untuk menambahkan angka
function createCounter() {
    let count: number = 0
    return function () {
        count++
        console.log(`Current count : ${count}`)
    }
}

const myCounter = createCounter()
myCounter()
myCounter()
myCounter()

// fungsi untuk membuat diskon barang
function fixedDiscount(discount: number) {
    return function (price: number) {
        return price - price * discount
    }
}

const tenPercent = fixedDiscount(0.1)(20000)
console.log(tenPercent)

// -- CURRYING FUNCTION
// penambahan dua bertahap
function calculate(a: number) {
    return function (b: number) {
        return a + b
    }
}

const addOn: (b: number) => number = calculate(5)
console.log(addOn(10))

// menghitung pajak daerah
function calculateTax(region: string) {
    return function (rate: number) {
        return function (price: number) {
            console.log(`Tax applied for ${region} : ${rate * 100}%`)
            return price + price * rate
        }
    }
}

const jakartaTax: number = calculateTax('Jakarta')(0.1)(100000)
console.log(jakartaTax)

console.log(' ------------------ ')

// -- RECURSIVE FUNCTION
// menghitung bilangan faktorial
function factorialCount(n: number): number {
    // 0 dan 1 adalah bukan bilangan faktorial (base case)
    if (n <= 1) {
        return 1
    }

    return n * factorialCount(n - 1)
}

console.log(factorialCount(5))
// 5! = 5 x 4 x 3 x 2 x 1

// menghitung total tabungan mingguan (bertambah terus)
function savingPlan(week: number): number {
    if (week == 1) {
        return 10000
    }

    return 10000 * week + savingPlan(week - 1)
}

console.log(`Total tabungan 4 minggu : Rp ${savingPlan(4)}`)
// 10rb + 20rb + 30rb + 40rb = 100rb