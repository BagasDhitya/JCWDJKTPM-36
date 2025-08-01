// -- Synchronous Code
// kode dijalankan berurutan dari atas ke bawah, kalau ada yang belum dijalankan maka eksekusi tidak dilanjutkan
function syncProcess() {
    console.log('Start')
    console.log('Processing ...')
    console.log('End')
}

// syncProcess()

// -- Asynchronous Code
// kode dijalankan berdasarkan processing time, mana yang lebih cepat akan dieksekusi duluan
function asyncProcess() {
    console.log("Start")
    setTimeout(() => {
        console.log('Processing done (after 2s)')
    }, 2000) // 2000 ms = 2 detik
    console.log("End")
}

// asyncProcess()

function multipleAsyncProcess() {
    console.log("abc")
    setTimeout(() => {
        console.log('def')
    }, 7500)
    setTimeout(() => {
        console.log('ghi')
    }, 1200)
    console.log('jkl')
    setTimeout(() => {
        console.log('mno')
    }, 1150)
}

// multipleAsyncProcess()
// abc 
// jkl
// mno
// ghi
// def

// -- CALLBACK
// kondisi dimana ketika suatu function menjadi argumen dari parameter function lain

// -- alarm ringing
function setAlarm(time: number, onRing: () => void) {
    console.log(`Alarm set for ${time} seconds`)
    setTimeout(() => {
        console.log('Alarm ringing ...')
        onRing() // callback dipanggil setelah alarm berbunyi
    }, time * 1000)
}

function wakeUp() {
    console.log('Good morning! Time to wake up.')
}

// setAlarm(10, wakeUp)

// -- order makanan online
function orderFood(menu: string, onDelivered: (food: string) => void) {
    console.log(`Ordering ${menu} ...`)
    setTimeout(() => {
        console.log(`${menu} delivered!`)
        onDelivered(menu)
    }, 5000)
}

function handleDelivery(food: string) {
    notifyUser(food)
    askReview(food)
}

function notifyUser(food: string) {
    console.log(`Notification : your ${food} has arrived!`)
}

function askReview(food: string) {
    console.log(`Please leave a review for your ${food}`)
}

// orderFood('Cordon Bleu', handleDelivery)

// -- booking tiket bioskop
interface Ticket {
    user: string,
    event: string,
    date: string
}

function bookTicket(user: string, event: string, onSuccess: (ticket: Ticket) => void) {
    console.log('Booking ticket ...')
    setTimeout(() => {

        const ticket: Ticket = {
            user: user,
            event: event,
            date: new Date().toLocaleString()
        }

        onSuccess(ticket) // callback dengan info tiket
    }, 7000)
}

function handleTicketSuccess(info: Ticket) {
    sendEmail(info)
    saveToDatabase(info)
}

function sendEmail(info: Ticket) {
    console.log(`Email sent to : `, info.user)
}

function saveToDatabase(info: Ticket) {
    console.log(`Ticket saved to database : `, info)
}

// bookTicket('John Doe', 'Avengers: End Game', handleTicketSuccess)

// -- PROMISE
// object yang digunakan untuk menangani kejadian success/failure

// -- lucky draw
function luckyDraw() {
    return new Promise((resolve, reject) => {
        const randomize = Math.ceil(Math.random() * 5) // undian kemungkinan dapat 1 - 5
        console.log(`You got number : ${randomize}`)

        setTimeout(() => {
            switch (randomize) {
                case 1:
                    resolve('Congrats! You won a brand new car!')
                    break
                case 2:
                    resolve('Great! You won a smart TV')
                    break
                case 3:
                    resolve('Nice! You won a wireless headphone')
                    break
                default:
                    reject('Better luck next time')
            }

        }, 4000) // diundi selama 4 detik
    })
}

// luckyDraw()
//     .then((response) => {
//         const res = {
//             status: 'success',
//             message: response
//         }
//         console.log(res)
//     })
//     .catch((error) => {
//         const res = {
//             status: 'failure',
//             message: error
//         }
//         console.log(res)
//     })
//     .finally(() => {
//         console.log('Lucky draw ended ...')
//     })

// -- order ride
interface NotificationUser {
    status: string,
    message: string
}

function orderRide(pickUpLocation: string): Promise<NotificationUser> {
    return new Promise((resolve, reject) => {
        console.log(`Searching for driver at ${pickUpLocation} ...`)

        setTimeout(() => {
            const driverFound = Math.ceil(Math.random() * 5)

            if (driverFound <= 2.5) {
                resolve({
                    status: 'success',
                    message: `Driver found! Heading to ${pickUpLocation} now.`
                })
            } else {
                reject({
                    status: 'failure',
                    message: `No driver available near ${pickUpLocation}.`
                })
            }

        }, 4000)
    })
}

// orderRide('IKEA Alam Sutra')
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error))
//     .finally(() => console.log('Done ...'))

// -- ASYNC AWAIT
// untuk menangani dua atau lebih function yang memiliki promise

// case : pemeriksaan pasien di rumah sakit
// 1. registrasi online
// 2. pemeriksaan dokter
// 3. ambil obat

function registerPatient(name: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const systemOnline = Math.random() > 0.1 // simulasi server registrasi

        setTimeout(() => {
            if (systemOnline) {
                resolve(`Registration complete for ${name}`)
            } else {
                reject(`Registration system is down`)
            }
        }, 2500)
    })
}

function doctorCheckup(): Promise<string> {
    return new Promise((resolve, reject) => {
        const doctorAvailable = Math.random() > 0.2 // simulasi pencarian dokter

        console.log('Checking doctor ...')
        setTimeout(() => {
            if (doctorAvailable) {
                resolve(`Doctor checkup completed!`)
            } else {
                reject(`Doctor is unavailable`)
            }
        }, 3500)
    })
}

function takeMedicine(): Promise<string> {
    return new Promise((resolve, reject) => {
        const medicineStock = Math.random() > 0.15 // simulasi pencarian obat

        console.log('Checking medicine ...')
        setTimeout(() => {
            if (medicineStock) {
                resolve(`Medicine collected successfully`)
            } else {
                reject(`Medicine is out of stock!`)
            }
        }, 3000)
    })
}

async function hospitalVisit(patientName: string) {
    try {
        const register = await registerPatient(patientName)
        console.log('register : ', register)
        const checkup = await doctorCheckup()
        console.log('info checkup : ', checkup)
        const takeMeds = await takeMedicine()
        console.log('info medicine : ', takeMeds)
    } catch (error) {
        console.log(error)
    }
}

// hospitalVisit('John Doe')

// -- THROW
// melempar error ketika ada kondisi yang tidak terpenuhi

// -- cek hak akses yang masuk ke dalam sistem
function accessAdminPanel(userRole: 'admin' | 'guest') {
    console.log(`Checking access rights for : ${userRole}`)

    if (userRole === 'admin') {
        return "Welcome to the admin panel"
    } else {
        throw new Error("Unauthorized access attempt detected!")
    }
}

try {
    const result = accessAdminPanel('guest')
    console.log('success : ', result)
} catch (error) {
    console.error('security alert : ', (error as Error).message)
}