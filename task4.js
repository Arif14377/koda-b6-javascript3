// membuat program antri membeli nasi goreng

const data = [
    {
        name: "Koda",
        wait: 5, //detik
    },
    {
        name: "Arif",
        wait: 3,
    },
    {
        name: "Rahman",
        wait: 6
    },
    {
        name: "John",
        wait: 4
    },
    {
        name: "Robert",
        wait: 10
    }
]

function setWaktuHabis(nama, waktuTunggu, callback) {
    setTimeout(() => {
        console.log(`Halo ${nama}, pesananmu sudah selesai`)
        callback()
    }, waktuTunggu*1000)
}

function main(i = 0) {
    if (i >= data.length) {
        return
    }
    // const nama = data[i].name
    // const waktuTunggu = data[i].wait
    // |- Destructuring:
    const {name, wait} = data[i]

    console.log("Menunggu antrian")

    setWaktuHabis(name, wait, () => {
        main(i+1)
    })
}

main()