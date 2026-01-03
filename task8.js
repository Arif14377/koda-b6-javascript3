// Task 8
// Melakukan fetching data dari "https://jsonplaceholder.typicode.com/users"
// Mengubah uppercase string dari email menjadi lowercase
// - dengan built-in method && tanpa buit-in method
// Tampilkan lis email yang sudah diubah ke dalam bentuk array
// Handling fetch data dengan then-catch dan async-await

const url = "https://jsonplaceholder.typicode.com/users"

async function getAllData(url) {
    const res = await fetch(url)
    const dataUsers = await res.json()

    return dataUsers
}

async function getEmail(dataUsers) {
    const email = dataUsers.map(dataUser => dataUser.email.toLowerCase())
    return email
}

async function main() {
    const semuaData = await getAllData(url)

    const emails = await getEmail(semuaData)
    console.log(emails)
}

main()