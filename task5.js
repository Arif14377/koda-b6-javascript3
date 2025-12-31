// membuat program antri membeli nasi goreng

const data = [
    {
        name: "Koda",
        wait: 10, //detik
    },
    {
        name: "Arif",
        wait: 3,
    },
    {
        name: "Rahman",
        wait: 2
    },
    {
        name: "John",
        wait: 4
    },
    {
        name: "Robert",
        wait: 7
    }
]

// console.log(data[0].name)
// harusnya: Rahman, Robert, Arif, John, Koda
// console.log(typeof data)
console.log("Menunggu antrian...")

const processAsync = (data, notes)=>{
    return new Promise((resolve, reject)=>{
        // console.log(data[1])
        copyData = data
        waitingTime = []
        pembeli = []
        
        data.forEach(element => {
            waitingTime.push(element.wait * 1000)
            pembeli.push(element.name)
        });
        // console.log(pembeli)
        // console.log(waitingTime)
        // console.log(copyData[3].name)

        if (!Array.isArray(data)) {
            console.log("error. parameter bukan object")
        } else {
            for (let i = 0; i < data.length; i++) {
                setTimeout(()=>{
                    // console.log(copyData[i].name)
                    console.log(`Halo ${pembeli[i]} pesananmu sudah siap`)
                    setTimeout(()=>{
                        console.log("Menunggu antrian...")
                    }, waitingTime[i] + 100)
                }, waitingTime[i])
            }
        }
        resolve()
    });
};

processAsync(data)