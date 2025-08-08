// -- Set

const phoneNumber = new Set<string>()

phoneNumber.add('08123456789')
phoneNumber.add('08987654321')
phoneNumber.add('08123789654')
phoneNumber.add('08123789654')

console.log(phoneNumber)
console.log('size of set : ', phoneNumber.size)
console.log('is phoneNumber has 08123789654 ? ', phoneNumber.has('08123789654'))

// konversi ke array
const arrPhoneNumber = Array.from(phoneNumber)
console.log('array phone Number : ', arrPhoneNumber)

console.log(' -------------------------------- ')

const arrDuplicate = ['abc', 'def', 'abc', 'ghi']
console.log('before converted : ', arrDuplicate)
const convertSet = new Set<string>(arrDuplicate)
console.log('result convert : ', convertSet)
const resultConvert = Array.from(convertSet)
console.log('after back to array : ', resultConvert)