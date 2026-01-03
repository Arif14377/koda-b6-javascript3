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



function setWaktuHabis(nama, waktuTunggu) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Halo ${nama}, pesananmu sudah selesai`)
            resolve()
        }, waktuTunggu * 1000)
    })
}

async function cetakAntrian(data) {
    for (const person of data) {
        console.log(`Menunggu antrian... (${person.wait} detik)`);
        await setWaktuHabis(person.name, person.wait);
    }
}

cetakAntrian(persons);