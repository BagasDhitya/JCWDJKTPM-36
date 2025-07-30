// -- DO WHILE
// minimal dijalankan sekali
// contoh kasus : ketika mencoba sebuah makanan, apabila rasanya enak akan repeat order, kalau enggak cari yang lain

// case : balapan F1
// dalam balapan F1, seorang pembalap harus menyelesaikan minimal 1 lap
// meski hanya 1 lap, kita tetap mencetak lap tersebut

function simulateF1Lap(totalLaps: number) {
    let currentLap: number = 1 // asumsikan lap pertama adalah lap 1
    let totalRace: string[] = []
    let message: string = ""

    do {
        // menampilkan lap yang sedang dijalankan
        message = `Lap ${currentLap} - completed`
        totalRace[totalRace.length] = message
        currentLap++
    } while (currentLap <= totalLaps)

    return totalRace
}

// console.log(simulateF1Lap(3))
// output :
// ['Lap 1 - completed', 'Lap 2 - completed', 'Lap 3 - completed']

// case : pit stop hingga ban optimal
// saat balapan F1, mobil akan masuk pit stop untuk mengganti ban.
// mekanik akan terus mengganti ban hingga status ban dianggap "optimal".
// status ban bisa dipilih secara acak

function pitStopUntilOptimal() {
    const statuses: string[] = ["Worn", "Cold", "Slippery", "Optimal"]
    let tireStatus: string = ""
    let attempt: number = 0

    do {
        tireStatus = statuses[Math.floor(Math.random() * statuses.length)]
        attempt++

        // menampilkan status ban setelah pergantian
        console.log(`Attempt ${attempt} : Tire status is ${tireStatus}`)
    } while (tireStatus !== "Optimal")

    console.log(`Tire is optimal. Can return to race!`)
}

// pitStopUntilOptimal()
// output :
// Attempt 1 : Tire status is Cold
// Attempt 2 : Tire status is Slippery
// Attempt 3 : Tire status is Optimal
// Tire is optimal. Can return to race!

// -- NESTED DO WHILE

// case : menghitung jumlah lap dalam sesi latihan setiap pembalap

function practicalLaps(drivers: number, lapsPerDriver: number) {
    let driver: number = 1

    do {
        console.log(`Driver ${driver} : `)
        let lap: number = 1
        do {
            console.log(`   - Completed Lap ${lap}`)
            lap++
        } while (lap <= lapsPerDriver)
        driver++
    } while (driver <= drivers)
}

// practicalLaps(2, 10)

// output :
// Driver 1 :
// - Completed Lap 1
// Driver 2 :
// - Completed Lap 1

// case : simulasi pit stop banyak tim dengan percobaan ban optimal

function pitStopSimulation(teams: number) {
    const tireStatus: string[] = ["Worn", "Cold", "Slippery", "Optimal"]
    let team: number = 1

    do {
        console.log(`Team ${team} : `)
        let attempt: number = 1
        let tireStatusNow: string = ""

        do {
            tireStatusNow = tireStatus[Math.floor(Math.random() * tireStatus.length)]
            console.log(`   Attempt ${attempt} - Tire is ${tireStatusNow}`)
            attempt++
        } while (tireStatusNow !== "Optimal")

        team++
    } while (team <= teams)
}

// pitStopSimulation(2)

// output :
// Team 1 :
//    Attempt 1 - Tire is Cold
//    Attempt 2 - Tire is Optimal
// Team 2 :
//    Attempt 1 - Tire is Worn
//    Attempt 2 - Tire is Worn
//    Attempt 3 - Tire is Slippery
//    Attempt 4 - Tire is Optimal

// case : simulasi cuaca & suhu mesin per lap dalam balapan
// setiap lap dalam balapan memiliki kondisi cuaca yang acak.
// untuk setiap kondisi cuaca, suhu mesin akan meningkat dan diperiksa.
// jika, suhu melewati batas (120C), balapan dihentikan.

function simulateRaceWithWeather(maxLaps: number) {
    const weatherList: string[] = ["Sunny", "Cloudy", "Rainy"]
    let lap: number = 1
    let engineTemp: number = 85

    do {
        const weather: string = weatherList[Math.floor(Math.random() * weatherList.length)]
        console.log(`Lap ${lap} : Weather is ${weather}`)

        let check: number = 1
        let tempIncrease: number = 0
        let isOverheated: boolean = false

        do {
            // simulasi kenaikan suhu 5-10 derajat tergantung kondisi

            if (weather === "Sunny") {
                tempIncrease = 5 + Math.floor(Math.random() * 6)
            } else if (weather === "Cloudy") {
                tempIncrease = 3 + Math.floor(Math.random() * 4)
            } else if (weather === "Rainy") {
                tempIncrease = 1 + Math.floor(Math.random() * 3)
            }

            engineTemp += tempIncrease

            if (engineTemp >= 120) {
                console.log(`Overheat! Race stopped`)
                isOverheated = true
                break // keluar dari inner loop
            }

            console.log(`   Engine temp check ${check} : ${engineTemp}`)
            check++

        } while (check <= 2 && engineTemp <= 120) // 2 kali check per lap

        if (isOverheated) {
            break // keluar dari outer loop juga jika overheated
        }

        lap++
    } while (lap <= maxLaps)
}

simulateRaceWithWeather(5)

// output : 
// Lap 1 : Weather is Sunny
//      Engine Temp Check 1 : 91
//      Engine Temp Check 2 : 99
// Lap 2 : Weather is Rainy
//      Engine Temp Check 1 : 100
//      Engine Temp Check 2 : 102
// Lap 3 : Weather is Sunny
//      Engine Temp Check 1 : 109
//      Engine Temp Check 2 : 121
// Overheat! Race stopped