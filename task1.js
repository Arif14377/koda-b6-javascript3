// mencari built-in function dan buat manualnya
// kumpulkan di repo javascript 3

// Built in Function toReversed()
const items = [1, 2, 3, 4, 5]
console.log(items)

// const reversedItems = items.toReversed();
// console.log(reversedItems)

// Manual
let reversedItem = []

panjangArray = items.length
console.log(panjangArray)


for(let i=panjangArray-1; i>=0; i--) {
    reversedItem = [
        ...reversedItem,
        items[i]
    ]
}

console.log(reversedItem)