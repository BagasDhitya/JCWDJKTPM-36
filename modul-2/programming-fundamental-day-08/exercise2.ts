import { data } from './data/medicines.json'

interface Medicine {
    medicineCode: string,
    medicineName: string,
    category: string,
    description: string,
    stockQuantity: number
}

class MedicineManagement {
    private medicines: Medicine[] = data

    public getAllMedicines(role: 'pharmacist' | 'guest'): Medicine[] {
        if (role === 'pharmacist') {
            return this.medicines
        } else {
            return this.medicines.filter((med: Medicine) => med.category === 'generic')
        }
    }

    public updateStock(code: string, stock: number, role: 'pharmacist' | 'guest') {
        const med = this.medicines.find((med: Medicine) => med.medicineCode === code)
        if (!med) {
            return "Medicine not found"
        }

        if (med?.stockQuantity < 0) {
            return 'Stock cannot be negative'
        }

        if (med?.category !== 'generic' && role !== 'pharmacist') {
            return 'Permission denied'
        }

        med.stockQuantity = stock
        return "Stock updated succesfully"
    }

    public scheduleRestock(date: string): Promise<string> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('Restock scheduled on : ' + date)
            }, 2000)
        })
    }
}

const medicineManagement = new MedicineManagement()
console.log('menampilkan semua obat dengan role guest : ', medicineManagement.getAllMedicines('guest'))
console.log('menampilkan semua obat dengan role pharmacist : ', medicineManagement.getAllMedicines('pharmacist'))

// simulasi update stock
console.log('update stock dengan role guest : ', medicineManagement.updateStock('MED-1002', 190, 'guest'))
console.log('update stock dengan role pharmacist : ', medicineManagement.updateStock('MED-1002', 190, 'pharmacist'))
console.log('menampilkan semua obat dengan role pharmacist : ', medicineManagement.getAllMedicines('pharmacist'))

console.log(' ----------------------------------- ');

// simulasi restock obat
(async () => {

    // schedule restock
    try {
        const response = await medicineManagement.scheduleRestock('2025-08-19')
        console.log('response : ', response)
    } catch (error) {
        console.log('error : ', error)
    }
})()
