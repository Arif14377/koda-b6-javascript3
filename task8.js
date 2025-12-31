// Task 8
// Melakukan fetching data dari "https://jsonplaceholder.typicode.com/users"
// Mengubah uppercase string dari email menjadi lowercase
// - dengan built-in method && tanpa buit-in method
// Tampilkan lis email yang sudah diubah ke dalam bentuk array
// Handling fetch data dengan then-catch dan async-await

const url = "https://jsonplaceholder.typicode.com/users"

async function getData() {
    try{
        const res = await fetch(url)
        const data = await res.json()

        for (i = 0; i < data.length; i++) {
            email = email.push(data[i].email)
            console.log(email)
        };

        
    }catch{
        console.log("fetch data gagal.")
    }
}

getData()