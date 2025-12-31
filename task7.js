// Membuat program antrian (queue)


const persons = [
    {
        name: "John",
        wait: 1.5
    },
    {
        name: "Ed",
        wait: 2
    },
    {
        name: "Jane",
        wait: 0.5
    }
]

function antrian(data) {
    return new Promise((resolve, reject) => {
        idx = 0
        if (persons) {
            setTimeout(()=>{
                console.log(person.name)
                idx += 1
                resolve(antrian())
            }, persons.wait * 1000)
        } else {
            reject()
        }
    })
}