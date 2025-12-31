// 1. Mencari 20 built-in method
// 2. Mencari 5 buit-in function
// 3. Jelaskan fungsi dan method yang ditemukan dengan komentar
// 4. berikan contoh penggunaannya


// 1. Built-in method
// 1.1. Math(min) : static method yang mengembalikan angka terkecil dari angka yang diberikan sebagai parameter input
const bilangan = [7, 2, 3, 4, 5, 6]
// console.log(Math.min(...bilangan))
// 2.1. Array.isArray(namaArray) : menentukan apakah value adalah array?
const num1 = 12
// console.log(Array.isArray(num1))
// console.log(Array.isArray(bilangan))

// 2. Built-in function
// 2.1. isNaN() : menentukan apakah sebuah value adalah NaN. contoh:
const a = "Koda"
const b = 1

// console.log(isNaN(a))
// console.log(isNaN(b))

// 2.2. Number() : Konversi string ke number
const nama1 = "123"
// console.log(typeof nama1)
// console.log(typeof Number(nama1))

// 2.3. parseFloat() : mengembalikan return float number
const num = "30.0"
parseFloat(num)
// console.log(typeof num)

// 2.4. concat() : untuk merging 2 array atau lebih
const arr1 = [1, 2, 3, 4]
const arr2 = ["a", "b", "c", "d"]
const arr3 = arr1.concat(arr2)
console.log(arr3)

// 2.5. every() : mengembalikan false jika menemukan satu elemen di dalam array yang tidak memenuhi fungsi perbandingan yang diberikan, sebaliknya mereturn true jika memenuhi.
// every(callbackFn, thisArg)

const isBigEnough = arr1.every(x => {
    return x < 5
})
// console.log(isBigEnough)

// 2.6. filter() : 