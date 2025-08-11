// -- CLASS
class DotaHero {
    name: string = ''
    role: string = ''
    attackType: string = ''
    abilities: string[] = []

    getHeroInfo() {
        return `${this.name} is a ${this.role} hero with ${this.attackType} attack`
    }
}

const razor = new DotaHero()
const crystalMaiden = new DotaHero()

razor.name = 'razor'
razor.role = 'Carry'
razor.attackType = 'Ranged'
razor.abilities = ['Plasma Field', 'Static Link', 'Eye of the Store']

crystalMaiden.name = 'Crystal Maiden'
crystalMaiden.role = 'Support'
crystalMaiden.attackType = 'Ranged'
crystalMaiden.abilities = ['Crystal Nova', 'Frostbite', 'Freezing Field']

// console.log(razor.getHeroInfo())
// console.log(crystalMaiden.getHeroInfo())

// -- Class with Constructor
// constructor -> parameter untuk class

// --- ACCESS MODIFIER
// public -> bisa diakses dari semua tempat
// private -> tidak bisa diakses dari semua tempat
// protected -> hanya bisa diakses antara parents dan child

class Person {
    public name: string = ""
    public age: number = 0
    private hasIdCard: boolean = false

    // hasIdCard menjadi encapsulation, karena hak aksesnya private dan hanya bisa diakses lewat method displayInfo

    constructor(name: string, age: number, hasIdCard: boolean) {
        this.name = name
        this.age = age
        this.hasIdCard = hasIdCard
    }

    public displayInfo() {
        return `Hello, my name is ${this.name}! I'm ${this.age} years old and ${this.hasIdCard ? 'I have ID Card' : 'I dont have ID Card'} `
    }
}

const person1 = new Person('John Doe', 30, true)
const person2 = new Person('Jane Doe', 15, false)

// console.log(person1.hasIdCard) -> tidak bisa diakses karena hak aksesnya private

// console.log(person1.displayInfo())
// console.log(person2.displayInfo())

// --- INHERITANCE (PEWARISAN)
// inheritance -> konsep parents dan child antar class

// parents
class Vehicle {
    public brand: string = ''
    public model: string = ''
    protected transmission: 'manual' | 'automatic' | null = null
}

// child
class PersonCar extends Vehicle {
    public setTransmission(transmission: 'manual' | 'automatic') {
        return this.transmission = transmission
    }
    public getInfo() {
        return `I have ${this.brand}, it was ${this.model} and have ${this.transmission} transmission`
    }
}

const personCar = new PersonCar()
personCar.brand = 'Honda Civic'
personCar.model = 'sedan'
// personCar.transmission = 'manual' // Property 'transmission' is protected and only accessible within class 'Vehicle' and its subclasses.
personCar.setTransmission('manual') // setup transmisi dengan public 
// console.log(personCar.getInfo())

// management perpustakaan
interface ILibrary {
    addBook: (title: string) => void,
    listBook: () => string[],
    isBookAvailable: (title: string) => boolean
}

class Library implements ILibrary {
    public name: string = ""
    private books: string[] = []
    private maxCapacity: number = 100

    addBook(title: string) {
        if (this.books.length < this.maxCapacity) {
            this.books.push(title)
        }
    }
    listBook() {
        return this.books
    }
    isBookAvailable(title: string) {
        return this.books.includes(title)
    }
}

const myLibrary = new Library()
myLibrary.name = "Central Library"
myLibrary.addBook("The Pragmatic Programmer")
myLibrary.addBook("Clean Code")

console.log(myLibrary.listBook())
console.log(myLibrary.isBookAvailable('Clean Code'))
console.log(myLibrary.isBookAvailable('Cara menjadi kaya')) // akan false karena belum ditambahkan ke list books