// -- STACK
// LIFO (Last in First Out)

// tumpukan piring
class PlateStack {
    private plates: string[] = []

    public addPlates(plate: string): void {
        this.isFull()
        this.plates[this.plates.length] = plate
    }

    public removePlate(): string | string[] {
        if (this.plates.length < 0) {
            return ""
        }

        this.plates.length = this.plates.length - 1
        const removed = this.plates
        return removed
    }

    public viewPlates(): string[] {
        return this.plates
    }

    public isFull() {
        if (this.plates.length >= 5) {
            throw new Error('Maximum plates')
        }
    }

    public peek() {
        return this.plates[this.plates.length - 1]
    }
}

const plateStack = new PlateStack()

try {
    plateStack.addPlates('Piring A')
    plateStack.addPlates('Piring B')
    plateStack.addPlates('Piring C')
    plateStack.addPlates('Piring D')
    plateStack.addPlates('Piring E')
    plateStack.addPlates('Piring F')

    // lihat tumpukan piring

    // hapus piring
    // console.log(plateStack.removePlate())
    // console.log(plateStack.removePlate())

    // data paling atas
    // console.log('peek : ', plateStack.peek())

    // console.log(plateStack.viewPlates())
} catch (error) {
    // console.error((error as Error).message)
}

// konsep undo text editor
class TextEditor {
    private history: { [index: string]: string } = {}
    private historyIndex: number = 0

    private future: string[] = []
    private futureIndex: number = 0

    private current: string = ""

    public type(text: string) {
        this.history[this.historyIndex] = this.current // menyimpan state lama
        this.historyIndex++ // geser index untuk menyimpan selanjutnya

        //reset future untuk typing baru
        this.futureIndex = 0

        this.current = text // ubah teks sekarang
    }

    public undo() {
        if (this.historyIndex > 0) {
            this.historyIndex-- // kembali satu langkah

            this.future[this.futureIndex] = this.current
            this.futureIndex++

            this.current = this.history[this.historyIndex] // ambil teks sebelumnya]
        }
    }

    public redo() {
        if (this.futureIndex > 0) {
            this.futureIndex-- // kembali satu langkah

            this.history[this.historyIndex] = this.current
            this.historyIndex++

            this.current = this.future[this.futureIndex]
        }
    }

    public getText() {
        return this.current
    }

}

const textEditor = new TextEditor()
// textEditor.type('Hello')
// textEditor.type('Hello Typescript')
// textEditor.type('Hello Typescript Javascript')

// textEditor.undo()
// textEditor.undo()

// textEditor.redo()
// textEditor.undo()
// console.log(textEditor.getText())