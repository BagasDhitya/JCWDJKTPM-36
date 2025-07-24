// primitive data type
let username: string = "John Doe";
let age: number = 30;
let isGuestOnline: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

// non-primitive
let hobbies: string[] = ["reading", "coding", "hiking"]; // array
let person: { name: string; age: number } = {
    name: "John Doe",
    age: 30,
}; // object

// cek tipe data
console.log('tipe data username : ', typeof username)
console.log('tipe data age : ', typeof age)

// gabung dua string yang berbeda
let word1: string = "Hello"
let word2: string = "John Doe"
console.log(word1 + " " + word2)

let title: string = "Learning typescript"

// method built in dari string
console.log("length dari title : ", title.length) // menghitung panjang karakter string
console.log("uppercase dari title : ", title.toUpperCase()) // menjadikan semua karakter jadi huruf besar
console.log("lowercase dari title : ", title.toLowerCase()) // menjadikan semua karakter jadi huruf kecil
console.log("cek apakah ada kata 'typescript' di title : ", title.includes('typescript')) // memeriksa karakter tertentu
console.log("replace 'typescript' with 'world' : ", title.replace('typescript', 'world')) // mengganti karakter tertentu

console.log(" ----------------------------------------------- ")

// method built in dari number
let value: number = 123.456

console.log('hasil pembulatan ke atas : ', value.toFixed()) // bisa diisi dengan 1, 2, dst. sesuai angka dibelakang koma
console.log('hasil perpangkatan dari value : ', value.toExponential()) // untuk perpangkatan
console.log('konversi dari number ke string : ', typeof value.toString()) // untuk konversi tipe data number -> string

let valueX: string = "aaa"
let valueY: number = 10
let sum = parseInt(valueX) + valueY
console.log('hasil dari sum : ', sum) // kalau dicetak jadi NaN (Not a Number)

let num: string = "234.56"
console.log('parseInt dari num : ', parseInt(num))
console.log('parseFloat dari num : ', parseFloat(num))

console.log(" ----------------------------------------------- ")

// tipe data date : untuk melihat tanggal terkini
let today: Date = new Date()

console.log('tanggal hari ini : ', today)
console.log('Year : ', today.getFullYear()) // untuk mengambil tahun
console.log('Month : ', today.getMonth() + 1) // untuk mengambil bulan perlu ditambah dengan 1 karena startnya dari index 0
console.log('Time Date : ', today.toLocaleTimeString()) // jam saat ini

console.log('combined date and time : ' + today.toLocaleDateString() + ", " + today.toLocaleTimeString())

console.log(' ---------------------------------- ')

// basic operator
let numA: number = 10
let numB: number = 3

let sumNum: number = numA + numB // penjumlahan
let diffNum: number = numA - numB // pengurangan
let multiNum: number = numA * numB // perkalian
let divNum: number = numA / numB // pembagian
let modNum: number = numA % numB // menampilkan sisa hasil bagi/modulus
let expoNum: number = numA ** numB // perpangkatan

console.log({ sumNum, diffNum, multiNum, divNum, modNum, expoNum })