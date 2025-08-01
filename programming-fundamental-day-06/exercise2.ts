// Create a program to create transaction
// Product Class
// Properties
// Name
// Price
// Transaction Class
// Properties
// Total
// Product
// All product data
// Qty
// Add to cart method → Add product to transaction
// Show total method → Show total current transaction
// Checkout method → Finalize transaction, return transaction data

class Product {
    public name: string
    public price: number

    constructor(name: string, price: number) {
        this.name = name
        this.price = price
    }
}

class TransactionItem extends Product {
    quantity: number

    constructor(product: Product, quantity: number) {
        super(product.name, product.price)
        this.quantity = quantity
    }

    public getSubTotal() {
        return this.price * this.quantity
    }
}

class Transaction {
    private items: TransactionItem[] = []

    public addCart(product: Product, quantity: number) {
        const existingItem = this.items.find((item) => item.name === product.name)
        if (existingItem) {
            existingItem.quantity = existingItem.quantity + quantity
        } else {
            const newItem = new TransactionItem(product, quantity)
            this.items.push(newItem)
        }
    }

    public showTotal() {
        const total = this.items.reduce((sum, item) => sum + item.getSubTotal(), 0)
        console.log(`Current total : ${total}`)
        return total
    }

    public checkout() {
        const total = this.showTotal()
        const transactionData = {
            items: this.items.map((item) => ({
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                subtotal: item.getSubTotal()
            })),
            total: total
        }

        console.log(`Transaction Complete : `, transactionData)
        return transactionData
    }
}

const transaction = new Transaction()

transaction.addCart({ name: 'apple', price: 10 }, 2)
transaction.addCart({ name: 'banana', price: 5 }, 2)
transaction.addCart({ name: 'apple', price: 10 }, 1)

transaction.showTotal()
transaction.checkout()
