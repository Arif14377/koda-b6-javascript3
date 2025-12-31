// membuat fungsi agar tidak mengambil data dari luar
// membuat pro

const persons = [
    {name: "Arif", wait: 3},
    {name: "", wait: 2},
    {name: "Hilal", wait: 5}
]

function queue(data) {
    let index = 0
    function start(){
        return new Promise((resolve) => {
            const person = data[index]
            if(person.name.length > 0) {
                console.log("Menunggu antrian...")
                setTimeout(()=>{
                    console.log(`Pesanan "${person.name}"`)
                    index += 1
                    resolve(start())
                }, person.wait * 1000)
            } else if (person.name.length < 1){
                index += 1
                resolve(start())
                reject()
            } else {
                console.log("data tidak ada")
            }
        })
    }
    return start()
}

queue(persons).then().catch((err)=>{
    console.log("Nama tidak ada")
})