// time complexity - linear time (O(n))
// case : menjumlahkan harga belanjaan harian dari daftar

function calculateTotal(prices: number[]) {
    let total: number = 0
    for (let i: number = 0; i < prices.length; i++) {
        total = total + prices[i]
    }
    return total
}

function generatePrices(length: number) {
    return new Array(length).fill(10000)
}

const sizes = [10, 100, 1_000, 10_000, 100_000, 1_000_000]

// for (const size of sizes) {
//     const prices = generatePrices(size)
//     console.time('O(n) - n = ' + size)
//     calculateTotal(prices)
//     console.timeEnd('O(n) - n = ' + size)
// }

// waktu berjalan sebanyak n kali tergantung jumlah item belanjaan
// O(n) karena perulangan/iterasi terjadi satu per satu sesuai jumlah elemen

// time complexity - quadratic time (O(n^2))
// case : mengecek daftar employee yang duplikat

function hasDuplicateEmployee(list: string[]) {
    for (let i: number = 0; i < list.length; i++) {
        for (let j: number = i + 1; j < list.length; j++) {
            if (list[i] === list[j]) {
                return true
            }
        }
    }

    return false
}

function generateEmployeeList(length: number) {
    const names = ['Ibnu', 'Ghani', 'Evan', 'Hylmi', 'Ichwan']
    const list = []

    for (let i: number = 0; i < length; i++) {
        list.push(names[i % names.length])
    }

    return list
}

const employeeSizes = [10, 100, 1_000, 10_000, 100_000]

// for (const size of employeeSizes) {
//     const employees = generateEmployeeList(size)
//     console.time('O(n^2) - n = ' + size)
//     hasDuplicateEmployee(employees)
//     console.timeEnd('O(n^2) - n = ' + size)
// }

// waktu eksekusi naik secara eksponensial (O(n^2)) seiring bertambahnya ukuran data.

// space complexity - linear space (O(n))
// case : menyimpan nota transaksi ke dalam array

function storeReceipts(receipts: number[]) {
    const stored: number[] = []
    for (let i: number = 0; i < receipts.length; i++) {
        stored.push(receipts[i])
    }
    return stored
}

function generateReceipts(length: number) {
    return new Array(length).fill(1000)
}

const receiptsSizes = [1000, 10_000, 100_000, 1_000_000]

for (const size of receiptsSizes) {
    const receipts = generateReceipts(size)

    // cek memory sebelum ditambahkan data
    const before = process.memoryUsage().heapUsed
    storeReceipts(receipts)

    // cek memory sesudah ditambahkan data
    const after = process.memoryUsage().heapUsed
    console.log(`n = ${size} -> approx used memory : ${(after - before) / 1024} KB`)
}

// space complexity - (O(1))
// case : menghitung total berat barang (tanpa menyimpan masing-masing beratnya)

console.log(' ----------------------------- ')

function calculateWeight(weights: number[]) {
    let total: number = 0
    for (let i: number = 0; i < weights.length; i++) {
        total += weights[i]
    }
    return total
}

function generateWeights(length: number) {
    return new Array(length).fill(2.5)
}

const weightSizes = [1000, 10_000, 100_000, 1_000_000]

for (const size of weightSizes) {
    const weights = generateWeights(size)

    const beforeMemory = process.memoryUsage().heapUsed
    calculateWeight(weights)
    const afterMemory = process.memoryUsage().heapUsed

    console.log(`n = ${size} -> approx used memory : ${(afterMemory - beforeMemory) / 1024} KB`)
}