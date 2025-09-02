// DTO -> Data Transfer Object
// berisi definisi struktur data yang boleh masuk/keluar API
// bisa untuk membantu validasi input dan menjaga konsistensi data

export interface ProductDTO {
    id: number,
    title: string,
    image: string,
    price: number,
    stock: number
}