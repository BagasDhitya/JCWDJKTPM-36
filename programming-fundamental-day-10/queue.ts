// -- QUEUE
// First in First Out

// antrian gacoan
class GacoanQueue {
    private queue: { [index: number]: string } = {}
    private front: number = 0 // index paling depan (yang akan dilayani)
    private rear: number = 0 // index paling belakang (tempat masuk antrian)

    // tambah pembeli ke antrian
    public enter(name: string): void {
        this.queue[this.rear] = name // tambahkan ke posisi rear
        this.rear++ // geser rear ke posisi selanjutnya
    }

    // melayani pembeli dari depan
    public serve(): string | undefined {
        const served = this.queue[this.front]
        delete this.queue[this.front] // hapus dari antrian
        this.front++ // geser front ke pembeli berikutnya
        return served
    }

    // mengecek apakah antrian kosong
    public isEmpty(): boolean {
        return this.front === this.rear
    }

    // lihat semua antrian
    public listQueue(): { [index: number]: string; } | undefined {
        if (this.isEmpty()) {
            return undefined
        }
        return this.queue
    }
}

const gacoan = new GacoanQueue()
gacoan.enter('Ibnu')
gacoan.enter('Evan')
gacoan.enter('Hylmi')

gacoan.serve()
gacoan.serve()
gacoan.serve()
gacoan.serve()
console.log('list queue : ', gacoan.listQueue())