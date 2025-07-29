// -- ARRAY

// cara biasa
const fruits: string[] = ['apple', 'banana', 'orange']
const years: string[] | boolean[] = [true, false, true]
const multipleArray: string[][] = [['John', 'Doe'], ['Jane', 'Doe']]

// cara generik
const classOfWebDev: Array<string> = ['JCWDJKTPM36', 'JCWD3504']
const attendances: Array<string | boolean> = ['John Doe', true, 'Bob', false]

console.log('list of fruits : ', fruits)
console.log('length of fruits : ', fruits.length)
console.log('access apple : ', fruits[0])

// accessing multiple dimension array
console.log('access multipleArray John : ', multipleArray[0][0])
console.log('accessing multipleArray Jane : ', multipleArray[1][0])

console.log(' ------------- ')

const tropicalFruits: string[] = ['mango', 'durian', 'salak']

// 1. push() -> menambahkan item ke akhir array
tropicalFruits.push('nangka')
console.log('after push : ', tropicalFruits)

// -- menambahkan item ke akhir array tanpa push()
tropicalFruits[tropicalFruits.length] = 'jeruk'
console.log('without push : ', tropicalFruits)

// 2. unshift -> menambahkan item ke depan array
tropicalFruits.unshift('sirsak')
console.log('after unshift : ', tropicalFruits)

// -- menambahkan item ke depan array tanpa unshift()
for (let i: number = tropicalFruits.length; i > 0; i--) {
    tropicalFruits[i] = tropicalFruits[i - 1]
}

tropicalFruits[0] = 'klengkeng'
console.log('without unshift : ', tropicalFruits)

// 3. pop() -> menghapus item dari akhir array
tropicalFruits.pop()
console.log('after pop : ', tropicalFruits)

// -- menghapus item dari akhir array tanpa pop()
tropicalFruits.length = tropicalFruits.length - 1
console.log('without pop : ', tropicalFruits)

// 4. shift() -> menghapus item dari depan array
tropicalFruits.shift()
console.log('after shift : ', tropicalFruits)

// -- menghapus item dari depan array tanpa shift()
for (let i: number = 0; i < tropicalFruits.length - 1; i++) {
    tropicalFruits[i] = tropicalFruits[i + 1]
}

tropicalFruits.length = tropicalFruits.length - 1
console.log('without shift : ', tropicalFruits)

console.log(' ------------- ')

// for of -> looping untuk mengakses nilai dari suatu index
// for in -> looping untuk mengakses index

const cartItems: number[] = [101, 202, 303, 404, 505]

// cetak semua nilai cartItems
for (const cart of cartItems) {
    console.log(`Cart number - ${cart}`)
}

console.log(' ------------- ')

// cetak semua index cartItems
for (const cart in cartItems) {
    console.log(`Index of ${cart}`)
}

// menghitung total suhu
const temperaturesSign: number[] = [24, 25, 26, 27]
let totalTemp: number = 0

for (const temp of temperaturesSign) {
    totalTemp = totalTemp + temp
    // totalTemp += temp
}

console.log('total suhu : ', totalTemp)