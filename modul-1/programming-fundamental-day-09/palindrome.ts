function isPalindrome(sentence: string, ignoreSpace: boolean = false, ignoreCase: boolean = true): boolean {

    let cleanSentence = "" // buat menampung variabel yang menghilangkan spasi dan jadikan huruf kecil
    for (let i: number = 0; i < sentence.length; i++) {
        const charCode = sentence.charCodeAt(i)
        const char = sentence[i]

        // jika mengabaikan spasi dan spasi ditemukan, maka lanjut
        if (ignoreSpace && charCode == 32) {
            continue
        }

        // jika huruf kapital dan ignoreCase = true, maka ubah ke lowercase
        if (ignoreCase && charCode >= 65 && charCode <= 90) {
            cleanSentence = cleanSentence + String.fromCharCode(charCode + 32)
        } else {
            cleanSentence = cleanSentence + char
        }
    }

    let left: number = 0
    let right: number = cleanSentence.length - 1

    while (left < right) {
        if (cleanSentence[left] !== cleanSentence[right]) {
            return false
        }
        left++
        right--
    }

    return true
}

console.log(isPalindrome('race car', true)) // true
console.log(isPalindrome('race car', false)) // false

console.log(isPalindrome('Race Car', true)) // true
console.log(isPalindrome('Race Car', true, true)) // true, karena r dianggap sama dengan R
console.log(isPalindrome('Race Car', false)) // false
console.log(isPalindrome('Race Car', false, false)) // false, karena r tidak sama dengan R