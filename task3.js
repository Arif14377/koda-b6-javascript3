// 1. terima searchKeyword
// 2. cek apakah searchKeyword ada di database nama student
// 3. Jika ada, ada di index ke berapa?


students = {
    name: ["Mika", "Mikayla", "Mikael", "Mamika", "Arif", "salika", "romeo"]
}


searchStudent("Ika")

function searchStudent(searchKeyword, callback) {
    searchKeyword = searchKeyword.toLowerCase()
    console.log(searchKeyword)
    searchResult = []

    students.name.forEach(element => {
        for(i=0; i<element.length; i++) {
            for(x=0; x<searchKeyword.length; x++){
                if(element[i].includes(searchKeyword[x]) && element[i].includes(searchKeyword[x+1])){
                    searchResult = searchResult.push(element)
                    console.log(searchResult)
                } else {

                }
            }
        }

    });
    
}

function countResult(arr) {
    count = arr.length
    return count
}