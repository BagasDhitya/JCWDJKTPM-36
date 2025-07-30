// -- NESTED WHILE

// case : penumpang naik ke dalam beberapa pesawat

function boardingPassengers(totalPlanes: number, passengersPerPlane: number) {
    let plane: number = 1

    while (plane <= totalPlanes) {
        console.log(`Plane ${plane} : `)
        let passengers: number = 1

        while (passengers <= passengersPerPlane) {
            // menampilkan penumpang yang boarding ke pesawat tertentu
            console.log(`   - Passenger ${passengers} has boarded`)
            passengers++
        }
        plane++
    }
}

// boardingPassengers(2, 3)

// output :
// Plane 1 :
//      - Passenger 1 has boarded
//      - Passenger 2 has boarded
//      - Passenger 3 has boarded
// Plane 2 :
//      - Passenger 1 has boarded
//      - Passenger 2 has boarded
//      - Passenger 3 has boarded

// case : simulasi keberangkatan pesawat dari beberapa terminal

function simulateDepartures(totalTerminals: number, planesPerTerminal: number) {
    let terminal: number = 1

    while (terminal <= totalTerminals) {
        console.log(`Terminal ${terminal} : `)
        let plane: number = 1

        while (plane <= planesPerTerminal) {
            // simulasi kondisi runway, true = kosong, false = sibuk
            const runwayAvailable = Math.random() > 0.4

            if (runwayAvailable) {
                console.log(`   Plane ${plane} has departed`)
                plane++
            } else {
                console.log(`   Plane ${plane} is waiting, runway is busy ...`)
            }
        }
        terminal++
    }
    console.log('All scheduled planes have departed!')
}

simulateDepartures(2, 3)

// output (random) :
// Terminal 1 :
//      Plane 1 is waiting, runway is busy ...
//      Plane 1 has departed
//      Plane 2 has departed
// Terminal 2 :
//      Plane 1 has departed
//      Plane 2 is waiting, runway is busy ...
//      Plane 2 is waiting, runway is busy ...
//      Plane 2 has departed
// All scheduled planes have departed!