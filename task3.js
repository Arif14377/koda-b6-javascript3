// 1. terima searchKeyword
// 2. cek apakah searchKeyword ada di database nama student
// 3. Jika ada, ada di index ke berapa?


students = {
    name: ["Mika", "Mikayla", "Mikael", "Mamika", "Arif", "salika", "romeo"]
}

searchStudent("Ka", countResult)

function searchStudent(searchKeyword, cb) {
    const keyword = searchKeyword.toLowerCase()
    console.log(keyword)

    const result = students.name.filter(nama => {
        return nama.toLowerCase().includes(keyword)
    })

    console.log(result)

    
}

function countResult(res) {
    console.log(`Hasil pencarian: ${res.length}`)
}