// case 1 : mengecek cuaca apakah akan turun hujan atau tidak
let isRainy: boolean = false;

console.log('Pergi keluar rumah ...')
console.log('Pas sampe didepan rumah ..')

isRainy = true

if (isRainy) {
    console.log('Aku akan membawa payung')
} else {
    console.log('Aku tidak membawa payung')
}

console.log('Berangkat ...')
console.log(' --------------------------------------------- ')

// case 2 : mengecek apakah saldo atm cukup untuk membeli barang
let balance: number = 100
let itemPrice: number = 130

// 100 >= 130 -> false
if (balance >= itemPrice) {
    console.log('You can buy the item.')
} else {
    console.log('Not enough balance, consider saving more.')
}

// Logical Gate Operator

// AND (&&)
// false && false = false
// false && true = false
// true && false = false
// true && true = true

// OR (||)
// false || false = false
// false || true = true
// true || false = true
// true || true = true

// NOT (!) -> negasi/lawan nilai
// !true = false
// !false = true

// case 3 : logical statement
let statement1: boolean = false
let statement2: boolean = true

// false || false
if (statement1 || !statement2) {
    console.log('hello')
} else {
    console.log('world')
}

let statement3: boolean = false

if (statement3 && (statement2 || !statement1)) {
    console.log('hello')
} else {
    console.log('world')
}

statement2 = false

if (statement2 || (!statement3 && !statement1)) {
    console.log('hello')
} else {
    console.log('world')
}

// = -> assignment
// == -> value checking
// === -> value & data type checking

let numX: any = 10
let numY: any = "10"

if (numX === numY) {
    console.log("correct")
} else {
    console.log("incorrect")
}

console.log(' --------------------------------------------- ')

// -- ELSE IF
// case : check suhu badan
let temperature: number = 30

if (temperature > 35) {
    console.log('Its very hot')
} else if (temperature > 25) {
    console.log('Its warm')
} else {
    console.log('Its cold')
}

// case : membuat alarm
let hour: number = 25

if (hour >= 5 && hour < 12) {
    console.log('Good morning')
} else if (hour >= 17 && hour < 21) {
    console.log('Good evening')
} else if (hour < 25) {
    console.log('Good night')
} else {
    console.log('Undefined time')
}

console.log(' --------------------------------------------- ')

// -- SWITCH CASE
// case : lampu merah
let trafficLight: string = "yellow" // jika diganti warna lain selain yang ada di switch case, maka akan dilempar ke default

switch (trafficLight) {
    case "red":
        console.log("Berhenti")
        break
    case "yellow":
        console.log("Hati-hati dan bersiap berhenti")
        break
    case "green":
        console.log("Jalan")
        break
    default:
        console.log("Warna lampu tidak dikenal")
}

// let randomize: number = Math.random() * 5
// console.log(Math.ceil(randomize)) // Math.floor / Math.ceil -> untuk membulatkan angka desimal

// var randomize: number = 1
// var randomize: number = 2
// console.log(randomize)

// let randomizeLet: number = 1
// randomizeLet = 2

// const randomizeConst: number = 1
// randomizeConst = 2


// case : undian
let randomize: number = Math.ceil(Math.random() * 4)
let announcement: string = ''

console.log('Kamu mendapatkan nomor undian : ', randomize)
console.log('Mulai undian ...')

switch (randomize) {
    case 1:
        announcement = 'Selamat, kamu menang hadiah utama mobil'
        break
    case 2:
        announcement = 'Selamat, kamu mendapatkan hadiah kedua : kulkas'
        break
    case 3:
        announcement = 'Selamat, kamu mendapatkan hadiah ketiga : sepeda'
        break
    default:
        announcement = 'Maaf, kamu belum beruntung'
}

console.log(announcement)

console.log(' --------------------------------------------- ')

// -- TERNARY OPERATOR
// cek apakah seseorang sudah cukup umur untuk voting
let agePerson: number = 18
let canVote = agePerson >= 17 ? "Boleh memilih" : "Belum boleh memilih"
console.log(canVote)

// cek suhu menggunakan ternary
let temp: number = 30
let checkTemp = temp > 35 ? 'Its very hot' : temp > 25 ? 'Its warm' : 'Its cold'
console.log(checkTemp)

console.log(' --------------------------------------------- ')

// -- FOR LOOP
// case : mencetak kalimat 'harimau'
for (let i: number = 0; i < 5; i++) {
    if (i % 2 == 0) {
        console.log('harimau!')
    } else {
        console.log('tak pernah ucap hello : ', i)
    }
}

// case : menghitung total belanja
let prices: number[] = [12000, 15000, 8000]
let total: number = 0

// untuk mengakses indeks di dalam array
// console.log(prices[0])
// console.log(prices[1])

for (let i: number = 0; i < prices.length; i++) {
    total = total + prices[i]
    // total += prices[i] -> bisa gunakan salah satu
}

console.log('Total belanja : ', total)

// case : mencetak bilangan negative
for (let i: number = 0; i > -10; i--) {
    console.log(i)
}

console.log(' ------------------------------------- ')

// -- NESTED LOOP
for (let i: number = 0; i < 5; i++) {
    console.log('index ke : ', i)
    for (let j: number = 0; j < 5; j++) {
        console.log(' -------- sub index ke : ', j)
    }
}

// -- WHILE LOOP
// case : membunyikan alarm
let count: number = 1
while (count <= 3) {
    console.log('Alarm berbunyi ke-', count)
    count++
}

// case : chess game
let turn: number = 1
let currentPlayer: string = 'White'
let gameOver: boolean = false
let checkmateChance: number = 0

while (!gameOver) {
    console.log(`Turn ${turn} : giliran ${currentPlayer}`)
    console.log(`${currentPlayer} melakukan langkah.`)

    if (turn >= 7) {
        // simulasi probability ketika checkmate terjadi sebesar 10%
        let isCheckmate = Math.floor(Math.random() * 10) === 0

        if (isCheckmate) {
            const isLosingPlayer = currentPlayer === "White" ? "Black" : "White"
            console.log(`Checkmate! Raja ${isLosingPlayer} kalah`)
            console.log(`Pemenang : ${currentPlayer}`)
            gameOver = true
        }
    }
    // ganti pemain dan berlanjut
    currentPlayer = currentPlayer === 'White' ? 'Black' : 'White'
    turn++
}