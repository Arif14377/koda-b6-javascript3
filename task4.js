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

function waktuTunggu(data) {
    let tampungData = data
    let timer = 0

    tampungData.forEach((element, index) => {
        if (index == 0) {
            timer = timer
        } else {
            timer = (timer + element.wait)*1000
        }

        setTimeout(()=>{
            console.log("Menunggu antrian...")
        }, timer)

        setTimeout(()=>{
            console.log(`Halo ${element.name}, pesananmu sudah selesai.`)
        }, timer)
    });
}



function urutAntrian(data) {
    let tampungData = data
    let antrian = []
    console.log(data[0].wait)
    tampungData.forEach((element, index) => {
        for (i = 0; i < data.length; i++) {
            if (element.wait < data[i].wait && index !== i) {
                antrian.push(element)
            }
            
        }
    });
    console.log(antrian)
}

waktuTunggu(data)
// urutAntrian(data)