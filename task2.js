// 1. Mencari 20 built-in method
// 2. Mencari 5 buit-in function
// 3. Jelaskan fungsi dan method yang ditemukan dengan komentar
// 4. berikan contoh penggunaannya


// 1. Built-in method
// 1.1. Math(min) : static method yang mengembalikan angka terkecil dari angka yang diberikan sebagai parameter input
const bilangan = [7, 2, 3, 4, 5, 6]
// console.log(Math.min(...bilangan))
// 1.2. Array.isArray(namaArray) : menentukan apakah value adalah array?
const num1 = 12
// console.log(Array.isArray(num1))
// console.log(Array.isArray(bilangan))
// 1.3. concat() : Menggabungkan nilai array
const bilangan2 = [5, 9, 10]
const bilangan3 = bilangan.concat(bilangan2)
// console.log(bilangan3)
// 1.4. every() : mengeksekusi sebuah function untuk setiap elemen array.
// return true jika fungsi mereturn true untuk semua elemen
// return false jika fungsi mereturn false pada salah satu elemen.
// membuat fungsi tes
// console.log(bilangan)
function checkBilangan(num) {
    return num < 5
}
// console.log(bilangan.every(checkBilangan))
// 1.5. fill() : mengisi element spesifik pada array dengan value
// jika posisi start dan end tidak ditentukan, maka seluruh element akan diisi
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi", 2, 4)
// console.log(fruits)

// 1.6. filter() : membuat array baru yang diisi dengan element yang lulus filter yang disediakan fungsi
result = bilangan.filter(isLowerThanFive)
function isLowerThanFive(num) {
    return num < 5;
}
// console.log(result)

// 1.7. find() : mengembalikan value dari element pertama yang lolos pengujian
// console.log(bilangan.find(checkBilangan))

// 1.8. findIndex() : mengembalikan index dari element pertama yang lolos pengujian
// console.log(bilangan.findIndex(checkBilangan))

// 1.9. flat() : Membuat array baru dan mengconcate sub-array
// menerima parameter kedalaman subarray
const myArr = [1, 2, [3, [4, 5, 6], 7], 8];
const newArr = myArr.flat(2);
// console.log(newArr)

// 1.10. forEach() : Metode ini memanggil sebuah fungsi untuk setiap elemen dalam sebuah array.
bilangan.forEach((element, idx) => {
    // console.log(element, idx)
});

// 1.11. Array.from() : Mengembalikan array dari objek apa pun yang memiliki properti length.
const text = "ABCDEFG";
let arrFrom = Array.from(text);
// console.log(arrFrom)

// 1.12. includes() : mengembalikan true jika array terdapat value yang ditentukan.
isBanana = fruits.includes("Banana");
// console.log(isBanana)

// 1.13. join() : mengembalikan array menjadi string. menerima parameter sebagai separator.
let textWithSeparator = fruits.join(" and ");
// console.log(textWithSeparator)

// 1.14. .split() : menjadikan string menjadi array dengan memasukkan parameter separator dan limit (opsional)
const kalimat = "belajar javascript dasar"
// console.log(kalimat.split(" "))

// 1.15. map() : Membuat array baru dengan memanggil sebuah fungsi untuk setiap elemen array.
const numbers = [65, 44, 12, 4];
const newArr2 = numbers.map(myFunction)
// console.log(newArr2)

function myFunction(num) {
  return num * 10;
}

// 1.16. Array.of() : Membuat array dari argument yang diterima.
let arrOf = Array.of(
    {
        nama: "Arif",
        age: 26
    },
    "Arif"
)
// console.log(arrOf)

// 1.17. .push() : menambah item ke array
// console.log(fruits)
fruits.push("Alpukat")
// console.log(fruits)

// 1.18. reverse() : membalik urutan elemen dalam array
// console.log(fruits)
fruits.reverse()
// console.log(fruits)

// 1.19. sort() : sortir array string dari A-Z.
// kalau ingin dari Z-A, sort() dahulu lalu reverse()
// kalau sort number, pakai fungsi tambahan pada parameternya
const points = [40, 100, 1, 5, 25, 10];

points.sort(function(a, b){return b-a});

// console.log(points)

// 1.20. trim() : Menghapus spasi kosong dari kedua sisi string.
let text2 = "       Hello World!        ";
let result3 = text2.trim();
// console.log(result3)

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
// const arr3 = arr1.concat(arr2)
// console.log(arr3)

// 2.5. every() : mengembalikan false jika menemukan satu elemen di dalam array yang tidak memenuhi fungsi perbandingan yang diberikan, sebaliknya mereturn true jika memenuhi.
// every(callbackFn, thisArg)

const isBigEnough = arr1.every(x => {
    return x < 5
})
// console.log(isBigEnough)